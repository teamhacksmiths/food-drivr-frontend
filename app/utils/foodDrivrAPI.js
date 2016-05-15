import axios from 'axios';
import auth from './auth';
import UserModel from '../models/UserModel';

const baseURL = 'https://wastenotfoodtaxi.herokuapp.com/api/v1/users';
const getAuthToken = () => { return localStorage.getItem('token'); };
const authToken = getAuthToken();
const getUserURL = `${baseURL}/${authToken}`;

const config = {
  headers: {  'Content-Type': 'application/json', 'Authorization': authToken }
};

const foodDrivrAPI = {
  getUserData() {
    return axios
      .get(getUserURL, config)
      .then((response) => {
        const data = respose.data;
        let user = new UserModel(data);
        console.log("Created a new user: ", user)
        return user;
      });
  },
  postUserDataToAPI(userData) {
    const authToken = localStorage.getItem('token');

    const requestURL = `https://wastenotfoodtaxi.herokuapp.com/api/v1/users/${authToken}`
    return axios
      .post(requestURL, config)
      .then((response) => {
        console.log("Success! ", response)
      }).catch((error) => { console.warn("Error response from Server: ", error) });
  }
}

export default foodDrivrAPI;
