
<template>
  <div>
    <vue-custom-scrollbar ref="PageScroll" class="scroll-area" :settings="settings">
      <slot></slot>
    </vue-custom-scrollbar>

  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
  name: 'YA_ScrollComponent',
  components: {
    vueCustomScrollbar,
  },
  props: {
    scrollHeight: Number
  },
  data() {
    return {
      // customMessage: 0,
      settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false
      },
    }
  },
  created() {
    window.addEventListener("resize", this.updatePageHeight);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updatePageHeight);
  },
  mounted() {
    this.$refs.PageScroll.$el.style.height = (window.innerHeight - this.scrollHeight) + 'px';
  },

  methods: {
    updatePageHeight() {
      this.$nextTick(() => {
        const PageScrollCom = this.$refs.PageScroll;
        if (PageScrollCom) {
          PageScrollCom.$el.style.height = (window.innerHeight - this.scrollHeight) + 'px';
        }  
      });
    },
    scrollScreen() {
      this.$nextTick(() => {
        this.$refs.PageScroll.$el.scrollTop = this.$refs.PageScroll.$el.scrollHeight+20;   
      })
    },
    comScrollDown() {
      this.$refs.PageScroll.$el.scrollTop = this.$refs.PageScroll.$el.scrollHeight;
    },
  }

};
</script>

<style scoped>
.scroll-area {
  position: relative;
  margin: auto;
}
</style>