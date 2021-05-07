<template>
  <v-app>
    <v-app-bar app color="red">
      <v-toolbar-title >Students Against Hunger</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-xs-only">
        <v-btn
          v-for="item in menu"
          :key="item.title"
          :to="item.url"
          flat
          text 
          rounded
          dark
        >{{ item.title }}</v-btn>
      </div>
      <div class="hidden-sm-and-up">
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
      </div>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>

</template>

<script>
  import {APIService} from './http/APIService';
  const apiService = new APIService();

  export default {
    name: 'App',
    data: () => ({
      authenticated: false,
      dialog: false,
      menu: [
        { title: 'Home', url:"/"},
        { title: 'Calendar', url:"/event-listing" },
        { title: 'Food Request', url:"/food-request" },
        { title: 'Blog', url:"/blog-page-listing" },
      ]
    }),
  };
</script>
