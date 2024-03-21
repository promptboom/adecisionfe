<template>
  <div>
    <v-row class="justify-center pt-16">
      <v-col  cols="10" sm="10" md="4" lg="4" xl="4" class="d-flex justify-center flex-wrap">
        <v-avatar size="84">
          <!-- <v-img alt="avatar" contain src="@/assets/P.png" /> -->
          <span class="text--darken-4 text-h6 font-weight-black" style="color: #439798;">ADecision</span>

        </v-avatar>
        <v-container>
          <v-text-field
            label="Email Address"
            :rules="emailRules"
            hide-details="auto"
            v-model="emailAddress"
          ></v-text-field>
          <v-text-field label="Email verification code" v-model="InputCode">
            <v-btn color="black" slot="append" class='text-capitalize white--text mx-auto text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h6' :disabled="isFetching" @click='sendVerificationCode'>
              {{ isFetching ? `${ countDown }s ` : "Request code" }}
            </v-btn>
          </v-text-field>
          <v-row class="justify-center" v-if="refresh">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" class="d-flex justify-center">
              <Turnstile :sitekey="sitekey" @verify="verify"/>
            </v-col>
          </v-row>
          <v-btn color="black" width="100%" class='mt-6 text-capitalize mx-auto white--text text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h6 font-weight-black' @click='handleEmailLogin' :loading="LoginLoading" :disabled="cfShow">
            Continue with Email
          </v-btn>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/SystemUtils/localStorage.js'
import { requestPost } from '@/utils/SystemUtils/request.js';
import Turnstile from 'cfturnstile-vue2'


export default {

  name: 'YA_Login',
  data() {
    return {
      isFetching: false, 
      countDown: 0, 
      emailRules: [
        value => !!value || 'Required.',
        value => this.isValidEmail(value) || 'Enter the correct email address',
      ],
      emailAddress: '',
      InputCode: '',
      LoginLoading: false,
      isLogin: false,
      sitekey:'0x4AAAAAAAH2HJrsepI-gSh8',
      cfShow: true,
      cftoken: '',
      refresh: true,
    }
  },
  components: {
    Turnstile,
  },
  created() {
    this.$store.watch(
      (state) => state.userMsg.isLogin, () => {
        this.isLogin = this.$store.getters.getisLogin;
      }, {
        deep: true
      }
    );
    this.isLogin = this.$store.getters.getisLogin;
  },
  mounted() {

  },
  activated() {
    this.cfShow = true;
    this.refresh = false;
    this.$nextTick(() => {
      this.refresh = true;
    });
  },
  methods: {
    verify(token) {
      this.cftoken=token
      this.cfShow=false
    },
    async sendVerificationCode() {
      if (!this.isValidEmail(this.emailAddress)) {
        this.$refs.YA_SnackbarRef.handleSnackbar('Invalid Email Address');
        return;
      }
      this.isFetching = true;
      this.countDown = 60;

      let request_header = {};
      let request_json = {
        'email': this.emailAddress,
      };
      let request_url = '/requestSendVerifyEmail';
      const res = await requestPost(request_header, request_json, request_url);

      if (res.statusCode == 1) {
        this.startCountDown();
        this.$refs.YA_SnackbarRef.handleSnackbar('Success');
      } else {
        this.$refs.YA_SnackbarRef.handleSnackbar('Failed : ' + res.statusInfo);
        this.isFetching = false;
      }
    },
    async handleEmailLogin() {
      if (this.isLogin) {
        this.$refs.YA_SnackbarRef.handleSnackbar('You are already login !');
      } else {
        if (this.InputCode) {
          this.LoginLoading = true;

          let request_header = {
            cftoken: this.cftoken
          };
          let request_json = {
            'email': this.emailAddress,
            'type': 'email',
            'code': this.InputCode,
          };
          let request_url = '/requestLogin';
          const res = await requestPost(request_header, request_json, request_url);

          if (res.statusCode == 1) {
            this.$refs.YA_SnackbarRef.handleSnackbar('Login success');

            setLocalStorage('PromptBoomUser', this.emailAddress);
            setLocalStorage('PromptBoomToken', res.data.token);

            this.$store.commit('HandleuserID', this.emailAddress);
            this.$store.commit('Handletoken', res.data.token);
            this.$store.commit('HandleisLogin', true);

            this.emailAddress = '';
            this.InputCode = '';

            this.LoginLoading = false;

            if (this.$router.currentRoute.path !== '/') {
              this.$router.push('/');
            }
          } else {
            this.$refs.YA_SnackbarRef.handleSnackbar('Login failed : ' + res.statusInfo);
            this.LoginLoading = false;
            this.cfShow = true;
            this.refresh = false;
            this.$nextTick(() => {
              this.refresh = true;
            });
          }
        } else {
          this.$refs.YA_SnackbarRef.handleSnackbar('Please enter the code');
        }
      }
    },
    isValidEmail(email) {
      const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    },
    startCountDown() {
      const intervalId = setInterval(() => {
        this.countDown--;
        if (this.countDown === 0) {
          this.isFetching = false;
          clearInterval(intervalId);
        }
      }, 1000);
    },
  }

};
</script>

<style scoped>
</style>