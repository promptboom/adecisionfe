<template>
  <div>
    <v-card outlined elevation="2" height="600" class="d-flex flex-column">
      <div>
        <span class="text-body-1 float-start mt-n3 ml-2 px-2" style="background-color: white; color: #CC3333;">AI Analysis</span>
      </div>
      <v-container class="mt-auto mb-n6">
        <v-row class="justify-center">
          <v-col cols="12" sm="12" md="10" lg="10" xl="10">
            <v-textarea 
              ref='textareaQuestion' 
              @keypress.enter.exact="handleAIAnalyse"
              label="Talk to ADecision..."
              dense
              auto-grow
              color="#439798"
              rows="1"
              v-model='AIAnalyseQuestion'
              :loading='AIAnalyseLoading'
              outlined
              :disabled="AIAnalyseIsRunning"
              prepend-inner-icon='mdi-magnify'
            >
              <template v-slot:prepend>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mt-n1" color="secondary" fab x-small v-bind="attrs" v-on="on" @click="handleAIAnalyseClear">
                      <v-icon>mdi-brush-variant</v-icon>
                    </v-btn>
                  </template>
                  <span>Clear</span>
                </v-tooltip>
              </template>

              <template v-slot:append>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-show='!AIAnalyseIsRunning' class="mt-n1" color="#439798" fab x-small v-bind="attrs" v-on="on" @click="handleAIAnalyse">
                      <v-icon color="white">mdi-send</v-icon>
                    </v-btn>
                  </template>
                  <span>Send</span>
                </v-tooltip>

                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-show='AIAnalyseIsRunning' class="error mt-n1" fab x-small v-bind="attrs" v-on="on" @click="handleAIAnalyseStop">
                      <v-icon>mdi-stop</v-icon>
                    </v-btn>
                  </template>
                  <span>Stop</span>
                </v-tooltip>
              </template>
            </v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
  
<script>

export default {
  name: 'AnalyseChat',

  components: {
  },

  data() {
    return {
      AIAnalyseQuestion: '',
      AIAnalyseLoading: false,
      AIAnalyseIsRunning: false,
    }
  },

  created() {

  },

  mounted() {

  },
  
  methods: {
    handleAIAnalyse() {

    },

    handleAIAnalyseClear() {

    },

    handleAIAnalyseStop() {

    },
  }
};
</script>

<style scoped>

</style>

