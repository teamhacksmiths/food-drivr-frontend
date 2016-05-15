import axios from 'axios';
import auth from './auth';

const dummyUser = {
    name: "Ryan Collins",
    email: 'admin@ryancollins.io',
    phone: '222-222-2222',
    role_id: 0,
    avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAQyAAAAJDU3YWY4Nzk1LWQ0YzEtNGIyMy1iOWI3LTBmMTllMmI1Y2Q5NQ.jpg',
    password: 'password123',
    notifications: true,
    addresses: [
      {
        key: 1,
        fullAddress: "123 Main St., Corolla NC, 27927",
        default: true
      },
      {
        key: 2,
        fullAddress: '2121 Main St. Springfield, OH, 20202',
        default: false
      }
    ]
};

const foodDrivrAPI = {
  getDummyUser() {
    return dummyUser;
  },
  postUserDataToAPI(userData) {
    const authToken = localStorage.getItem('token');
    const config = {
      headers: {'Content-Type': 'application/json', 'Authorization': authToken}
    };
    const requestURL = `https://wastenotfoodtaxi.herokuapp.com/api/v1/users/${authToken}`
    return axios
      .post(requestURL, config)
      .then((response) => {
        console.log("Success! ", response)
      }).catch((error) => { console.warn("Error response from Server: ", error) });
  }
}

export default foodDrivrAPI;
