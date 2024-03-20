<template>
  <div class="my-8">
    <v-row>
      <v-col cols="6">
        <v-card outlined>
          <span class="text-body-1 float-start mt-n3 ml-2 px-2" style="background-color: white; color: #CC3333;">Chart of criterion weights</span>
          <v-container>
            <p class="text-body-2 mt-2 px-2">The relative importance, or weight, of the criteria- summing to 100%.</p>
            <div class="pa-4">
              <canvas ref="perferanceBarChart"></canvas>
            </div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    
  </div>
</template>
  
<script>
import Chart from 'chart.js/auto';

export default {
  name: 'AnalysePreferenceCriteria',

  components: {
    
  },

  data() {
    return {
      preferenceCriteriaTags: ['size', 'beach', 'type', 'isok', 'position', 'school'],
      preferenceData: [0.23, 0.32, 0.12, 0.3, 0.2, 0.16]
    }
  },

  created() {
  },

  mounted() {
    this.generatePreferenceCriteriaChart();
  },
  
  methods: {
    generatePreferenceCriteriaChart() {
      const ctx = this.$refs.perferanceBarChart.getContext('2d');
      new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: this.preferenceCriteriaTags,
          datasets: [{
            data: this.preferenceData,
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