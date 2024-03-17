<template>
  <v-container>
    <div>
      <div class="d-flex align-center">
        <span class="mr-4 my-4 text-h6 font-weight-black">RESULTS</span>
        <v-divider></v-divider>
      </div>
    </div>

    <div class="mt-4">
      <v-row>
        <v-col cols="6">
          <v-card outlined height="450">
            <span class="text-body-1 float-start mt-n3 ml-2 px-2" style="background-color: white; color: #CC3333;">Preferance Analysis</span>
            <v-container>
              <p class="text-body-2 mt-2 px-2">These numbers, determined by your trade-offs, represent the relative importance of your criteria.</p>
              <div class="pa-4">
                <canvas ref="perferanceBarChart"></canvas>
              </div>
            </v-container>
            <div class="d-flex justify-center">
              <v-btn color="#439798" class="text-capitalize text-body-1 my-4" outlined @click="handleQuitProject">
                Preferance Analysis
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined height="450">
            <span class="text-body-1 float-start mt-n3 ml-2 px-2" style="background-color: white; color: #CC3333;">Alternatives Analysis</span>
            <v-container>
              <p class="text-body-2 mt-2 px-2">Your alternatives ranked by their total score, based on your preference values.</p>
              <div class="pa-4">
                <canvas ref="alternativeBarChart"></canvas>
              </div>
            </v-container>
            
            <div class="d-flex justify-center">
              <v-btn color="#439798" class="text-capitalize text-body-1 my-4" outlined @click="handleQuitProject">
                Alternatives Analysis
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
  
<script>
import Chart from 'chart.js/auto';

export default {
  name: 'ProjectAnalyseSummary',

  components: {
  },

  data() {
    return {
      preferanceTags: ['size', 'beach', 'type', 'isok', 'position', 'school'],
      preferanceData: [0.23, 0.32, 0.12, 0.3, 0.2, 0.16]
    }
  },

  created() {

  },

  mounted() {
    this.generatePreferanceChart();
    this.generateAlternativeChart();

  },
  
  methods: {
    generatePreferanceChart() {
      const ctx = this.$refs.perferanceBarChart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.preferanceTags,
          datasets: [{
            data: this.preferanceData,
            backgroundColor: '#67c9cb',
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false 
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  var label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += (context.parsed.y * 100).toFixed(2) + '%';
                  }
                  return label;
                }
              }
            }
          },
          scales: {
            y: {
              grid: {
                display: true ,
              },
              ticks: {
                callback: function(value) {
                  return (value * 100) + '%';
                }
              },
              border: {
                display: false 
              },
            },
            x: {
              grid: {
                display: false 
              }
            }
          }
        }
      });
    },
    generateAlternativeChart() {
      const ctx = this.$refs.alternativeBarChart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Alternative 1', 'Alternative 2', 'Alternative 3'],
          datasets: [
            {
              label: 'Comparison Results',
              data: [1, 2, 1],
              backgroundColor: 'pink',
              borderWidth: 1
            },
            {
              label: 'Comparison Results1',
              data: [2, 3, 3],
              backgroundColor: 'green',
              borderWidth: 1
            },
            {
              label: 'Comparison Results2',
              data: [1, 2, 3],
              backgroundColor: 'blue',
              borderWidth: 1
            }
          ]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              stacked: true,
              border: {
                display: false
              },
            },
            x: {
              stacked: true,
              grid: {
                display: false,
              },
              ticks: {
                display: false
              },
              border: {
                display: false
              },
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>

</style>

