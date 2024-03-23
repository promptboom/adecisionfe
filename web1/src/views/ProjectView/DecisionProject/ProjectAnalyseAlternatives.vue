<template>
  <v-container>
    <div>
      <div class="d-flex align-center">
        <span class="mr-4 my-4 text-h6 font-weight-black">ALTERNATIVES</span>
        <v-divider></v-divider>
      </div>
      <div class="ml-4 mb-4 d-flex">
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text ml-4" small>
          <v-icon size="20" class="mr-1" color="white">mdi-plus</v-icon>
          New Alternative
        </v-btn>
        <v-btn color="#439798" class="text-capitalize text-body-1 ml-4" small text>
          <!-- <v-icon size="20" class="mr-1">mdi-plus</v-icon> -->
          Copy
        </v-btn>
        <v-btn color="#439798" class="text-capitalize text-body-1 ml-4" small text>
          <!-- <v-icon size="20" class="mr-1">mdi-plus</v-icon> -->
          Compare
        </v-btn>
        <v-btn color="#439798" class="text-capitalize text-body-1 ml-4" small text>
          <!-- <v-icon size="20" class="mr-1">mdi-plus</v-icon> -->
          Delete
        </v-btn>
        
      </div>
      <v-divider></v-divider>
    </div>

    <div class="mt-4">
      <v-card elevation="3">
        <v-card-title class="d-flex justify-space-between">
          <div>
            Alternative List
          </div>
          <div class="d-flex align-center">
            <span class="text-body-1 font-weight-black mr-4">Show Criteria</span>
            <v-switch
              v-model="criteriaShow"
              inset
            ></v-switch>
          </div>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="calories"
          class="elevation-1"
          fixed-header
          v-model="alternativesSelected"
          item-key="name"
          show-select
        >
          <template v-slot:[`item.name`]="{ item }">
            <div class="d-flex">
              <v-btn color="#439798" class="text-capitalize text-body-1 white--text" x-small>
                Edit
              </v-btn>
              <span class="text-body-1 font-weight-black ml-4">{{ item.name }}</span>
            </div>
          </template>
          <template v-slot:[`item.contribution`]="{ item }">
            <!-- <YA_AlternativesChart :ref="'ChartBar' + index" :labels="item.preferenceCriteria" :data="item.preferenceLevel" /> -->
            <YA_AlternativesProgress :data="item.preferenceLevel1" />

          </template>
          <template v-slot:no-data>
            <v-btn
              color="primary"
              @click="initialize"
            >
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </v-container>
</template>
  
<script>
// import YA_AlternativesChart from '@/components/SocialComponents/YA_AlternativesChart.vue';
import YA_AlternativesProgress from '@/components/SocialComponents/YA_AlternativesProgress.vue';

