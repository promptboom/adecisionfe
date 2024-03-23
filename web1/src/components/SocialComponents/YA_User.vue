
<template>
  <div>
    <v-menu 
      offset-y 
      no-border
      rounded
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar v-on="on" v-bind="attrs" class="mr-2 ml-2" size="30" color="indigo">
          <!-- <v-img alt="avatar" contain :src="photoUrl" /> -->
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </template>
      <v-card>
        <v-list color="transparent">
          <v-list-item>
            <v-list-item-avatar color="indigo">
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="grey--text text--darken-4">{{ userName }}</v-list-item-title>
              <v-list-item-subtitle class="grey--text text--darken-2">{{ userID }}</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <div>
          <div class="d-flex ma-4 align-center justify-center" v-if="isProUser">
            <v-icon color="amber accent-4">mdi-crown</v-icon>
            <h5 class="text-center">Your current plan:Pro Plan</h5>
          </div>
          <div class="d-flex ma-4 align-center justify-center" v-else>
            <v-btn small color="blue" rounded @click='handlePricing'>
              <span class="ma-2 text-capitalize white--text">Upgrade plan</span>
            </v-btn>
          </div>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="error"
            text
            @click="handleLogout"
            class="text-capitalize"
          >
            Sign out
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/SystemUtils/localStorage.js'

export default {
  name: 'YA_Logo',
  data() {
    return {
      userID: '',
      isProUser: false,
      userName: '',
    }
  },

  created() {
    this.$store.watch(
      (state) => state.userMsg.userID, () => {
        this.userID = this.$store.getters.getuserID;
      }, {
        deep: true
      }
    );
    this.userID = this.$store.getters.getuserID;

    this.$store.watch(
      (state) => state.userMsg.userName, () => {
        this.userName = this.$store.getters.getuserName;
      }, {
        deep: true
      }
    );
    this.userName = this.$store.getters.getuserName;

    this.$store.watch(
      (state) => state.userMsg.isProUser, () => {
        this.isProUser = this.$store.getters.getisProUser;
      }, {
        deep: true
      }
    );
    this.isProUser = this.$store.getters.getisProUser;
  },

  mounted() {

  },

  methods: {
    handleLogout() {
      removeLocalStorage('ADecisionUser');
      removeLocalStorage('ADecisionToken');

      this.$store.commit('HandleisLogin', false);
      this.$store.commit('HandleuserID', '');
      this.$store.commit('Handletoken', '');
      this.$store.commit('HandleuserName', '');
      this.$store.commit('HandleisProUser', false);

      if (this.$router.currentRoute.path !== '/Login') {
        this.$router.push('/Login');
      }
    },
    handlePricing() {
      if (this.$router.currentRoute.path !== '/Pricing') {
        this.$router.push('/Pricing');
      }
    }
  }

};
</script>

<style scoped>

</style>