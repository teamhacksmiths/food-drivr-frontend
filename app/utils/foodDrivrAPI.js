import axios from 'axios';
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

class UserModel {
  constructor(data) {
    const user = data.user;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.company = user.company;
    this.type = user.type;
    this.roleId = user["role_id"];
    this.avatar = user.avatar;
    this.notifications = user.settings.notifications;
  }
}

const foodDrivrAPI = {
  enocedUserData(data){
    const user = {
      email: data.email,
      phone: data.phone,
      company: data.company,
      setting_attributes: {
        notifications: data.notifications
      }
    };

    return user;
  },
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
    const requestURL = `https://wastenotfoodtaxi.herokuapp.com/api/v1/users/${authToken}`;
    const encodedData = encodedUserData(userData);
    return axios
      .post(requestURL, { encodedData }, config)
      .then((response) => {
        console.log("Success! ", response)
      });
  }
}

export default foodDrivrAPI;
