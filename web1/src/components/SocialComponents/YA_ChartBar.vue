<template>
    <div>
        <div>
            <canvas ref="ChartBar"></canvas>
        </div>
      
    </div>
  </template>
    
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'YA_ChartBar',
  
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
      handleChartBarCreate(labels, data, title, color) {
        const ctx = this.$refs.ChartBar.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: color,
                borderWidth: 1
              },
            ]
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
                },
                title: {
                  display: false,
                  text: title,
                  font: {
                    weight: 'bold',
                    color: 'black',
                    size: 16
                  }
                },
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