export default {
  name: 'ProjectAnalyseAlternatives',

  components: {
    // YA_AlternativesChart,
    YA_AlternativesProgress,
  },

  data() {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
          width: 300,
        },
        { text: 'Rank', value: 'rank' },
        { text: 'Total score', value: 'score' },
        { text: 'Criterion contribution', value: 'contribution', sortable: false, width: 200, },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
      ],
      desserts: [],

      alternativesSelected: [],

      criteriaShow: false,
    }
  },

  created() {
    this.initialize()

  },

  mounted() {
    // this.desserts.forEach((item, index) => {
    //   this.$refs['ChartBar' + index].handleChartBarCreate();
    // });
  },
  
  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          rank: 1,
          score: 1, 
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          preferenceCriteria: ['size', 'beach', 'type', 'isok', 'position', 'school'],
          preferenceLevel: [[0.23], [0.32], [0.12], [0.3]],
          preferenceLevel1: [
            {
              name: 'size',
              content: '123',
              value: 0.23,
              color: 'red',
            },
            {
              name: 'beach',
              content: '123',
              value: 0.32,
              color: 'orange',

            },
            {
              name: 'type',
              content: '123',
              value: 0.12,
              color: 'yellow',
            },
            {
              name: 'isok',
              content: '123',
              value: 0.3,
              color: 'green',

            },
            {
              name: 'position',
              content: '123',
              value: 0,
              color: 'pink',
            },
            {
              name: 'school',
              content: '123',
              value: 0,
              color: 'blue',
            },
          ],
        },
        {
          name: 'Ice cream sandwich',
          rank: 2,
          score: 1, 
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          preferenceCriteria: ['size', 'beach', 'type', 'isok', 'position', 'school'],
          preferenceLevel: [[0.33], [0.22], [0.22], [0.13], [0.32]],
          preferenceLevel1: [
            {
              name: 'size',
              content: '123',
              value: 0.33,
              color: 'red',

            },
            {
              name: 'beach',
              content: '123',
              value: 0.22,
              color: 'orange',
            },
            {
              name: 'type',
              content: '123',
              value: 0.22,
              color: 'yellow',
            },
            {
              name: 'isok',
              content: '123',
              value: 0.13,
              color: 'green',
            },
            {
              name: 'position',
              content: '123',
              value: 0.32,
              color: 'pink',
            },
            {
              name: 'school',
              content: '123',
              value: 0,
              color: 'blue',
            },
          ],
        },
        // {
        //   name: 'Eclair',
        //   rank: 3,
        //   score: 1, 
        //   calories: 262,
        //   fat: 16.0,
        //   carbs: 23,
        //   protein: 6.0,
        // },
        // {
        //   name: 'Cupcake',
        //   rank: 3,
        //   score: 1, 
        //   calories: 305,
        //   fat: 3.7,
        //   carbs: 67,
        //   protein: 4.3,
        // },
        // {
        //   name: 'Gingerbread',
        //   rank: 3,
        //   score: 1, 
        //   calories: 356,
        //   fat: 16.0,
        //   carbs: 49,
        //   protein: 3.9,
        // },
        // {
        //   name: 'Jelly bean',
        //   rank: 3,
        //   score: 1, 
        //   calories: 375,
        //   fat: 0.0,
        //   carbs: 94,
        //   protein: 0.0,
        // },
        // {
        //   name: 'Lollipop',
        //   rank: 3,
        //   score: 1, 
        //   calories: 392,
        //   fat: 0.2,
        //   carbs: 98,
        //   protein: 0,
        // },
        // {
        //   name: 'Honeycomb',
        //   rank: 3,
        //   score: 1, 
        //   calories: 408,
        //   fat: 3.2,
        //   carbs: 87,
        //   protein: 6.5,
        // },
        // {
        //   name: 'Donut',
        //   rank: 3,
        //   score: 1, 
        //   calories: 452,
        //   fat: 25.0,
        //   carbs: 51,
        //   protein: 4.9,
        // },
        // {
        //   name: 'Donut1',
        //   rank: 3,
        //   score: 1, 
        //   calories: 452,
        //   fat: 25.0,
        //   carbs: 51,
        //   protein: 4.9,
        // },
        // {
        //   name: 'Donut2',
        //   rank: 3,
        //   score: 1, 
        //   calories: 452,
        //   fat: 25.0,
        //   carbs: 51,
        //   protein: 4.9,
        // },
        // {
        //   name: 'Donut3',
        //   rank: 3,
        //   score: 1, 
        //   calories: 452,
        //   fat: 25.0,
        //   carbs: 51,
        //   protein: 4.9,
        // },
        // {
        //   name: 'Donut4',
        //   rank: 3,
        //   score: 1, 
        //   calories: 452,
        //   fat: 25.0,
        //   carbs: 51,
        //   protein: 4.9,
        // },
        // {
        //   name: 'KitKat',
        //   rank: 3,
        //   score: 1, 
        //   calories: 518,
        //   fat: 26.0,
        //   carbs: 65,
        //   protein: 7,
        // },
      ]
    },
  }
};
</script>

<style scoped>

</style>