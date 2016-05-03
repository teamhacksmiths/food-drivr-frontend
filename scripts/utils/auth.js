import axios from 'axios';

module.exports = {
    login(email, pass) {
        // ensure callback is always last argument
        var token = (typeof window !== "undefined") ? localStorage.getItem('token') : undefined;
        if (token) {
        	this.onChange(true);
            return
        }

        console.log(JSON.stringify({ session: { email: email, password: pass } }));

        // create new session, pass in email and password as object
        return axios({
                url: '/sessions',
                method: 'post',
                baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
                transformRequest: [function(data) {
                    // Do whatever you want to transform the data
                    return JSON.stringify(data);
                }],
                data: { session: { email: email, password: pass } },
                responseType: 'json',
                headers: { 'Content-Type': 'application/json' }
            });
    },

    register(name, email, pass, passconf) {
        // ensure callback is always last argument
        // create new session, pass in email and password as object

      return axios({
                url: '/users',
                method: 'post',
                baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
                transformRequest: [function(data) {
                    // Do whatever you want to transform the data
                    return JSON.stringify(data);
                }],
                data: {
                    'user': {
                        'name': name,
                        'email': email,
                        'password': pass,
                        'password_confirmation': passconf
                    }
                },
                responseType: 'json',
                headers: { 'Content-Type': 'application/json' }
            });
    },

  /*  registerAndLogin(name, email, pass, passconf, cb){
      return axios.all([this.register(name, email, pass, passconf, cb), this.login(email, pass, cb)])
      .then(axios.spread(function(){
        console.log("successfully completed both calls");
      }));
    },*/

    getToken() {
        return (typeof window !== "undefined") ? localStorage.getItem('token') : undefined;
    },

    // send a DELETE request with the auth_token as a URL parameter
    logout() {
        axios({
                url: '/sessions/' + localStorage.getItem('token'),
                method: 'delete',
                baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            .then(() => {
                delete localStorage.token;
                this.onChange(false);
            }).catch((err) => {
                console.log(err);
            });
    },

    loggedIn() {
        return !!((typeof window !== "undefined") ? localStorage.getItem('token') : undefined);
    },

    onChange() {}
};
