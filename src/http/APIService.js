/* eslint-disable */
import axios from 'axios';
const API_URL = 'https://teamsahomaha.pythonanywhere.com/' /* 'http://127.0.0.1:8000/' 'http://localhost:8000' http://127.0.0.1:8000/*/

export class APIService {
  constructor() {

  }

   getBlogPage(param_pk) {
     const url = `${API_URL}/api/blogpages/${param_pk}`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::"+jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }

   getBlogPageList() {
    const url = `${API_URL}/api/blogpages/`;
    let jwtToken = localStorage.getItem('token');
    console.log(":::jwtToken:::::"+jwtToken);
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.get(url, {headers: headers});

  }

 addFoodRequest(foodrequest_Pk){
    const url = `${API_URL}/api/foodrequests/${foodrequest_Pk}`;
    let jwtToken = localStorage.getItem('token');
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.add(url, {headers: headers});
 }

 getEvent(param_pk) {
  const url = `${API_URL}/api/events/${param_pk}`;
  let jwtToken = localStorage.getItem('token');
  console.log(":::jwtToken:::::"+jwtToken);
  const headers = {Authorization: `jwt ${jwtToken}`};
  return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
}

getEventList() {
    const url = `${API_URL}/api/events/`;
    let jwtToken = localStorage.getItem('token');
    console.log(":::jwtToken:::::" + jwtToken);
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.get(url, {headers: headers});

}
}