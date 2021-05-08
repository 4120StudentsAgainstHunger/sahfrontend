<template>
  <v-container grid-list-md>
    <v-row align="center" justify="center">
      <v-col class="align-center">
        <v-row class="align-center" justify="center">
          <v-col cols="12" sm="10" md="10" lg="6" class="align-center">
            <v-alert v-if="showMsg === 'error'"
                     dismissible
                     :value="true"
                     type="error"
            >
              Please verify information.
            </v-alert>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="10" lg="6" class="align-center">
            <v-card class="login-card">
              <v-card-title>
                <span class="headline">{{pageTitle}}</span>
              </v-card-title>
              <v-spacer/>

              <v-card-text>
                <v-form ref="form" lazy-validation>
                <v-container>

                    <v-select
                    v-model="foodrequest.location"
                    label="Location"
                    :items="list"
                    item-value='pk'
                    item-text='foodrequest_location'
                    ></v-select>

                    <v-text-field
                    v-model="foodrequest.request_title"
                    label="Name"
                    />

                    <v-text-field
                    v-model="foodrequest.request_time"
                    label="Time"
                    required
                    type="time"
                    />

                    <v-text-field
                    v-model="foodrequest.request_date"
                    label="Date"
                    required
                    type="date"
                    />

                </v-container>
                <v-btn v-if="!isUpdate" class="blue white--text" @click="createFoodRequest">Save</v-btn>
                <v-btn class="white black--text" @click="cancelOperation">Cancel</v-btn>

                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>  
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  import router from '../router';
  import {APIService} from '../http/APIService';
  const apiService = new APIService();

  export default {
    name: 'FoodRequest',
    components: {},
    data() {
      return {
        showError: false,
        foodrequest: {},
        pageTitle: "Add a request!",
        isUpdate: false,
        showMsg: '',
      };
    },
    methods: {
      createFoodRequest() {
        apiService.addNewFoodRequest(this.foodrequest).then(response => {
          if (response.status === 201) {
            this.foodrequest = response.data;
             this.showMsg = "";
            router.push('/food-request');
          }else{
              this.showMsg = "error";
          }
        })
      },
      cancelOperation(){
         router.push("/");
      },
    },
  }
</script>
<style scoped>
  .aform {
    margin-left: auto;
    width: 60%;
  }
</style>