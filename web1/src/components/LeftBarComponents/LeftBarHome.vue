<template>
  <div>
    <div class="mx-3 mt-6">
      <v-btn color="#439798" class="text-capitalize text-h6 white--text" block @click="handleHome">
        Home & Projects
      </v-btn>
    </div>

    <v-container>
      <v-divider></v-divider>
    </v-container>

    <v-list dense>
      <v-list-item-group
        v-model="ColectItem"
        :mandatory='true'
      >
        <v-list-group
          v-for="(ItemTag) in ItemTags"
          :key="ItemTag.name"
          color="#439798"
          @click="handleSelectTag(ItemTag.name)"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ ItemTag.name }}</v-list-item-title>
          </template>
          <v-list-item
            v-for="([title, icon], i) in ItemTag.items"
            :key="i"
            link
            color="#439798"
            @click="handleColectItem()"
          >
            <v-list-item-title v-text="title" class="ml-4"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-item
          color="#439798"
          v-for="(SingleItemTag) in SingleItemTags"
          :key="SingleItemTag.name"
          @click="handleSingleItem(SingleItemTag.name)"
        >
          <v-list-item-content class="black--text">
            <v-list-item-title>{{ SingleItemTag.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
  
<script>
export default {
  name: 'LeftBarHome',

  components: {
  },

  data() {
    return {
      ItemTags: [
        {
          name: "Decision Support",
          items: [
            ['Files', 'mdi-file-account-outline'],
            ['Criteria', 'mdi-tag-multiple-outline'],
            ['Alternatives', 'mdi-notebook-outline'],
            ['Trade-off', 'mdi-swap-horizontal'],
            ['Analyse', 'mdi-pickaxe'],
          ],
        },
        {
          name: "Excution Support",
          items: [
            ['Testing', 'mdi-plus-outline'],
          ],
        }
      ],
      SingleItemTags: [
        {
          name: "Setting",
        },
        {
          name: "About",
        },
      ],
      ColectItem: 0,
    }
  },

  created() {
    
  },

  methods: {
    handleHome() {
      let routerName = "Home"
      if (this.$router.currentRoute.path !== '/' + routerName) {
        this.$router.push('/' + routerName);
      }
    },
    handleSelectTag(name) {
      let routerName = ""
      if (name.startsWith("Decision")) {
        routerName = "Decision"
      } else if (name.startsWith("Excution")) {
        routerName = "Excution"
      }
      if (this.$router.currentRoute.path !== '/' + routerName) {
        this.$router.push('/' + routerName);
      }
    },
    handleColectItem() {
      this.$nextTick(() => {
        let routerName = ""
        let reallyColectItem = this.ColectItem - 4
        if (reallyColectItem < this.ItemTags[0].items.length) {
          routerName = this.ItemTags[0].items[reallyColectItem][0]
        } else {
          routerName = this.ItemTags[1].items[reallyColectItem - this.ItemTags[0].items.length][0]
        }

        if (this.$router.currentRoute.path !== '/' + routerName) {
          this.$router.push('/' + routerName);
        }
      });
    },
    handleSingleItem(name) {
      let routerName = name
      if (this.$router.currentRoute.path !== '/' + routerName) {
        this.$router.push('/' + routerName);
      }
    }
  }
};
</script>

<style scoped>

</style>