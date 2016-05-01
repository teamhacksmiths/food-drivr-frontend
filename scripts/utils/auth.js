import axios from 'axios';

module.exports = {
    login(email, pass, cb) {
        // ensure callback is always last argument
        cb = arguments[arguments.length - 1];
        var token = (typeof window !== "undefined") ? localStorage.token : undefined;
        if (token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }

        console.log(JSON.stringify({ session: { email: email, password: pass } }));

        // create new session, pass in email and password as object
        axios({
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
            })
            .then((response) => {
                localStorage.token = response.data.authtoken.auth_token;
                if (cb) cb(true)
                this.onChange(true)
            })
            .catch((err) => {
                if (cb) cb(false)
                this.onChange(false)
                console.log(err)
            });
    },

    register(name, email, pass, passconf, cb) {
        // ensure callback is always last argument
        cb = arguments[arguments.length - 1];
        // create new session, pass in email and password as object

        axios({
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
            })
            .then((response) => {
                console.log(response.data);
                this.login(email, pass);
            })
            .catch((err) => {
                if (cb) cb(false)
                this.onChange(false)
            });
    },

  /*  registerAndLogin(name, email, pass, passconf, cb){
      return axios.all([this.register(name, email, pass, passconf, cb), this.login(email, pass, cb)])
      .then(axios.spread(function(){
        console.log("successfully completed both calls");
      }));
    },*/

    getToken() {
        return (typeof window !== "undefined") ? localStorage.token : undefined;
    },

    // send a DELETE request with the auth_token as a URL parameter
    logout() {
        axios({
                url: '/sessions/' + localStorage.token,
                method: 'delete',
                baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.token
                }
            })
            .then(() => {
                delete localStorage.token
            }).catch((err) => {
                console.log(err);
            });
    },

    loggedIn() {
        return !!((typeof window !== "undefined") ? localStorage.token : undefined);
    },

    onChange() {}
};
