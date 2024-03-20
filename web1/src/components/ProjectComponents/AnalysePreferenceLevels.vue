<template>
  <div class="my-8">
    <v-card outlined>
      <span class="text-body-1 float-start mt-n3 ml-2 px-2" style="background-color: white; color: #CC3333;">Preference Values Analysis</span>
      <v-container>
        <p class="text-body-2 mt-2 px-2">Preference values represent the relative importance, or weight, of your criteria and thelevels within each criterion.</p>
      </v-container>

      <v-container>
        <div class="my-8 mx-8" v-for="(item, index) in PreferenceValuesItems" :key="index">
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
                  <span class="text-body-1 font-weight-bold float-left">Bar graph</span>
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
                  <span class="text-body-1 font-weight-bold float-right">{{ levelItem.preferValue.toFixed(1) }} %</span>
                </v-col>
                <v-col cols="6">
                  <v-progress-linear
                    v-model="levelItem.preferValue"
                    background-color="transparent"
                    color="blue lighten-3"
                    height="25"
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card>
  </div>
</template>
  
<script>
export default {
  name: 'AnalysePreferenceLevels',

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
  }
};
</script>

<style scoped>
</style>