import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Headline } from '../components/reusable-components.jsx';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';
import auth from '../utils/auth.js';

class Registration extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.state.error = '';
        this.state.userData = {};
        this.state.authToken = '';
        this.state.user = {};
        this.state.name = '';
        this.state.email = '';
        this.state.password = '';
        this.state.passwordConfirmation = '';
        this._handleNameChange = this._handleNameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._handlePasswordConfirmChange = this._handlePasswordConfirmChange.bind(this);
        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._handleSubmitUser = this._handleSubmitUser.bind(this);
    }

    _handleNameChange(e) {
        this.state.errorName = "";

        if (!e.target.value) {
            this.state.errorName = "This field is required.";
        } else if (e.target.value < 3) {
            this.state.errorName = "Name needs more than 3 characters.";
        }
        this.setState({ errorName: this.state.errorName });
        this.setState({ name: e.target.value });
    }

    _validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    _handleEmailChange(e) {
        this.state.errorEmail = "";
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!e.target.value) {
            this.state.errorEmail = "This field is required.";
        } else if (!re.test(e.target.value)) {
            this.state.errorEmail = "Email is not valid.";
        }
        this.setState({ errorEmail: this.state.errorEmail });
        this.setState({ email: e.target.value });
    }

    _handlePasswordChange(e) {
        this.state.errorPassword = "";
        if (!e.target.value) {
            this.state.errorPassword = "This field is required.";
        } else if (e.target.value.length < 6) {
            this.state.errorPassword = "Passwords need more than 6 characters.";
        }
        this.setState({ errorPassword: this.state.errorPassword });
        this.setState({ password: e.target.value });
    }

    _handlePasswordConfirmChange(e) {
        this.state.errorPasswordConfirmation = "";
        if (!e.target.value) {
            this.state.errorPasswordConfirmation = "This field is required.";
        } else if (e.target.value.length < 6) {
            this.state.errorPasswordConfirmation = "Passwords need more than 6 characters.";
        } else if (e.target.value !== this.state.password) {
            this.state.errorPasswordConfirmation = "Passwords must match!";
        }
        this.setState({ errorPasswordConfirmation: this.state.errorPasswordConfirmation });
        this.setState({ passwordConfirmation: e.target.value });
    }

    _handleSubmitUser(e) {
    	const { name, email, password, passwordConfirmation } = this.state;
        e.preventDefault();
        if (this.state.errorName == '' &&
            this.state.errorPassword == '' &&
            this.state.errorEmail == '' &&
            this.state.errorPasswordConfirmation == '') {
            this.setState({ error: <CircularProgress /> });
            auth.register(name, email, password, passwordConfirmation)
            .then((response) => {
            	console.log("hello from register")
            	console.log(response.data);
            	auth.login(email, password)
            	.then((response) => {
	                console.log("hello from login");
	                localStorage.setItem('token', response.data.authtoken.auth_token);
	                auth.loggedIn()
	                .then(() => {if(false || null || undefined){
	                		return this.setState({ error: "Registration Failed" });
	                	}
	            	})
	            	.catch((err) => {
	                	console.log(err);
	            	});
	            })
	            .catch((err) => {
	                console.log(err)
	            });
	            })
            .catch((err) => {
            	console.log(err);
            });
            setTimeout(() => {
                this.context.router.push('/donation');
            }, 1000);

        } else {
            this.setState({ error: 'Can not send request.' })
        }
    }

    render() {
        return (
            <div className='container'>
                <Paper zDepth={1}>
                    <div>
                    <form style={this.state.style}>
                        <TextField
                            hintText="Enter Name"
                            errorText={this.state.errorName}
                            floatingLabelText="Name"
                            onChange={this._handleNameChange}
                            value={this.state.name}
                            />
                            <br/>
                        <TextField
                            hintText="Enter Email"
                            errorText={this.state.errorEmail}
                            floatingLabelText="Email"
                            onChange={this._handleEmailChange}
                            value={this.state.email}
                            />
                            <br/>
                        <TextField
                            hintText="6 or more characters."
                            errorText={this.state.errorPassword}
                            floatingLabelText="Password"
                            onChange={this._handlePasswordChange}
                            value={this.state.password}
                            type='password'
                            />
                            <br/>
                        <TextField
                            hintText="6 or more characters."
                            errorText={this.state.errorPasswordConfirmation}
                            floatingLabelText="Password Confirmation"
                            onChange={this._handlePasswordConfirmChange}
                            value={this.state.passwordConfirmation}
                            type='password'
                            />
                            <br/>
                    <RaisedButton
                        label="Sign Up"
                        secondary={true}
                        onClick={this._handleSubmitUser}
                        />
                        <br/>
                    <span className="text-lightgrey">
                        {this.state.error}
                    </span>
                    </form>
                    }
                }
                />
                </div>
            </Paper>
        </div>
        )
    }
}

Registration.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = Registration;
