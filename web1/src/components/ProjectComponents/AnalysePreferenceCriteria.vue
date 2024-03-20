<template>
  <div class="my-8">
    <v-row>
      <v-col cols="6">
        <v-card outlined>
          <span class="text-body-1 float-start mt-n3 ml-2 px-2" style="background-color: white; color: #CC3333;">Chart of criterion weights</span>
          <v-container>
            <p class="text-body-2 mt-2 px-2">The relative importance, or weight, of the criteria- summing to 100%.</p>
            <div class="pa-4">
              <canvas ref="preferanceCriteriaBarChart"></canvas>
            </div>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card outlined>
          <span class="text-body-1 float-start mt-n3 ml-2 px-2" style="background-color: white; color: #CC3333;">Chart of preference values</span>
          <v-container>
            <p class="text-body-2 mt-2 px-2">The 'degree of performance' of the levels on the criteria.</p>
            <v-row no-gutters class="mt-8">
              <v-col cols="6" class="my-4" v-for="(item, index) in preferenceLevelsItems" :key="index">
                <v-card class="mx-1">
                  <div class="grey lighten-4 d-flex justify-center mb-4">
                    <span class="text-body-1 font-weight-bold my-2">{{ item.title }}</span>
                  </div>
                  <div class="px-2 pb-2">
                    <YA_ChartBar :ref="'ChartBar' + index" />
                  </div>
                </v-card>
                

              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    
  </div>
</template>
  
<script>
import Chart from 'chart.js/auto';
import YA_ChartBar from '@/components/SocialComponents/YA_ChartBar.vue';

export default {
  name: 'AnalysePreferenceCriteria',

  components: {
    YA_ChartBar,
  },

  data() {
    return {
      preferenceCriteriaTags: ['size', 'beach', 'type', 'isok', 'position', 'school'],
      preferenceCriteriaData: [0.23, 0.32, 0.12, 0.3, 0.2, 0.16],

      preferenceLevelsItems: [
        {
          title: 'size',
          levels: ['big', 'large', 'little'],
        },
        {
          title: 'beach',
          levels: ['not', 'yes', 'none'],
        },
        {
          title: 'type',
          levels: ['one', 'two', 'three'],
        },
      ],
      preferenceLevelsData: [
        [0.2, 0.3, 0.2],
        [0.2, 0.3, 0.2],
        [0.2, 0.3, 0.2],
      ]
    }
  },

  created() {
  },

  mounted() {
    this.generatePreferenceCriteriaChart();
    this.preferenceLevelsItems.forEach((item, index) => {
      this.$refs['ChartBar' + index][0].handleChartBarCreate(item.levels, this.preferenceLevelsData[index], item.title, ['rgba(255, 160, 180, 0.8)', 'rgba(255, 200, 144, 0.8)']);
    });
  },
  
  methods: {
    generatePreferenceCriteriaChart() {
      const ctx = this.$refs.preferanceCriteriaBarChart.getContext('2d');
      new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: this.preferenceCriteriaTags,
          datasets: [{
            data: this.preferenceCriteriaData,
            backgroundColor: [
              'rgba(255, 160, 180, 0.8)',
              'rgba(255, 200, 144, 0.8)',
              'rgba(255, 225, 154, 0.8)',
              'rgba(165, 223, 223, 0.8)',
              'rgba(154, 208, 245, 0.8)',
            ],
            label: 'Criteria',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            r: {
              pointLabels: {
                display: true,
                centerPointLabels: true,
                font: {
                  size: 18
                },
                ticks: {
                  callback: function(value) {
                    return (value * 100) + '%';
                  }
                },
              },
              ticks: {
                callback: function(value) {
                  return (value * 100) + '%';
                }
              },
            }
          },
          plugins: {
            legend: {
              display: false,
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  var label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.r !== null) {
                    label += (context.parsed.r * 100).toFixed(2) + '%';
                  }
                  return label;
                }
              }
            }
          }
        }
      });
    },
    
  }
};
</script>

<style scoped>
</style>