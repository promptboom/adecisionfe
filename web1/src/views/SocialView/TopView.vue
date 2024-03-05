<template>
  <div>
    <v-system-bar height="40" app class="backgroundColor">
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>
  </div>
</template>

<script>

export default {
  name: 'TopView',

  components: {
  },

  data() {
    return {
    }
  },

  methods: {
  }
};
</script>

<style scoped>
.backgroundColor {
  /* background: linear-gradient(to bottom, #296162, #439798); */
  /* background: linear-gradient(to bottom, #439798, #7ac9cb); */
  background-color: #67c9cb;
}
</style>
