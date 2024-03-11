<template>
  <div>
    <v-navigation-drawer 
      width="240"
      app
      clipped 
      color="#fbfbfb"
      fixed
      v-model="leftBarTag"
      disable-resize-watcher
    >
      <LeftBarHome v-if="projectName == ''" />
      <LeftBarProject v-else />
    </v-navigation-drawer>
  </div>
</template>

<script>
import LeftBarHome from '@/components/LeftBarComponents/LeftBarHome.vue';
import LeftBarProject from '@/components/LeftBarComponents/LeftBarProject.vue';


export default {
  name: 'LeftView',

  components: {
    LeftBarHome,
    LeftBarProject,
  },

  watch: {
    leftBarTag(newValue, oldValue) {
      if (!newValue) {
          this.$store.commit('HandleleftBarTag', false);
      }
    }
  },
  
  data() {
    return {
      leftBarTag: true,

      projectName: "",
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

    this.$store.watch(
      (state) => state.systemMsg.projectName, () => {
        this.projectName = this.$store.getters.getprojectName;
      }, {
        deep: true
      }
    );
    this.projectName = this.$store.getters.getprojectName;
  },

  methods: {
    
  }
};
</script>
