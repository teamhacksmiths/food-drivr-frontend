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
      // create new session, pass in email and password as object
      axios.post({
            url: '/sessions',
            method: 'post',
            baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
            data: {email: email, password: pass},
            responseType: 'json',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((data) => {
          localStorage.token = Math.random().toString(36).substring(7);
          if (cb) cb(true)
          this.onChange(true)
        })
        .catch((err) => {
          if (cb) cb(false)
          this.onChange(false)
        });
    },

    register(name, email, pass, passconf, cb) {
    // ensure callback is always last argument
      cb = arguments[arguments.length - 1];
      // create new session, pass in email and password as object
      axios.post({
            url: '/users',
            method: 'post',
            baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
            data: { 'name': name,
                    'email': email,
                    'password': pass,
                    'password_confirmation': passconf
                  },
            responseType: 'json',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
          if (cb) cb(false)
          this.onChange(false)
        });
    },

    getToken() {
      return (typeof window !== "undefined") ? localStorage.token : undefined;
    },

    // send a DELETE request with the auth_token as a URL parameter
    logout(cb) {
      axios.delete('https://wastenotfoodtaxi.herokuapp.com/api/v1/sessions/' + {authToken: auth_token})
        .then((g) => {
          delete localStorage.token
          if (cb) cb()
          this.onChange(false)
        }).catch((err) => {
          console.log(err);
        });
    },

    loggedIn() {
      return !!((typeof window !== "undefined") ? localStorage.token : undefined);
    },

    onChange() {}
};