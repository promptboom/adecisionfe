<template>
  <div style="height: 100%;" class="d-flex flex-column">
    <div class="mx-3 pt-6">
      <div class="d-flex align-center">
        <v-icon color="blue">mdi-folder</v-icon>
        <span class="ml-2 text-body-1 font-weight-bold">{{ projectName }}</span>
      </div>
      <div class="d-flex align-center mt-2 ml-4">
        <v-icon color="orange">mdi-redo</v-icon>
        <span class="ml-4 text-body-2">{{ projectName + " Decision" }}</span>
      </div>
    </div>

    <v-container>
      <v-divider></v-divider>
    </v-container>

    <div>
      <v-timeline
        align-top
        dense
        class="ml-n6"
      >
        <template v-for="(ItemTag, index) in ItemTags">
          <v-timeline-item fill-dot small :color="TimeItemColor[index] == 1 ? 'green' : 'red'" :key="index">
            <v-list dense nav class="ml-n8 mt-n3">
              <v-list-item-group
                v-model="ColectItem[index]"
              >
                <v-list-group
                  color="#439798"
                  v-if="ItemTag.multiple"
                  :value="true"
                >
                  <template v-slot:activator>
                    <v-list-item-title>{{ ItemTag.name }}</v-list-item-title>
                  </template>
                  <v-list-item
                    v-for="([title, icon], i) in ItemTag.items"
                    :key="i"
                    link
                    color="#439798"
                  >
                    <v-list-item-title v-text="title" class="ml-4"></v-list-item-title>
                    <v-list-item-icon>
                      <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>

                <v-list-item
                  v-else
                  color="#439798"
                >
                  <v-list-item-title>{{ ItemTag.items[0][0] }}</v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>{{ ItemTag.items[0][1] }}</v-icon>
                  </v-list-item-icon>
                </v-list-item>

              </v-list-item-group>
            </v-list>
          </v-timeline-item>
        </template>
      </v-timeline>
    </div>

    <div class="mt-auto ma-4">
      <v-divider class="mb-3"></v-divider>

      <v-btn color="#439798" class="text-capitalize text-h6 white--text" block @click="handleQuitProject">
        <v-icon size="25" class="mr-1" color="white">mdi-arrow-left-bold-box-outline</v-icon>
        Quit project
      </v-btn>
    </div>
  </div>
</template>
  
<script>
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/SystemUtils/localStorage.js'


export default {
  name: 'LeftBarProject',

  components: {
  },

  data() {
    return {
      projectName: "",
      ColectItem: [undefined, undefined, undefined, undefined, undefined],

      ItemTags: [
        {
          name: "Files",
          multiple: true,
          items: [
            ['Project Message', 'mdi-information-outline'],
            ['Project Files', 'mdi-file-document-multiple-outline'],
          ],
        },
        {
          name: "Criteria",
          multiple: false,
          items: [
            ['Evaluation Criteria', 'mdi-tag-check-outline'],
          ],
        },
        {
          name: "Alternatives",
          multiple: false,
          items: [
            ['Alternatives', 'mdi-format-list-bulleted-square'],
          ],
        },
        {
          name: "Trade-off",
          multiple: false,
          items: [
            ['Files', 'mdi-file-account-outline'],
          ],
        },
        {
          name: "Analyse",
          multiple: false,
          items: [
            ['Files', 'mdi-file-account-outline'],
          ],
        },
      ],
      TimeItemColor: [1, 1, 1, 0, 0]

    }
  },

  created() {
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
    handleQuitProject() {
      removeLocalStorage("ADecisionProject")
      this.$store.commit('HandleprojectName', "");
    }
  }
};
</script>

<style scoped>

</style>