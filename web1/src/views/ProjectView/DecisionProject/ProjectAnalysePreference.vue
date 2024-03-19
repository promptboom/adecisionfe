<template>
  <v-container>
    <div class="d-flex align-center">
      <span class="mr-4 my-4 text-h6 font-weight-black">PREFERENCE</span>
      <v-divider></v-divider>
    </div>
    <div class="d-flex">
      <v-tabs
        active-class="selected-tab"
        color="#439798"
        slider-size="6"
        v-model="analysePreferenceTabSelect"
        align-with-title
      >
        <v-tabs-slider color="#439798"></v-tabs-slider>

        <v-tab
          v-for="item in analysePreferenceTabItems"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
    </div>
    <v-divider></v-divider>
  </v-container>
</template>
  
<script>
export default {
  name: 'ProjectAnalysePreference',

  components: {
  },

  data() {
    return {
      analysePreferenceTabSelect: null,
      analysePreferenceTabItems: [
        'Values', 'Criteria', 'Levels'
      ],
    }
  },

  created() {
  },

  mounted() {

  },
  
  methods: {
  }
};
</script>

<style scoped>
.selected-tab {
  color: white; 
  background-color: #67c9cb;
}
</style>