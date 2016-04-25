import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import { Headline } from '../components/reusable-components.jsx';
import UserRegister from '../components/signupuser-components.jsx';

var Registration = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            userData: {},
            authToken: '',
            user: {},
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
    },
    handleSubmitUser: function(e) {
        console.log(this);
        e.preventDefault();
        var name = this.state.name;
        var email = this.state.email;
        var password = this.state.password;
        var passwordConfirmation = this.state.passwordConfirmation;
        var user = {
            'user': {
                'name': name,
                'email': email,
                'password': password,
                'password_confirmation': passwordConfirmation
            }
        };
        var userData = this.state.userData;
        this.sessionData = {
            'session': {
                'email': email,
                'password': password
            }
        };
        var authToken = this.state.authToken; {
            /*        if (data.password !== data.password_confirmation) {
                      // log error to screen that passwords must be the same
                    }
                    else
                    {

                    }
                    */
        }
        if (user !== null || user !== undefined) {
            this.createUser(user);
        }
    },
    handleNameChange: function(e) {
        this.setState({
            name: e.target.value
        });
    },
    handleEmailChange: function(e) {
        this.setState({
            email: e.target.value
        });
    },
    handlePasswordChange: function(e) {
        this.setState({
            password: e.target.value
        });
    },
    handlePasswordConfirmChange: function(e) {
        this.setState({
            passwordConfirmation: e.target.value
        });
    },
    createUser: function(user) {
        $.ajax({
            url: 'https://wastenotfoodtaxi.herokuapp.com/api/v1/users',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(user),
            processData: false,
            cache: false,
            contentType: 'application/json; charset=UTF-8',
            success: function(data) {
                this.setState({ userData: data });
                this.createSession(this.sessionData);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this),
        })
    },
    createSession: function(sessionData) {
        $.ajax({
            url: 'https://wastenotfoodtaxi.herokuapp.com/api/v1/sessions',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(sessionData),
            processData: false,
            cache: false,
            contentType: 'application/json; charset=UTF-8',
            success: function(data) {
                if (data !== null || data !== undefined || data !== {}) {
                    this.context.router.push({
                        pathname: '/donation',
                        state: {
                            authToken: this.state.authToken,
                            user: this.state.user
                        }
                    });
                    this.setState({authToken: data});
                    console.log(this.state.authToken);
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this),
        })
    },
    render: function() {
        return (
            <UserRegister
                userType={this.props.userType}
                onSubmitUser={this.handleSubmitUser}
                onNameChange={this.handleNameChange}
                onEmailChange={this.handleEmailChange}
                onPasswordChange={this.handlePasswordChange}
                onPasswordConfirmChange={this.handlePasswordConfirmChange}
                name={this.state.name}
                email={this.state.email}
                password={this.state.password}
                passwordConfirmation={this.state.passwordConfirmation}
            />
        );
    }
});

module.exports = Registration;