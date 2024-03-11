<template>
  <v-app>
    <YA_Snackbar ref="YA_SnackbarRef" />
    <TopView />
    <LeftView />


    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
import YA_Snackbar from '@/components/SocialComponents/YA_Snackbar.vue';
import TopView from '@/views/SocialView/TopView.vue';
import LeftView from '@/views/SocialView/LeftView.vue';
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/SystemUtils/localStorage.js'

export default {
  name: 'App',

  components: {
    YA_Snackbar,
    TopView,
    LeftView,
  },

  data() {
    return {
    }
  },

  mounted() {
    if (getLocalStorage('ADecisionProject')) {
      this.$store.commit('HandleprojectName', getLocalStorage('ADecisionProject'));
    }
  },

  methods: {
    handleAppSnackbar() {
      this.$refs.YA_SnackbarRef.handleSnackbar('Failed to retrieve user information:');
    }
  }
};
</script>
