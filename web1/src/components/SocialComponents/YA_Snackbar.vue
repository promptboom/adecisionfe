
<template>
  <v-snackbar timeout='2000' v-model='snackbarShow' top>{{ snackbarMsg }}</v-snackbar>
</template>

<script>
export default {
  name: 'YA_Snackbar',
  data() {
    return {
      snackbarShow: false,
      snackbarMsg: '',
    }
  },

  props: {

  },

  mounted() {

  },

  methods: {
    handleSnackbar( Msg ) {
      this.snackbarShow= false
      this.snackbarShow= true
      this.snackbarMsg= Msg;
    },
  }

};
</script>

<style scoped>

</style>