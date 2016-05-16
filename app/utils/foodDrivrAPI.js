import axios from 'axios';
const baseURL = 'https://wastenotfoodtaxi.herokuapp.com/api/v1'
const baseUserURL = `${baseURL}/users`;
const getAuthToken = () => { return localStorage.getItem('token'); };
const authToken = getAuthToken();
const userURLWithAuthToken = `${baseUserURL}/${authToken}`;
const updatePasswordURL = `${userURLWithAuthToken}/password-update`

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

    return JSON.stringify(user);
  },
  parseUser(data) {
    return new UserModel(data);
  },
  getUserData() {
    return axios
      .get(userURLWithAuthToken, config)
      .then((response) => {
        return {
          userData: parseUser(response.data)
        }
      });
  },
  postUserDataToAPI(userData) {
    const encodedData = encodedUserData(userData);
    return axios
      .post(userURLWithAuthToken, { encodedData }, config)
      .then((response) => {
        return response;
      });
  },
  encodePasswordData(data){
    const user = {
      user: {
        password: data.password,
        password_confirmation: data.passwordConfirmation,
        current_password: data.currentPassword
      }
    }
    return JSON.stringify(user);
  },
  updatePassword(params){
    const encodedData = this.encodePasswordData(params);
    return axios.patch(updatePasswordURL, encodedData, config).then((response) => {
      return response;
    });
  }
}

export default foodDrivrAPI;
