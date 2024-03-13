<template>
  <v-container>
    <div>
      <div class="d-flex align-center">
        <span class="ma-4">CRITERIA</span>
        <v-divider></v-divider>
      </div>
      <div class="ml-4 mb-4 d-flex">
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text" small>
          <v-icon size="20" class="mr-1" color="white">mdi-plus</v-icon>
          New Criteration
        </v-btn>
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text ml-4" small @click="handleCriteriaModify">
          modify
          <v-icon size="20" class="ml-1" color="white">mdi-rename-outline</v-icon>
        </v-btn>
        <v-btn color="#439798" class="text-capitalize text-body-1 white--text ml-4" small @click="handleCriteriaSave">
          save
          <v-icon size="20" class="ml-1" color="white">mdi-content-save-edit-outline</v-icon>
        </v-btn>
      </div>
      <v-divider></v-divider>
    </div>

    <div class="mt-8" v-if="criteriaShowType">
      <v-expansion-panels v-model="criteriaPanel" multiple focusable>
        <v-expansion-panel v-for="(criteriaItem, index) in criteriaItems" :key="index">
          <v-expansion-panel-header>
            <div class="d-flex justify-space-between align-center">
              <span class="text-body-1 font-weight-bold">
                {{ criteriaItem.title }}
              </span>
              <v-btn class="mr-4" icon color="dark-grey" x-small>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="ml-4">
            <span class="text-body-2 grey--text ml-2">Highest ranked</span>
            <draggable v-model="criteriaItem.levelItems" >
              <div v-for="(item, index) in criteriaItem.levelItems" :key="index">
                <v-divider v-if="index !== 0"></v-divider>
                <v-list dense>
                  <v-list-item dense>
                    <v-icon size="20" class="ml-1 drag-handle">mdi-cursor-move</v-icon>
                    <v-list-item-content class="ml-3">
                      <v-text-field
                        v-if="item.isRewrite"
                        dense
                        width="200"
                        v-model="item.newContent"
                        class="mr-4 mb-n8 mt-n2"
                        append-icon="mdi-arrow-right-bold-box"
                        @click:append="item.isRewrite = false"
                        solo
                      ></v-text-field>
                      <v-list-item-title v-else>{{ item.content }}</v-list-item-title>
                      
                    </v-list-item-content>
                    
                    <v-btn class="mr-4" icon color="dark-grey" x-small @click="item.isRewrite = true">
                      <v-icon>mdi-rename-outline</v-icon>
                    </v-btn>
                    <v-btn class="mr-4" icon color="dark-grey" x-small>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-list-item>
                </v-list>
              </div>
            </draggable>
            <span class="text-body-2 grey--text ml-2">Lowest ranked</span>
            <br>
            <v-btn color="#439798" class="text-capitalize text-body-1 white--text ml-2 mt-2" small>
              <v-icon size="20" class="mr-1" color="white">mdi-plus</v-icon>
              New Level
            </v-btn>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </div>

    <div class="mt-8" v-else>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="desserts"
        item-key="Criteria"
        show-select
        class="elevation-1"
      >
        <!-- <template v-slot:item.Actions="{ item }">
          <v-icon
            small
            class="mr-2"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
          >
            mdi-delete
          </v-icon>
        </template> -->
      </v-data-table>
    </div>
  </v-container>
</template>
  
<script>
import draggable from 'vuedraggable';

export default {
  name: 'ProjectCriteria',

  components: {
    draggable,
  },

  data() {
    return {
      selected: [],
        headers: [
          {
            text: 'Criteria',
            align: 'start',
            sortable: false,
            value: 'Criteria',
          },
          { text: 'Levels', value: 'Levels' },
          { text: 'Actions', value: 'Actions', sortable: false },
        ],
        desserts: [
          {
            Criteria: 'Frozen Yogurt',
            Level: 1,
          },
          {
            Criteria: 'Ice cream sandwich',
            Level: 1,
          },
          {
            Criteria: 'Eclair',
            Level: 7,
          },
          {
            Criteria: 'Cupcake',
            Level: 8,
          },
          {
            Criteria: 'Gingerbread',
            Level: 16,
          },
          {
            Criteria: 'Jelly bean',
            Level: 0,
          },
        ],
      criteriaShowType: false,
      criteriaPanel: [0, 1, 2],
      criteriaItems: [
        {
          title: 'lalala', 
          levelItems: [
            {
              content: '123',
              newContent: '',
              isRewrite: false,
            },
            {
              content: '234',
              newContent: '',
              isRewrite: false,
            },
            {
              content: '345',
              newContent: '',
              isRewrite: false,
            },
          ],
        },
        {
          title: 'lalala', 
          levelItems: [
            {
              content: '123',
              newContent: '',
              isRewrite: false,
            },
            {
              content: '234',
              newContent: '',
              isRewrite: false,
            },
            {
              content: '345',
              newContent: '',
              isRewrite: false,
            },
          ],
        },
        {
          title: 'lalala', 
          levelItems: [
            {
              content: '123',
              newContent: '',
              isRewrite: false,
            },
            {
              content: '234',
              newContent: '',
              isRewrite: false,
            },
            {
              content: '345',
              newContent: '',
              isRewrite: false,
            },
          ],
        },
      ]
    }
  },

  created() {
  },

  mounted() {

  },
  
  methods: {
    handleCriteriaModify() {
      this.criteriaShowType = true
    },
    handleCriteriaSave() {
      this.criteriaShowType = false
    }
  }
};
</script>

<style scoped>
.drag-handle {
  cursor: move;
}
</style>