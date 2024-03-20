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
      preferenceData: [23, 32, 12, 30, 20, 16]
    }
  },

  created() {
  },

  mounted() {
    this.generatePreferenceChart();
  },
  
  methods: {
    generatePreferenceChart() {
      const ctx = this.$refs.perferanceBarChart.getContext('2d');
      new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: this.preferenceTags,
          datasets: [{
            data: this.preferenceData,
            backgroundColor: '#67c9cb',
            label: 'Dataset 1',
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
                }
              }
            }
          },
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Polar Area Chart With Centered Point Labels'
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