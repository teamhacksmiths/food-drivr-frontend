const axios = require('axios');
const auth_token = 'xtvPuVF5mGE89Vb6nZKU';
const baseURL = 'https://wastenotfoodtaxi.herokuapp.com/api/v1/';
const userPath = 'users/'
const sessionPath = 'sessions/'


const config = {
  headers: {'Content-Type': 'application/json'}
};

const APIHelpers = {
  getAuthToken() {
    const token = localStorage.getItem('token') || null;
    return token;
  },
  getUserData() {
    return axios.get('https://wastenotfoodtaxi.herokuapp.com/api/v1/users/xtvPuVF5mGE89Vb6nZKU', {
      config
    }).then(function(response){
      console.log(response);
    }).catch(function(error){
      console.warn('Error: ', error);
    })
  },
  postUserData(data) {
    return axios.post(`${baseURL}${userPath}#{auth_token}`, config).then(function(response) {

    })
  }

};

export default APIHelpers;
