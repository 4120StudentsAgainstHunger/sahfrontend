<template>
  <v-main>
    <!-- Welcome title -->
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" align="center" justify="center">
          <blockquote>
            Welcome to our events!
          </blockquote>
        </v-col>
      </v-row>

      <!-- Data table -->
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" v-resize="onResize">
            <v-data-table
              :headers="headers"
              :items="events"
              class="elevation-1"
              style="max-height: 300px; overflow-y: auto"
              v-if="!isMobile"
            >
                    <template v-slot:item="props">
                      <tr>
                        <td align="left">{{ props.item.location }}</td>
                        <td align="left">{{ props.item.name }}</td>
                        <td align="left">{{ props.item.start_time }}</td>
                        <td align="left">{{ props.item.end_time }}</td>
                        <td align="left">{{ props.item.date }}</td>
                      </tr>  
                    </template>
              </v-data-table>
              <v-data-iterator 
                :items="events"
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

  import router from '../router';
  import {APIService} from '../http/APIService';
  const apiService = new APIService();

  export default {
    name: "EventList",
    data: () => ({
      events: [],
      eventSize: 0,
      showMsg: '',
      isMobile: false,
      headers: [
        {text: 'Location', sortable: true, align: 'left',},
        {text: 'Event Name', sortable: false, align: 'left',},
        {text: 'Start Time', sortable: false, align: 'left',},
        {text: 'End Time', sortable: false, align: 'left',},
        {text: 'Date', sortable: false, align: 'left',},
      ],

    }),
    mounted() {
      this.getEvent();
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
      getEvent() {
        apiService.getEventList().then(response => {
          this.events = response.data.data;
          this.eventSize = this.events.length;
        });
      },
    }
  };
</script>
