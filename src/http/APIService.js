/* eslint-disable */
import axios from 'axios';
const API_URL = 'http://teamsahomaha.pythonanywhere.com' /* 'https://teamsahomaha.pythonanywhere.com/' 'http://127.0.0.1:8000/' 'http://localhost:8000' http://127.0.0.1:8000/*/

export class APIService {
  constructor() {

  }

   getBlogPage(param_pk) {
     const url = `${API_URL}/sahbackend/blogpages/${param_pk}`;
     return axios.get(url, {headers: headers});
  }

   getBlogPageList() {
    const url = `${API_URL}/sahbackend/blogpages/`;
    return axios.get(url, {headers: headers});

  }

  addNewFoodRequest(foodrequest){
  const url = `${API_URL}/sahbackend/foodrequests/`;
  return axios.post(url, foodrequest, {headers: headers});
 }

  getEvent(param_pk) {
    const url = `${API_URL}/sahbackend/events/${param_pk}`;
    return axios.get(url, {headers: headers});
  }

  getEventList() {
      const url = `${API_URL}/sahbackend/events/`;
      return axios.get(url, {headers: headers});

  }
}