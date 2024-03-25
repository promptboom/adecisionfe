<template>
  <v-container>
    <div>
      <div class="d-flex align-center">
        <span class="mr-4 my-4 text-h6 font-weight-black">PROJECT MESSAGE</span>
        <v-divider></v-divider>
      </div>
      <div class="ml-4 mb-4 d-flex">
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text" small>
          Load File
          <v-icon size="20" class="ml-1" color="white">mdi-file-upload-outline</v-icon>
        </v-btn>
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text ml-4" small>
          modify
          <v-icon size="20" class="ml-1" color="white">mdi-rename-outline</v-icon>
        </v-btn>
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text ml-4" small>
          save
          <v-icon size="20" class="ml-1" color="white">mdi-content-save-edit-outline</v-icon>
        </v-btn>
      </div>
      <v-divider></v-divider>
    </div>

    <div class="mt-8">
      <span class="text-body-2 ml-4">Project Name</span>
      <span class="text-body-2 red--text mx-2">*</span>
      <v-textarea
        v-model="projectName"
        class="mx-2 mt-2"
        rows="1"
        dense
        solo
        label="Project Name"
      ></v-textarea>
    </div>
    
    <div class="mt-2">
      <span class="text-body-2 ml-4">Project Decision Purpose</span>
      <span class="text-body-2 red--text mx-2">*</span>
      <v-textarea
        v-model="projectDO"
        class="mx-2 mt-2"
        counter
        rows="3"
        solo
        label="Project Decision Purpose"
      ></v-textarea>
    </div>

    <div class="mt-2">
      <span class="text-body-2 ml-4">Project Description</span>
      <span class="text-body-2 red--text mx-2">*</span>
      <v-textarea
        v-model="projectDescription"
        class="mx-2 mt-2"
        counter
        rows="5"
        solo
        label="Project Description"
      ></v-textarea>
    </div>
  </v-container>
</template>
  
<script>
export default {
  name: 'ProjectMsg',

  components: {
  },

  data() {
    return {
      projectName: '',
      projectDO: '',
      projectDescription: '',
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