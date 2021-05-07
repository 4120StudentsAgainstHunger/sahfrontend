<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col align="center" justify="center" cols="12">
          <blockquote>
            Welcome!
          </blockquote>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col 
          cols="12"
            sm="10"
            md="10"
        >
          <v-card class="elevation-2">
            <v-container
              fluid
              grid-list-md
            >
              <v-row>
                <v-col>
                  <v-card>
                    
                    <v-card-text>
                      <div class="blue--text text-h6">
                        View our events!
                      </div>  
                    </v-card-text>
                    <v-card-actions>
                      <v-btn flat color="orange" @click="viewEvent">View Details</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                
                <v-col>
                  <v-card>
                    
                    <v-card-text>
                      <div class="blue--text text-h6">
                        Make a request!
                      </div>  
                    </v-card-text>
                    <v-card-actions>
                      <v-btn flat color="orange" @click="viewFoodRequests">View Details</v-btn>
                    </v-card-actions>
                  </v-card> 
                </v-col>

                <v-col>
                  <v-card>
                     
                    <v-card-text>
                      <div class="blue--text text-h6">
                        Visit our blogs!
                      </div>  
                    </v-card-text>
                    <v-card-actions>
                      <v-btn flat color="orange" @click="viewBlogPages">View Details</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                  Here is our contact information:
                  Blah / Blah / Blah
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import router from '../router';

  export default {
    name: 'Home',
    methods: {
      viewEvent() {
        router.push('/event-listing');
      },
      viewBlogPages() {
        router.push('/blog-page-listing');
      },
      viewFoodRequests() {
        router.push('/food-request');
      },
    }
  }
</script>
