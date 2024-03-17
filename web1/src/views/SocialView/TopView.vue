<template>
  <div>
    <v-system-bar height="40" app class="backgroundColor">
      <div class="ml-n2 d-flex align-center justify-space-between" style="width: 240px;"> 
        <span class="ml-2 white--text text--darken-4 text-h6 font-weight-black">ADecision</span>

        <YA_barTag class="mx-2" />
      </div>
      <v-divider vertical></v-divider>
      <div class="d-flex align-center justify-space-between">
        <span class="ml-3 white--text text-body-2 font-weight-black">{{ routerPath }}</span>
      </div>
    </v-system-bar>
  </div>
</template>

<script>
import YA_barTag from '@/components/SocialComponents/YA_barTag.vue';

export default {
  name: 'TopView',

  components: {
    YA_barTag,
  },

  data() {
    return {
      routerPath: "",
    }
  },

  created() {
    this.$store.watch(
      (state) => state.systemMsg.routerPath, () => {
        this.routerPath = this.$store.getters.getrouterPath;
      }, {
        deep: true
      }
    );
    this.routerPath = this.$store.getters.getrouterPath;
  },

  methods: {
  }
};
</script>

<style scoped>
.backgroundColor {
  /* background: linear-gradient(to bottom, #296162, #439798); */
  /* background: linear-gradient(to bottom, #439798, #7ac9cb); */
  background-color: #439798;
}
</style>
