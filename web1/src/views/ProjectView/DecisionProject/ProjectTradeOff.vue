<template>
  <v-container>
    <div>
      <div class="d-flex align-center">
        <span class="ma-4">CRITERIA</span>
        <v-divider></v-divider>
      </div>
      <div class="ml-4 mb-4 d-flex">
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text ml-4" small @click="tradeOffFuncExchange = false">
          review & undo
          <v-icon size="20" class="ml-1" color="white">mdi-content-save-edit-outline</v-icon>
        </v-btn>
        
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text ml-4" small @click="tradeOffFuncExchange = true">
          <div class="mx-4 d-flex align-center">
            <span>begin</span>
            <v-icon size="20" class="ml-1" color="white">mdi-arrow-right-bold-box-outline</v-icon>
            <v-progress-circular
              class="ml-2"
              :rotate="-90"
              size="20"
              :value="tradeOffQuestionProgress"
              color="#296162"
            ></v-progress-circular>
          </div>
        </v-btn>
      </div>
      <v-divider></v-divider>
    </div>

    <div v-if="tradeOffFuncExchange">
      <div class="d-flex align-center" style="height: 40px;">
        <span class="ml-2 text-body-1 grey--text text--darken-2 font-weight-bold">Question</span>
        <span class="mx-1 text-body-1 grey--text text--darken-2 font-weight-bold">{{ tradeOffQuestionAccount }}</span>
        <v-progress-linear
          class="mx-3"
          :value="tradeOffQuestionProgress"
          color="#296162"
          height="7"
          rounded
        ></v-progress-linear>
        <span class="ml-2 text-body-1 grey--text text--darken-2 font-weight-bold">Progress</span>
        <span class="ml-1 text-body-1 grey--text text--darken-2 font-weight-bold">{{ tradeOffQuestionProgress }}</span>
        <span class="text-body-1 grey--text text--darken-2 font-weight-bold">%</span>
      </div>
      <v-divider></v-divider>

      <div class="py-14" style="background-color: #f1f2f4;">
        <div class="d-flex justify-center mb-8">
          <span class="text-center text-h6 grey--text text--darken-2">Which of these two alternatives do you prefer?</span>
        </div>
        <v-row justify="center">
          <v-col cols="5" v-for="(tradeOffTag, index) in tradeOffTags" :key="index">
            <v-card class="pt-4">
              <div v-for="(value, key, index) in tradeOffTag" :key="key" class="my-4 px-6">
                <v-divider v-if="index !== 0"></v-divider>
                <div class="mt-4">
                  <span class="text-body-1 grey--text text--darken-2 font-weight-bold">{{ key }}</span>
                </div>
                <div class="mt-3 ml-6">
                  <span class="text-body-1 font-weight-bold">{{ value }}</span>
                </div>
              </div>
              <v-btn color="#439798" class="text-capitalize text-h6 white--text mt-10" block @click="handleQuitProject">
                <v-icon size="25" class="mr-1" color="white">mdi-gesture-tap</v-icon>
                This One
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <div class="d-flex justify-center">
          <v-btn color="#439798" class="text-capitalize text-h6 white--text mt-8 px-16" @click="handleQuitProject">
            <v-icon size="25" class="mr-1" color="white">mdi-gesture-tap</v-icon>
            They Are Equal
          </v-btn>
        </div>
      </div>

      <v-footer app inset color="#ffffff">
        <v-bottom-navigation
          :value="value"
          color="#439798"
        >
          <v-btn>
            <span>Undo</span>
            <v-icon>mdi-arrow-left-top-bold</v-icon>
          </v-btn>
          <v-btn>
            <span>Restart</span>
            <v-icon>mdi-restart</v-icon>
          </v-btn>

          <v-btn>
            <span>Skip</span>
            <v-icon>mdi-arrow-right-top-bold</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-footer>
    </div>

    <div v-else class="mt-4">
      <v-card elevation="3">
        <v-card-title>
          Review List
        </v-card-title>
        <v-data-table
          hide-default-header
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        >
          <template v-slot:[`item.Tag1`]="{ item }">
            <v-card class="my-1 py-1" flat :color="item.choice[0] ? 'light-green' : 'transparent'">
              <v-row v-for="(value, key) in item.Tag1" :key="key" no-gutters class="my-1">
                <v-col cols="6" class="d-flex justify-end">
                  <span class="mx-2 text-body-1 grey--text text--darken-2 font-weight-bold">{{ key }}</span>
                </v-col>
                <v-col cols="6" class="d-flex justify-start">
                  <span class="mx-2 text-body-1 font-weight-bold">{{ value }}</span>
                </v-col>
              </v-row>
            </v-card>
          </template>

          <template v-slot:[`item.Tag2`]="{ item }">
            <v-card class="my-1 py-1" flat :color="item.choice[1] ? 'light-green' : 'transparent'">
              <v-row v-for="(value, key) in item.Tag2" :key="key" no-gutters class="my-1">
                <v-col cols="6" class="d-flex justify-end">
                  <span class="mx-2 text-body-1 grey--text text--darken-2 font-weight-bold">{{ key }}</span>
                </v-col>
                <v-col cols="6" class="d-flex justify-start">
                  <span class="mx-2 text-body-1 font-weight-bold">{{ value }}</span>
                </v-col>
              </v-row>
            </v-card>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
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
export default {
  name: 'ProjectTradeOff',

  components: {
  },

  data() {
    return {
      tradeOffFuncExchange: true,

      headers: [
        {
          align: 'center',
          sortable: false,
          value: 'Tag1',
          divider: true
        },
        {
          align: 'center',
          sortable: false,
          value: 'Tag2',
          divider: true
        },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
      ],
      desserts: [
        {
          Tag1: { NightLife: "OK", Beach: "Yes" },
          Tag2: { NightLife: "Excellent", Beach: "No" },
          choice: [true, false],
        },
        {
          Tag1: { NightLife: "OK", Beach: "Yes" },
          Tag2: { NightLife: "Excellent", Beach: "No" },
          choice: [false, true]
        },
        {
          Tag1: { NightLife: "OK", Beach: "Yes" },
          Tag2: { NightLife: "Excellent", Beach: "No" },
          choice: [true, true]
        },
      ],

      tradeOffQuestionProgress: 20,
      tradeOffQuestionAccount: 2,
      tradeOffTags: [
        { NightLife: "OK", Beach: "Yes" },
        { NightLife: "Excellent", Beach: "No" },
      ]
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