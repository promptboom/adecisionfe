<template>
  <div style="width: 100%; height: 100%;" class="d-flex py-3">
    <v-tooltip top v-for="(item, index) in data" :key="index" >
      <template v-slot:activator="{ on, attrs }">
        <v-sheet
          :style="{ width: item.value * 100 + 'px' }"
          :color="item.color"
          v-bind="attrs" v-on="on"
        >
          <v-divider vertical color="white" v-if="item.value > 0"></v-divider>

        </v-sheet>
      </template>
      <span>[{{ item.value * 100 }}%] {{ item.name }} : {{ item.content }}</span>
    </v-tooltip>
  </div>
</template>
  
<script>

export default {
  name: 'YA_AlternativesProgress',

  props: {
    data: Array,
  },

  components: {
    
  },

  data() {
    return {
    }
  },

  created() {
  },

  mounted() {
  },
  
  methods: {
  }
};
</script>

<style scoped>
</style>