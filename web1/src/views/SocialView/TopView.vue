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
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/SystemUtils/localStorage.js'
import { requestPost } from '@/utils/SystemUtils/request.js';

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

    this.$store.watch(
      (state) => state.userMsg.isLogin, () => {
        this.isLogin = this.$store.getters.getisLogin;
        if (this.isLogin) {
          this.handleGetUserMsg();
        }
      }, {
        deep: true
      }
    );
    this.isLogin = this.$store.getters.getisLogin;

    this.$store.watch(
      (state) => state.userMsg.isProUser, () => {
        this.isProUser = this.$store.getters.getisProUser;
      }, {
        deep: true
      }
    );
    this.isProUser = this.$store.getters.getisProUser;

    if (getLocalStorage('ADecisionUser') && getLocalStorage('ADecisionToken')) {
      this.$store.commit('HandleuserID', getLocalStorage('ADecisionUser'));
      this.$store.commit('Handletoken', getLocalStorage('ADecisionToken'));
      this.$store.commit('HandleisLogin', true);
    }
  },

  methods: {
    handleLogin() {
      let url='';
      if (!this.isLogin) {
        url = '/Login'
      } else {
        url = '/Home'
      }
      if (this.$route.path !== url) {
        this.$router.push({ path: url});
      }
      
    },

    async handleGetUserMsg() {
      let request_header = {
        email: getLocalStorage('ADecisionUser'),
        token: getLocalStorage('ADecisionToken')
      };
      let request_json = {};

      let request_url = '/requestGetUserMsg';
      const res = await requestPost(request_header, request_json, request_url);

      if (res.statusCode == 1) {
        this.$store.commit('HandleuserName', res.data[0].userName);
        let isProUser=false
        const subscribeTime=new Date(res.data[0].subscribeTime*1000)

        const now=new Date()
        const oneMonthAgo=new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        if (subscribeTime >= oneMonthAgo) {
          isProUser=true
        } else {
          isProUser=false
        }

        this.$store.commit('HandleisProUser', isProUser);

      } else {
        this.$store.commit('HandleADecisionSnackbar', 'Failed to retrieve user information:' + res.statusInfo);
      }
    },
  }
};
</script>

<style scoped>
</style>
