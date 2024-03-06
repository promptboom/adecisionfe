
<template>
  <div class="d-flex align-center">
    <v-btn
      color="#296162"
      @mouseover="setHover" 
      @mouseleave="leaveHover"
      @click="handleBarTag"
      fab
      icon
      x-small
    >
      <v-icon size="25">
        {{ iconName }}
      </v-icon>
    </v-btn>
  </div>

</template>

<script>
export default {
  name: 'YA_barTag',
  data() {
    return {
      iconName: 'mdi-menu',
      leftBarTag: false,
    }
  },

  created() {
    this.$store.watch(
      (state) => state.systemMsg.leftBarTag, () => {
        this.leftBarTag = this.$store.getters.getleftBarTag;
      }, {
        deep: true
      }
    );
    this.leftBarTag = this.$store.getters.getleftBarTag;
  },

  mounted() {

  },
  computed: {
    leftBarIconName() {
      if (this.leftBarTag) {
        return 'mdi-chevron-double-left'
      } else {
        return 'mdi-chevron-double-right'
      }
    },
  },

  methods: {
    setHover() {
      this.iconName = this.leftBarIconName;
    },
    leaveHover() {
      this.iconName = 'mdi-menu';
    },
    handleBarTag(event) {
      this.$store.commit('HandleleftBarTag', !this.leftBarTag);
      this.leftBarTag = !this.leftBarTag
      this.iconName = this.leftBarIconName;
      event.currentTarget.blur();
    },
  }

};
</script>

<style scoped>
</style>