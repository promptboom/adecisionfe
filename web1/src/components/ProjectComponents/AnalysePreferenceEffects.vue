<template>
  <div class="my-8">
    <v-row>
      <v-col cols="12">
        <v-card outlined>
          <span class="text-body-1 float-start mt-n3 ml-2 px-2" style="background-color: white; color: #CC3333;">Criterion value functions</span>
          <v-container>
            <p class="text-body-2 mt-2 px-2">Each criterion's value function shows the 'shape' of the preference values for the levels on the criterion.</p>
            <div class="pa-16">
              <canvas ref="preferanceEffectsBarChart"></canvas>
            </div>
          </v-container>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card outlined>
          <span class="text-body-1 float-start mt-n3 ml-2 px-2" style="background-color: white; color: #CC3333;">Differences between the preference values of adjacent levels</span>
          <v-container>
            <p class="text-body-2 mt-2 px-2">Each preference value difference is the marginal effect of moving from the previous level on the criterion.</p>
          </v-container>

          <v-container>
            <div class="my-8 mx-8" v-for="(item, index) in PreferenceEffectsItems" :key="index">
              <v-row>
                <v-col cols="6">
                  <span class="text-body-1 font-weight-bold">{{ item.title }}</span>
                </v-col>
                <v-col cols="6" class="d-flex justify-center">
                  <v-row v-if="index == 0">
                    <v-col cols="6">
                      <span class="text-body-1 font-weight-bold float-right">Preference value</span>
                    </v-col>
                    <v-col cols="6">
                      <span class="text-body-1 font-weight-bold float-left">Difference</span>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-divider class="mt-1"></v-divider>
              <v-row v-for="(levelItem, levelIndex) in item.levelItems" :key="levelIndex" class="mt-1">
                <v-col cols="6">
                  <span class="text-body-1 font-weight-bold ml-4">{{ levelItem.name }}</span>
                </v-col>
                <v-col cols="6" class="d-flex justify-center">
                  <v-row>
                    <v-col cols="6">
                      <span class="text-body-1 grey--text font-weight-bold float-right">{{ levelItem.preferValue.toFixed(1) }} %</span>
                    </v-col>
                    <v-col cols="6">
                      <span class="text-body-1 font-weight-bold">{{ levelItem.preferValue.toFixed(1) }} %</span>

                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
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
  name: 'AnalysePreferenceEffects',

  components: {
  },

  data() {
    return {
      preferenceEffectsTags: ['size', 'beach', 'type', 'isok', 'position', 'school'],
      preferenceEffectsLabels: [1, 2, 3, 4, 5, 6],
      preferenceEffectsData: [
        [0.23, 0.32, 0.12, 0.3],
        [0.25, 0.12, 0.34, 0.25, 0.1, 0.16],
        [0.21, 0.32, 0.64, 0.65, 0.12, 0.36],
        [0.45, 0.32, 0.14],
        [0.25, 0.42, 0.14, 0.05],
      ],

      PreferenceEffectsItems: [
        {
          title: 'sasasa', 
          levelItems: [
            { name: 'sdfjaksdf', preferValue: 23 },
            { name: 'dsf', preferValue: 21 },
            { name: 'sdfjakr33fsdf', preferValue: 13 },
          ],
        },
        {
          title: 'sasasa', 
          levelItems: [
            { name: 'sdfjaksdf', preferValue: 23 },
            { name: 'dsf', preferValue: 21 },
            { name: 'sdfjakr33fsdf', preferValue: 13 },
          ],
        },
        {
          title: 'sasasa', 
          levelItems: [
            { name: 'sdfjaksdf', preferValue: 23 },
            { name: 'dsf', preferValue: 21 },
            { name: 'sdfjakr33fsdf', preferValue: 13 },
          ],
        },
        {
          title: 'sasasa', 
          levelItems: [
            { name: 'sdfjaksdf', preferValue: 23 },
            { name: 'dsf', preferValue: 21 },
            { name: 'sdfjakr33fsdf', preferValue: 13 },
          ],
        },
      ]
    }
  },

  created() {
  },

  mounted() {
    this.generatePreferenceEffectsChart()

  },
  
  methods: {
    generatePreferenceEffectsChart() {
      const ctx = this.$refs.preferanceEffectsBarChart.getContext('2d');
      // const chart = new Chart(ctx, {
      //   type: 'line',
      //   data: {
      //     labels: this.preferenceEffectsLabels,
      //     datasets: [
      //       {
      //         label: this.preferenceEffectsTags[0],
      //         data: this.preferenceEffectsData[0],
      //         fill: false,
      //         borderColor: 'rgba(255, 160, 180, 1)',
      //         tension: 0.2,
      //         pointStyle: 'rectRot',
      //         pointRadius: 10,
      //         pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
      //         backgroundColor: 'rgba(255, 160, 180, 1)',
      //         borderWidth: 4,
      //         hoverBorderColor: 'rgba(255, 200, 144, 1)',
      //       },
      //       {
      //         label: this.preferenceEffectsTags[1],
      //         data: this.preferenceEffectsData[1],
      //         fill: false,
      //         borderColor: 'rgba(255, 200, 144, 1)',
      //         tension: 0.2,
      //         pointStyle: 'triangle',
      //         pointRadius: 10,
      //         pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
      //         backgroundColor: 'rgba(255, 200, 144, 1)',
      //         borderWidth: 4
      //       },
      //       {
      //         label: this.preferenceEffectsTags[2],
      //         data: this.preferenceEffectsData[2],
      //         fill: false,
      //         borderColor: 'rgba(255, 225, 154, 1)',
      //         tension: 0.2,
      //         pointStyle: 'circle',
      //         pointRadius: 10,
      //         pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
      //         backgroundColor: 'rgba(255, 225, 154, 1)',
      //         borderWidth: 4
      //       },
      //       {
      //         label: this.preferenceEffectsTags[3],
      //         data: this.preferenceEffectsData[3],
      //         fill: false,
      //         borderColor: 'rgba(165, 223, 223, 1)',
      //         tension: 0.2,
      //         pointStyle: 'rect',
      //         pointRadius: 10,
      //         pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
      //         backgroundColor: 'rgba(165, 223, 223, 1)',
      //         borderWidth: 4 
      //       },
      //       {
      //         label: this.preferenceEffectsTags[4],
      //         data: this.preferenceEffectsData[4],
      //         fill: false,
      //         borderColor: 'rgba(154, 208, 245, 1)',
      //         tension: 0.2,
      //         pointStyle: 'rectRounded',
      //         pointRadius: 10,
      //         pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
      //         backgroundColor: 'rgba(154, 208, 245, 1)',
      //         borderWidth: 4
      //       },
      //     ]
      //   },
      //   options: {
      //     responsive: true,
      //     scales: {
      //       x: {
      //         title: {
      //           display: true,
      //           font: {
      //             size: 18,
      //             weight: 1000,
      //           },
      //           text: 'Levels'
      //         },
      //         ticks: {
      //           font: {
      //             size: 12,
      //             weight: 1000,
      //           },
      //         }
      //       },
      //       y: {
      //         title: {
      //           display: true,
      //           font: {
      //             size: 18,
      //             weight: 1000,
      //           },
      //           text: 'Preference Values'
      //         },
      //         ticks: {
      //           callback: function(value) {
      //             return (value * 100) + '%';
      //           },
      //           font: {
      //             size: 12,
      //             weight: 1000,
      //           },
      //         }
      //       }
      //     },
      //     plugins: {
      //       legend: {
      //         display: true,
      //         position: 'top',
      //         labels: {
      //           usePointStyle: true,
      //         }
      //       },
      //       tooltip: {
      //         callbacks: {
      //           label: function(context) {
      //             var label = context.dataset.label || '';
      //             if (label) {
      //               label += ': ';
      //             }
      //             if (context.parsed.y !== null) {
      //               label += (context.parsed.y * 100).toFixed(2) + '%';
      //             }
      //             return label;
      //           }
      //         }
      //       }
      //     },
      //     hover: {
      //       onHover: function(event, chartElement) {
      //         if (chartElement.length > 0) {
      //           const hoveredIndex = chartElement[0].index;
      //           chart.data.datasets.forEach((dataset, index) => {
      //             if (index !== chartElement[0].datasetIndex) {
      //               dataset.borderColor = 'rgba(0, 0, 0, 0.1)'; // 将其他线条的颜色调整为更淡
      //             }
      //           });
      //           chart.update();
      //         } else {
      //           chart.data.datasets.forEach((dataset, index) => {
      //             dataset.borderColor = index === 0 ? 'red' : 'blue'; // 恢复原始线条颜色
      //           });
      //           chart.update();
      //         }
      //       }
      //     }
      //   }
      // });
      const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.preferenceEffectsLabels,
        datasets: [
          {
            label: this.preferenceEffectsTags[0],
            data: this.preferenceEffectsData[0],
            fill: false,
            borderColor: 'rgba(255, 160, 180, 1)',
            tension: 0.2,
            pointStyle: 'rectRot',
            pointRadius: 10,
            pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
            backgroundColor: 'rgba(255, 160, 180, 1)',
            borderWidth: 4,
            hoverBorderColor: 'rgba(255, 200, 144, 1)',
          },
          {
            label: this.preferenceEffectsTags[1],
            data: this.preferenceEffectsData[1],
            fill: false,
            borderColor: 'rgba(255, 200, 144, 1)',
            tension: 0.2,
            pointStyle: 'triangle',
            pointRadius: 10,
            pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
            backgroundColor: 'rgba(255, 200, 144, 1)',
            borderWidth: 4
          },
          {
            label: this.preferenceEffectsTags[2],
            data: this.preferenceEffectsData[2],
            fill: false,
            borderColor: 'rgba(255, 225, 154, 1)',
            tension: 0.2,
            pointStyle: 'circle',
            pointRadius: 10,
            pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
            backgroundColor: 'rgba(255, 225, 154, 1)',
            borderWidth: 4
          },
          {
            label: this.preferenceEffectsTags[3],
            data: this.preferenceEffectsData[3],
            fill: false,
            borderColor: 'rgba(165, 223, 223, 1)',
            tension: 0.2,
            pointStyle: 'rect',
            pointRadius: 10,
            pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
            backgroundColor: 'rgba(165, 223, 223, 1)',
            borderWidth: 4 
          },
          {
            label: this.preferenceEffectsTags[4],
            data: this.preferenceEffectsData[4],
            fill: false,
            borderColor: 'rgba(154, 208, 245, 1)',
            tension: 0.2,
            pointStyle: 'rectRounded',
            pointRadius: 10,
            pointBorderColor: 'rgba(0, 0, 0, 0)', // Remove border for points
            backgroundColor: 'rgba(154, 208, 245, 1)',
            borderWidth: 4
          },
        ]
      },
      options: {
        plugins: {
          tooltip: {
            // 启用提示工具
            enabled: true,
            // 自定义提示工具外观和行为
            mode: 'index',
            intersect: false,
            position: 'nearest',
          }
        },
        onHover: (event, chartElement, chart) => {
          if (chartElement.length > 0) {
            const hoveredIndex = chartElement[0].index;
            chart.data.datasets.forEach((dataset, index) => {
              if (index === chartElement[0].datasetIndex) {
                // 突出显示当前折线
                dataset.borderWidth = 4; // 增加边框宽度
                dataset.borderColor = 'rgba(255, 99, 132, 1)'; // 改变边框颜色
              } else {
                // 恢复其他折线的样式
                dataset.borderWidth = 2; // 默认边框宽度
                dataset.borderColor = 'rgba(0, 0, 0, 0.1)'; // 默认边框颜色
              }
            });
            chart.update();
          } else {
            // 鼠标不覆盖在任何数据点上时，恢复所有折线的默认样式
            chart.data.datasets.forEach((dataset) => {
              dataset.borderWidth = 2; // 默认边框宽度
              dataset.borderColor = 'rgba(0, 0, 0, 0.1)'; // 默认边框颜色
            });
            chart.update();
          }
        },
        scales: {
          // 配置坐标轴
        }
      }
    });
    },
  }
};
</script>

<style scoped>
</style>