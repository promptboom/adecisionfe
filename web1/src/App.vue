<template>
  <v-app>
    <YA_Snackbar ref="YA_SnackbarRef" />
    
    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
import YA_Snackbar from '@/components/SocialComponents/YA_Snackbar.vue';

export default {
  name: 'App',

  components: {
    YA_Snackbar,
  },

  data() {
    return {
    }
  },

  methods: {
    handleAppSnackbar() {
      this.$refs.YA_SnackbarRef.handleSnackbar('Failed to retrieve user information:');
    }
  }
};
</script>
