import axios from 'axios';
import UserModel from '../models/UserModel';
const baseURL = 'https://wastenotfoodtaxi.herokuapp.com/api/v1/users';
const getAuthToken = () => { return localStorage.getItem('token'); };
const authToken = getAuthToken();
const getUserURL = `${baseURL}/${authToken}`;

const config = {
  headers: { 'Content-Type': 'application/json', 'Authorization': authToken }
};

const parseUser = (data) => {
  return new UserModel(data);
};

const foodDrivrAPI = {
  parseUser(data) {
    return new UserModel(data);
  },
  getUserData() {
    return axios
      .get(getUserURL, config)
      .then((response) => {
        return {
          userData: parseUser(response.data)
        }
      });
  },
  postUserDataToAPI(userData) {
    const requestURL = `https://wastenotfoodtaxi.herokuapp.com/api/v1/users/${authToken}`
    return axios
      .post(requestURL, { userData }, config)
      .then((response) => {
        console.log("Success! ", response)
      });
  }
}

export default foodDrivrAPI;
