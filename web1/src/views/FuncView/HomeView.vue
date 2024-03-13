<template>
  <v-container>
    <div>
      <div class="d-flex align-center">
        <span class="ma-4">QUICK START</span>
        <v-divider></v-divider>
      </div>

      <div class="ml-4 d-flex">
        <v-card
          v-for="(item, index) in QuickStartItems"
          :key="index"
          class="d-flex justify-center align-center mr-4"
          max-width="140"
          min-height="140"
          outlined
          elevation="1"
          @click="handleQuickStart(item.name)"
        >
          <v-container class="d-flex justify-center flex-wrap align-center">
            <v-icon
              :color="item.iconColor"
              size="56"
            >
              {{ item.icon }}
            </v-icon>
            <span class="mt-2">{{ item.name }}</span>
          </v-container>
        </v-card>
      </div>
    </div>

    <div class="mt-4">
      <div class="d-flex align-center">
        <span class="ma-4">TRY DEMO</span>
        <v-divider></v-divider>
      </div>

      <div class="ml-4 d-flex">
        <v-card
          v-for="(item, index) in TryDemoItemsComputed"
          :key="index"
          class="mr-4 d-flex flex-column"
          width="240"
          height="120"
          outlined
          elevation="1"
          @click="handleTryDemo(item.id)"
        >
          <div class="d-flex justify-space-between align-center mx-2 mb-2 mt-1">
            <div>
              <v-chip x-small label color="orange" text-color="white" v-if="item.type=='Decision'">Decision</v-chip>
              <v-chip x-small label color="green" text-color="white" v-else-if="item.type=='Excution'">Excution</v-chip>
              <v-chip x-small label color="blue" text-color="white" v-else-if="item.type=='Project'">Project</v-chip>
            </div>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon color="dark-grey" x-small>
                  <v-icon>mdi-information-variant</v-icon>
                </v-btn>
              </template>
              <span>{{ item.msg }}</span>
            </v-tooltip>
            
          </div>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <div class="ml-2">
                <span v-on="on" class="text-body-1 font-weight-bold">{{ item.newName }}</span>
              </div>
            </template>
            <span>{{ item.name }}</span>
          </v-tooltip>
          
          <div class="mt-auto ml-2">
            <span class="text-body-2 grey--text font-weight-bold">{{ item.time }}</span>

          </div>
        </v-card>
      </div>
    </div>

    <div class="mt-4">
      <div class="d-flex align-center">
        <span class="ma-4">ALL ITEMS</span>
        <v-divider></v-divider>
      </div>

      <div class="ml-4">
        <v-expansion-panels flat outlined accordion hover>
          <v-expansion-panel
            v-for="(AllItemsItem, index) in AllItemsItems"
            :key="index"
          >
            <v-divider v-if="index != 0"></v-divider>
            <v-expansion-panel-header>
              <div class="d-flex justify-space-between">
                <div class="d-flex align-center">
                  <v-icon color="blue">mdi-folder</v-icon>
                  <span class="ml-2 text-body-1 font-weight-bold">{{ AllItemsItem.name }}</span>
                </div>
                <div class="mr-6 d-flex align-center">
                  <span class="text-body-2 grey--text font-weight-bold mx-4">{{ AllItemsItem.time }}</span>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" icon color="dark-grey" x-small>
                        <v-icon>mdi-information-variant</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ AllItemsItem.msg }}</span>
                  </v-tooltip>
                </div>
              </div>
              
              <template v-slot:actions>
                <v-icon color="primary">
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list dense nav>
                <div
                  v-for="(Item, ItemIndex) in AllItemsItem.content"
                  :key="Item.name"
                  class="ml-4"
                >
                  <v-divider v-if="ItemIndex != 0"></v-divider>
                  <v-list-item link @click="handleEnterProject(AllItemsItem.id, AllItemsItem.name, Item.type)">
                    <v-list-item-content>
                      <div class="d-flex align-center">
                        <v-icon v-if="Item.type == 'Decision'" color="orange">mdi-redo</v-icon>
                        <v-icon v-else-if="Item.type == 'Excution'" color="green">mdi-autorenew</v-icon>
                        <span class="ml-4 text-body-2">{{ Item.name }}</span>
                      </div>
                    </v-list-item-content>
                    <v-list-item-action>
                      <div class="mr-6 d-flex align-center">
                        <span class="text-body-2 grey--text font-weight-bold">{{ Item.time }}</span>
                      </div>
                    </v-list-item-action>
                  </v-list-item>
                </div>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </v-container>
</template>

<script>
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/SystemUtils/localStorage.js'


export default {
  name: 'HomeView',

  components: {
  },

  data() {
    return {
      QuickStartItems: [
        {
          name: "New project",
          iconColor: "#439798",
          icon: "mdi-folder-plus",
        },
        {
          name: "New decision",
          iconColor: "#439798",
          icon: "mdi-redo",
        },
        {
          name: "New excution",
          iconColor: "#439798",
          icon: "mdi-autorenew",
        },
      ],
      TryDemoItems: [
        {
          id: "0001",
          name: "What target to decision asdfljasldfnsoakdnglkjsdlansdkfjsdl",
          time: "2024-03-02 12:00:00",
          type: "Decision",
          msg: "this is a target to decision.",
        },
        {
          id: "0002",
          name: "What target to decision asdfljasldfnsoakdnglkjsdlansdkfjsdl",
          time: "2024-03-02 13:00:00",
          type: "Excution",
          msg: "this is a target to decision.",
        },
        {
          id: "0003",
          name: "What target to decision asdfljasldfnsoakdnglkjsdlansdkfjsdl",
          time: "2024-03-02 13:00:00",
          type: "Project",
          msg: "this is a target to decision.",
        },
      ],
      AllItemsItems: [
        {
          id: "0001",
          name: "restart",
          time: "2024-12-23 23:00:00",
          msg: "this is a restart file.",
          content: [
            {
              name: "restart Decision",
              time: "2024-12-23 23:00:00",
              type: "Decision"
            },
            {
              name: "restart Excution",
              time: "2024-12-23 23:00:00",
              type: "Excution"
            },
          ]
        },
        {
          id: "0002",
          name: "testhello",
          time: "2024-12-24 23:00:00",
          msg: "this is a testhello file.",
          content: [
            {
              name: "testhello Decision",
              time: "2024-2-21 23:00:00",
              type: "Decision"
            },
          ]
        },
      ]

    }
  },
  computed: {
    TryDemoItemsComputed() {
      return this.TryDemoItems.map(target => {
        if (target.name.length > 40) {
          return {
            ...target,
            newName: target.name.slice(0, 40) + '...'
          };
        } else {
          return target;
        }
      });
    }
  },

  methods: {
    handleQuickStart(name) {
      console.log(name)
    },
    handleEnterProject(id, name, type) {
      setLocalStorage("ADecisionProject", name)
      this.$store.commit('HandleprojectName', name);
      let routerName = "ProjectMsg"
      if (this.$router.currentRoute.path !== '/' + routerName) {
        this.$router.push('/' + routerName);
      }

    }
  }
};
</script>
