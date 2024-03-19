<template>
  <div class="d-flex flex-column">
    <YA_ScrollComponent ref="ScrollComRef" :scrollHeight="130" v-scroll.self="onScroll">
      <div class="mb-4">
        <v-container>
          <p class="blue-grey--text text--darken-4 text-center text-h5 text-sm-h4 text-md-h3 text-lg-h3 text-xl-h3 font-weight-black my-4">ADecision</p>
          <p class="blue-grey--text text-center mb-8">This is a part of AI Decision Talking</p>

          <div>
            <v-row class="" v-for="(item, index) in chatContent" :key="index" :ref="'row' + index">
              <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <v-card elevation="2">
                  <div class="grey lighten-4">
                    <v-row no-gutters>
                      <v-col cols="1" class="">
                        <p class="mx-4 mt-4"><v-icon color='teal darken-3'>mdi-account</v-icon></p>
                      </v-col>
                      <v-col cols="11" class="">
                        <p class="mx-4 mt-4">{{ item.question }}</p>
                      </v-col>
                    </v-row>
                  </div>
                  <v-divider></v-divider>
                  <v-progress-linear color="teal accent-4" indeterminate rounded height="6" :active="!item.isDone"></v-progress-linear>

                  <div>
                    <v-row no-gutters>
                      <v-col cols="1" class="">
                        <p class="mx-4 mt-4"><v-icon color='teal darken-3'>mdi-robot</v-icon></p>
                      </v-col>
                      
                      <v-col cols="11" class="">
                        <div v-html="htmlfy(item.answer)" class="mx-4 mt-4" style="white-space: pre-line;"></div>
                      </v-col>

                    </v-row>
                    <!-- <v-divider></v-divider>
                    <div v-html="item.note" class="px-5 py-5 text-center" style="white-space: pre-line;"></div> -->
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </YA_ScrollComponent>

    <v-footer height="90" width="100%" color="transparent">

    </v-footer>
    <div class="mx-2" style="position: relative;">
      <v-textarea 
        style="position: absolute; bottom: 0; left: 0; right: 0; background-color: white;"
        ref='textareaQuestion'
        @keypress.enter.exact="handleAIAnalyse"
        label="Talk to ADecision..."
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
    </div>
  </div>
</template>
  
<script>
import YA_ScrollComponent from '@/components/SocialComponents/YA_ScrollComponent.vue';
import DOMPurify from 'dompurify';
import {marked} from 'marked';


export default {
  name: 'AnalyseChat',

  components: {
    YA_ScrollComponent,
  },

  data() {
    return {
      AIAnalyseQuestion: '',
      AIAnalyseLoading: false,
      AIAnalyseIsRunning: false,
      enableScroll:true,

      chatContent: [
        {
          question: 'asdfasdfsadfasdfasdfdsadfasdavnalvkrmopewkjmlksanvladfasdavnalvkrmopewkjmlksanvladfasdavnalvkrmopewkjmlksanvlkmwaelmefldmdsa.cmz,asdfkasjdklnbgoksdj',
          answer: 'fasdfasdf',
          isDone: true,
          note: 'lalalla',
        },
        {
          question: '好好吃饭',
          answer: 'fasdfasdf',
          isDone: true,
          note: 'lalalla',
        },
        {
          question: 'sljdfaif',
          answer: 'fasdfasdf',
          isDone: false,
          note: 'lalalla',
        },
        {
          question: 'sljdfaif',
          answer: 'fasdfasdf',
          isDone: true,
          note: 'lalalla',
        },
        {
          question: 'sljdfaif',
          answer: 'fasdfasdf',
          isDone: true,
          note: 'lalalla',
        },
      ],

    }
  },

  computed: {
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
    onScroll (e) {
      // this.pageSetNum = e.target.scrollTop / this.pageHeight;

      // console.log(e.target.scrollTop)
      // console.log(this.pageHeight)
      // console.log(this.pageSetNum)

      // this.offsetTop = e.target.scrollTop
      this.disableScroll();
    },
    disableScroll() {
      this.enableScroll = false;
    },
    htmlfy(answer) {
      // console.log(DOMPurify.sanitize(marked.parse(answer)))
      return DOMPurify.sanitize(marked.parse(answer));      
    },
  }
};
</script>

<style scoped>

</style>

