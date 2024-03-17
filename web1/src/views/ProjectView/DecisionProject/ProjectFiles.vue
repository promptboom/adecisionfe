<template>
  <v-container>
    <div>
      <div class="d-flex align-center">
        <span class="mr-4 my-4 text-h6 font-weight-black">PROJECT FILES</span>
        <v-divider></v-divider>
      </div>
      <div class="ml-4 mb-4 d-flex">
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text" small>
          upload
          <v-icon size="20" class="ml-1" color="white">mdi-file-upload-outline</v-icon>
        </v-btn>
      </div>
      <v-divider></v-divider>
    </div>
    <div class="ml-4 mt-4 d-flex flex-wrap">
      <v-card
        v-for="(item, index) in ProjectFileItemsCom" 
        :key="index"
        class="d-flex flex-wrap mr-10 mb-12"
        flat
        max-width="140"
        max-height="240"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="d-flex justify-center align-center mr-4"
            min-width="140"
            min-height="160"
            outlined
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-container class="d-flex justify-center flex-wrap align-center">
              <v-icon
                :color="item.color"
                size="66"
              >
                {{ item.icon }}
              </v-icon>
              <div class="align-self-center" v-if="!item.isUploading">
                <v-btn :class="{ 'show-btns': !hover }" icon>
                  <v-icon :class="{ 'show-btns': !hover }">
                    mdi-eye
                  </v-icon>
                </v-btn>
                <v-btn :class="{ 'show-btns': !hover }" icon>
                  <v-icon :class="{ 'show-btns': !hover }">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </div>
            </v-container>
          </v-card>
        </v-hover>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span class="mt-1 text-body-1" v-on="on">
              <v-progress-circular
                :size="20"
                :color="item.color"
                indeterminate
                v-if="item.isUploading"
              ></v-progress-circular>
              {{ item.newName }}
            </span>
          </template>
          <span>{{ item.name }}</span>
        </v-tooltip>
        <span class="text-body-2 grey--text">{{ item.time }}</span>

      </v-card>

    </div>
  </v-container>
</template>
  
<script>
export default {
  name: 'ProjectFile',

  components: {
  },

  data() {
    return {
      ProjectFileItems: [
        {
          name: 'project file asad fasd fasdfsadf sdfasdfasfasdf',
          icon: 'mdi-file-document-outline',
          color: 'red',
          time: '2023-12-31 14:00:00',
          isUploading: true,
        },
        {
          name: 'project file asad fasd fasdfsadf sdfasdfasfasdf',
          icon: 'mdi-file-table',
          color: 'green',
          time: '2023-12-31 14:00:00',
          isUploading: true,
        },
        {
          name: 'project file asad fasd fasdfsadf sdfasdfasfasdf',
          icon: 'mdi-file-table',
          color: 'green',
          time: '2023-12-31 14:00:00',
          isUploading: false,
        },
        {
          name: 'project file asad fasd fasdfsadf sdfasdfasfasdf',
          icon: 'mdi-file-table',
          color: 'green',
          time: '2023-12-31 14:00:00',
          isUploading: true,
        },
        {
          name: 'project file asad fasd fasdfsadf sdfasdfasfasdf',
          icon: 'mdi-file-table',
          color: 'green',
          time: '2023-12-31 14:00:00',
          isUploading: true,
        },
        {
          name: 'project file asad fasd fasdfsadf sdfasdfasfasdf',
          icon: 'mdi-file-table',
          color: 'green',
          time: '2023-12-31 14:00:00',
          isUploading: false,
        },
        {
          name: 'project file asad fasd fasdfsadf sdfasdfasfasdf',
          icon: 'mdi-file-table',
          color: 'green',
          time: '2023-12-31 14:00:00',
          isUploading: true,
        },
        {
          name: 'project file asad fasd fasdfsadf sdfasdfasfasdf',
          icon: 'mdi-file-table',
          color: 'green',
          time: '2023-12-31 14:00:00',
          isUploading: true,
        },
        {
          name: 'project file asad fasd fasdfsadf sdfasdfasfasdf',
          icon: 'mdi-file-table',
          color: 'green',
          time: '2023-12-31 14:00:00',
          isUploading: true,
        },
      ]
    }
  },

  computed: {
    ProjectFileItemsCom() {
      return this.ProjectFileItems.map(target => {
        if (target.name.length > 30) {
          return {
            ...target,
            newName: target.name.slice(0, 30) + '...'
          };
        } else {
          return target;
        }
      });
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
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:is(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>