import React from 'react';
import { Link } from 'react-router';
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
                style={this.props.style}
            />
        );
    }
});

module.exports = Registration;