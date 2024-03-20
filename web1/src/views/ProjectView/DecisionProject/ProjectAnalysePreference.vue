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
        slider-size="4"
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

    <div v-if="analysePreferenceTabSelect == 0">
      <AnalysePreferenceValues />
    </div>
    <div v-else-if="analysePreferenceTabSelect == 1">
      <AnalysePreferenceCriteria />
    </div>
    <div v-else-if="analysePreferenceTabSelect == 2">
      <AnalysePreferenceLevels />
    </div>
  </v-container>
</template>
  
<script>
import AnalysePreferenceValues from '@/components/ProjectComponents/AnalysePreferenceValues.vue'
import AnalysePreferenceCriteria from '@/components/ProjectComponents/AnalysePreferenceCriteria.vue'
import AnalysePreferenceLevels from '@/components/ProjectComponents/AnalysePreferenceLevels.vue'

export default {
  name: 'ProjectAnalysePreference',

  components: {
    AnalysePreferenceValues,
    AnalysePreferenceCriteria,
    AnalysePreferenceLevels,
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