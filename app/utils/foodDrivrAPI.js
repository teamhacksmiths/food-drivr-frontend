import axios from 'axios';
import UserModel from '../models/UserModel';

const baseURL = 'https://wastenotfoodtaxi.herokuapp.com/api/v1/users';
const getAuthToken = () => localStorage.getItem('token');
const authToken = getAuthToken();
const getUserURL = `${baseURL}/${authToken}`;

const config = {
	headers: { 'Content-Type': 'application/json', Authorization: authToken }
};

const foodDrivrAPI = {
	getUserData() {
		return axios
	.get(getUserURL, config)
	.then((response) => {
		const data = response.data;
		const user = new UserModel(data);
		console.log(`Created a new user: ${user}`);
		return user;
	});
	},
	postUserDataToAPI(userData) {
		const requestURL = `https://wastenotfoodtaxi.herokuapp.com/api/v1/users/${authToken}`;
		return axios
	.post(requestURL, config)
	.then((response) => {
		console.log('Success! ', response);
	})
	.catch((error) => { console.warn(`Error response from Server: ${error}`); });
	}
};

module.exports = foodDrivrAPI;
