<template>
  <div>
      <div style="height: 50px;" class="d-flex align-center">
          <canvas ref="AlternativesChart"></canvas>
      </div>
    
  </div>
</template>
  
<script>
import Chart from 'chart.js/auto';

export default {
  name: 'YA_AlternativesChart',

  props: {
    labels: Array,
    data: Array,
  },

  components: {
    
  },

  data() {
    return {
    }
  },

  created() {
  },

  mounted() {
  },
  
  methods: {
    handleChartBarCreate() {
      console.log(this.labels, this.data)
      const ctx = this.$refs.AlternativesChart.getContext('2d');
      const midDatasets = []
      const midColor = ['red', 'orange', 'yellow', 'green', 'pink', 'blue', 'purple']
      this.labels.forEach((item, index) => {
        let midItem = {}
        midItem.label = item
        midItem.data = this.data[index]
        midItem.backgroundColor = midColor[index % 7]
        midItem.borderWidth = 1
        midDatasets.push(midItem)
      });
      console.log(midDatasets)
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Alternative 1'],
          datasets: midDatasets,
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              
              callbacks: {
                title: function(context) {
                  return '';
                },
                label: function(context) {
                  var label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.x !== null) {
                    label += (context.parsed.x * 100).toFixed(2) + '%';
                  }
                  return label;
                }
              }
            }
          },
          scales: {
            y: {
              grid: {
                display: false ,
              },
              stacked: true,
              border: {
                display: false
              },
              ticks: {
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
          },
        }
      });
    },
  }
};
</script>

<style scoped>
</style>