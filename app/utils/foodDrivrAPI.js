import axios from 'axios';
const baseURL = 'https://wastenotfoodtaxi.herokuapp.com/api/v1';
const baseUserURL = `${baseURL}/users`;
const getAuthToken = () => { return localStorage.getItem('token'); };
const authToken = getAuthToken();
const userURLWithAuthToken = `${baseUserURL}/${authToken}`;
const updatePasswordURL = `${userURLWithAuthToken}/password-update`;

const config = {
  headers: { 'Content-Type': 'application/json', 'Authorization': authToken }
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
  /* Convenience for encoding user data before submitting to API */
  encodedUserData(data) {
    const user = {
      user: {
        email: data.email,
        phone: data.phone,
        company: data.company,
        setting_attributes: {
          notifications: data.notifications
        }
      }
    };
    return JSON.stringify(user);
  },
  /* Convenience for parsing user data returned from API */
  parseUser(data) {
    return new UserModel(data);
  },
  /* Returns a promise with data sent to API */
  getUserData() {
    return axios
      .get(userURLWithAuthToken, config)
      .then((response) => {
        return {
          userData: this.parseUser(response.data)
        };
      });
  },
  /* Returns a promise with response from posting user data to API */
  postUserDataToAPI(userData) {
    const encodedData = this.encodedUserData(userData);
    return axios
      .patch(userURLWithAuthToken, encodedData, config)
      .then((response) => {
        return response;
      });
  },
  /* Encode the user's password data to submit to API */
  encodePasswordData(data) {
    const user = {
      user: {
        password: data.password,
        password_confirmation: data.passwordConfirmation,
        current_password: data.currentPassword
      }
    };
    return JSON.stringify(user);
  },
  /* Returns a promise submitting the password update data to the API */
  updatePassword(params) {
    const encodedData = this.encodePasswordData(params);
    return axios.patch(updatePasswordURL, encodedData, config).then((response) => {
      return response;
    });
  }
};

export default foodDrivrAPI;
