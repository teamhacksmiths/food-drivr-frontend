import axios from 'axios';

var createUser = (user, cb) => {
    'use strict';
    cb = arguments[arguments.length - 1];
    axios.post({
            url: '/users',
            method: 'post',
            baseURL: 'https://wastenotfoodtaxi.herokuapp.com/api/v1',
            data: JSON.stringify(user),
            responseType: 'json',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            cb(response);
        })
        .catch(function(xhr, status, err) {
            console.error(status, err.toString());
        });
};

module.exports = createUser;