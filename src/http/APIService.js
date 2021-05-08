/* eslint-disable */
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/' /* 'https://teamsahomaha.pythonanywhere.com/' 'http://127.0.0.1:8000/' 'http://localhost:8000' http://127.0.0.1:8000/*/

export class APIService {
  constructor() {

  }

   getBlogPage(param_pk) {
     const url = `${API_URL}/sahbackend/blogpages/${param_pk}`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::"+jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }

   getBlogPageList() {
    const url = `${API_URL}/sahbackend/blogpages/`;
    let jwtToken = localStorage.getItem('token');
    console.log(":::jwtToken:::::"+jwtToken);
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.get(url, {headers: headers});

  }

  addNewFoodRequest(foodrequest){
  const url = `${API_URL}/sahbackend/foodrequests/`;
  let jwtToken = localStorage.getItem('token');
  const headers = {Authorization: `jwt ${jwtToken}`};
  return axios.post(url, foodrequest, {headers: headers});
 }

  getEvent(param_pk) {
    const url = `${API_URL}/sahbackend/events/${param_pk}`;
    let jwtToken = localStorage.getItem('token');
    console.log(":::jwtToken:::::"+jwtToken);
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }

  getEventList() {
      const url = `${API_URL}/sahbackend/events/`;
      let jwtToken = localStorage.getItem('token');
      console.log(":::jwtToken:::::" + jwtToken);
      const headers = {Authorization: `jwt ${jwtToken}`};
      return axios.get(url, {headers: headers});

  }
}