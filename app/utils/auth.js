import axios from 'axios';

/*
 * axios always returns a promise
 */

module.exports = {
  login(email, pass) {
    console.log(JSON.stringify({ session: { email, password: pass } }));
    const token = (typeof window !== 'undefined') ? localStorage.getItem('token') : undefined;

    if (token) return this.onChange(true);

    return axios({
      url: '/sessions',
      method: 'post',
      baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
      transformRequest: [(data) =>
    // Do whatever you want to transform the data
        JSON.stringify(data)
      ],
      data: { session: { email, password: pass } },
      responseType: 'json',
      headers: { 'Content-Type': 'application/json' },
    });
  },

  register(name, email, pass, passconf, role) {
    // ensure callback is always last argument
    // create new session, pass in email and password as object
    console.log(JSON.stringify({ user: { name, email, password: pass, password_confirmation: pass, role_id: role } }));
    return axios({
      url: '/users',
      method: 'post',
      baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
      transformRequest: [(data) =>
    // Do whatever you want to transform the data
        JSON.stringify(data)
            ],
      data: {
        user: {
          name,
          email,
          password: pass,
          password_confirmation: passconf,
          role_id: role
        }
      },
      responseType: 'json',
      headers: { 'Content-Type': 'application/json' }
    });
  },

/* Simple shortcut for getting the token, because typing localStorage takes too darn long
 * @params none
 * @return String || undefined - Token from local storage or undefined
 */
  getToken() {
    return (typeof window !== 'undefined') ? localStorage.getItem('token') : undefined;
  },

    // send a DELETE request with the auth_token as a URL parameter
  logout() {
    return axios({
      url: `/sessions/${localStorage.getItem('token')}`,
      method: 'delete',
      baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    });
  },

  getUser() {
    return axios({
      url: `/users/${localStorage.getItem('token')}`,
      method: 'get',
      baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    });
  },

  postUser() {
    return axios({
      url: '/donor/donations',
      method: 'patch',
      baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
      transformRequest: [(data) =>
    // Do whatever you want to transform the data
        JSON.stringify(data)
      ],
      data: {
        donation: {
          items
        }
      },
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    });
  },

  loggedIn() {
    return !!((typeof window !== 'undefined') ? localStorage.getItem('token') : undefined);
  },

  getDonation() {
    return axios({
      url: '/donor/donations/',
      method: 'get',
      baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    });
  },

  postDonation(items) {
    console.log(JSON.stringify({
      donation: {
        items
      }
    }));

    return axios({
      url: '/donor/donations',
      method: 'post',
      baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
      transformRequest: [(data) =>
    // Do whatever you want to transform the data
        JSON.stringify(data)
      ],
      data: {
        donation: {
          items
        }
      },
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    });
  },

  onChange() {}
};
