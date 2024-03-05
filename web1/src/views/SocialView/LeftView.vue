<template>
  <div>
    <v-navigation-drawer 
      width="240"
      app
      clipped 
      color="#fbfbfb"
      fixed
    >
      <div class="mx-3 mt-6">
        <v-btn color="#439798" class="text-capitalize text-h6 white--text" block @click="handleHome">
          home
        </v-btn>
      </div>

      <v-container>
        <v-divider></v-divider>
      </v-container>

      <v-list dense>
        <v-list-group
          :value="true"
          color="#439798"
        >
          <template v-slot:activator>
            <v-list-item-title>Decision Support</v-list-item-title>
          </template>
          <v-list-item
            v-for="([title, icon], i) in DecisionItems"
            :key="i"
            link
            class="ml-4"
            color="#439798"
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          :value="true"
          color="#439798"
        >
          <template v-slot:activator>
            <v-list-item-title>Excution Support</v-list-item-title>
          </template>
          <v-list-item
            v-for="([title, icon], i) in ExcutionItems"
            :key="i"
            link
            class="ml-4"
            color="#439798"
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-item-group>
          <v-list-item
            color="#439798"
          >
            <v-list-item-content class="black--text">
              <v-list-item-title>Setting</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item
            color="#439798"
          >
            <v-list-item-content class="black--text">
              <v-list-item-title>About Us</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: 'LeftView',

  components: {
  },

  data() {
    return {
      DecisionItems: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      ExcutionItems: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }
  },

  methods: {
    handleHome() {
      console.log("home")
    }
  }
};
</script>
