<template>
  <div>
    <v-system-bar height="40" app style="background-color: #439798;" class="d-flex justify-space-between">
      <div class="d-flex">
        <div class="ml-n2 d-flex align-center justify-space-between" style="width: 240px;"> 
          <span class="ml-2 white--text text--darken-4 text-h6 font-weight-black">ADecision</span>

          <YA_barTag class="mx-2" />
        </div>
        <v-divider vertical></v-divider>

        <div class="d-flex align-center">
          <span class="ml-3 white--text text-body-2 font-weight-black">{{ routerPath }}</span>
        </div>
      </div>
      
      <div class="d-flex align-center mx-2">
        <YA_User v-if="isLogin" />
        <v-tooltip bottom v-else>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey-darken" v-bind="attrs" v-on="on" small class="mx-3" icon @click="handleLogin">
              <v-icon size="30" color="grey lighten-3">mdi-account-circle-outline</v-icon>
            </v-btn>
          </template>
          <span>Login</span>
        </v-tooltip>
      </div>
    </v-system-bar>
  </div>
</template>

<script>
import YA_barTag from '@/components/SocialComponents/YA_barTag.vue';
import YA_User from '@/components/SocialComponents/YA_User.vue';

export default {
  name: 'TopView',

  components: {
    YA_barTag,
  },

  data() {
    return {
      routerPath: "",

      isLogin: false,
      isProUser: false,
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
    handleLogin() {
      let url='';
      if (!this.isLogin) {
        url = '/Login'
      } else {
        url = '/chat'
      }
      if (this.$route.path !== url) {
        this.$router.push({ path: url});
      }
    },
  }
};
</script>

<style scoped>
</style>
