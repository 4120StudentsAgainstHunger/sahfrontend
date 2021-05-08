<template>
  <v-main>
    <!-- Welcome title -->
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" align="center" justify="center">
          <blockquote>
            Welcome to our blog page!
          </blockquote>
        </v-col>
      </v-row>

      <!-- Data table -->
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" v-resize="onResize">
            <v-data-table
              :headers="headers"
              :items="blogpages"
              class="elevation-1"
              style="max-height: 300px; overflow-y: auto"
              v-if="!isMobile"
            >
                    <template v-slot:item="props">
                      <tr>
                        <td align="left">{{ props.item.volunteer }}</td>
                        <td align="left">{{ props.item.title }}</td>
                        <td align="center"><v-icon @click="viewBlogPostShow(props.item)">mdi-eye</v-icon></td>
                      </tr>  
                    </template>
              </v-data-table>
              <v-data-iterator 
                :items="blogpages"
                hide-default-footer
                v-else
              >
              </v-data-iterator> 
        </v-col>
        </v-row>
      </v-container>  
  </v-main>
</template>


<script>

  import {APIService} from '../http/APIService';
  const apiService = new APIService();

  export default {
    name: "BlogPageList",
    data: () => ({
      blogpages: [],
      validUserName: "Guest",
      blogpageSize: 0,
      showMsg: '',
      isMobile: false,
      headers: [
        {text: 'Volunteer', sortable: true, align: 'left',},
        {text: 'Title', sortable: false, align: 'left',},
        {text: 'Check Blog', sortable: false, align: 'left',},
      ],

    }),
    mounted() {
      this.getBlogPage();
      this.showMessages();
    },
    methods: {
      onResize() {
          if (window.innerWidth > 600)
            this.isMobile = false;
          else  
            this.isMobile = true;
        },
      showMessages(){
        console.log(this.$route.params.msg)
        if (this.$route.params.msg) {
          this.showMsg = this.$route.params.msg;
        }
      },
      getBlogPage() {
        apiService.getBlogPageList().then(response => {
          this.blogpages = response.data.data;
          this.blogpageSize = this.blogpages.length;
          if (localStorage.getItem("isAuthenticates")
            && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
            this.validUserName = JSON.parse(localStorage.getItem("log_user"));
            }
          }).catch(error => {
          if (error.response.status === 401) {
            localStorage.removeItem('isAuthenticates');
            localStorage.removeItem('log_user');
            localStorage.removeItem('token');
            router.push("/auth");
          }
        });
      },
      showBlogPage() {
        if (localStorage.getItem("isAuthenticates")
          && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
          router.push('/show-blog-page');
        } else {
          router.push("/auth");
        }
      }
    }
  };
</script>
