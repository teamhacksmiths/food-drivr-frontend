import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Headline } from './reusable-components.jsx';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import auth from '../utils/auth.js';

class SignInPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            error: "",
            email: "",
            password: ""
        };
        this.history = props.history;
        this.showSessionMsg = props.location.query ? props.location.query.session : true;
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._formSubmit = this._formSubmit.bind(this);
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
        this.setState({ errorEmail: this.state.errorEmail,
                        email: e.target.value });
    }

    _handlePasswordChange(e) {
        this.state.errorPassword = "";
        if (!e.target.value) {
            this.state.errorPassword = "This field is required.";
        } else if (e.target.value.length < 8) {
            this.state.errorPassword = "Password needs more than 8 characters.";
        }
        this.setState({ errorPassword: this.state.errorPassword,
                        password: e.target.value });
    }

    _formSubmit(e) {
        if(e.keyCode === 13 || e.button === 0){
            const { errorPassword, errorEmail, email, password } = this.state;
            e.preventDefault();
            if (errorPassword == '' && errorEmail == '') {
                this.setState({ error: <CircularProgress /> });
                auth.login(email, password)
                    .then((response) => {
                        console.log("hello from login");
                        console.log(response);
                        localStorage.setItem('token', response.data.authtoken.auth_token);
                        return auth.getUser();
                    })
                    .then((response) => {
                        console.log(response);
                        console.log(response.data.user.role_id);
                        localStorage.setItem('role', response.data.user.role_id);
                        var role = response.data.user.role_id;
                        if (auth.loggedIn() && role != 1) {
                            this.context.router.push('/donation');
                            auth.onChange(true);
                        } else {
                            this.context.router.push('/thankyou');
                            auth.onChange(true);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        this.setState({ error: 'Login Failed' });
                    });
            } else {
                this.setState({ error: 'Can not send request.' });
            }
        }
    }

    render() {
        const { errorPassword, errorEmail, email, password, error } = this.state;
        return (
            <div className="signin text-center text-white">
                <Headline value="Sign In" />
                <form>
                    <TextField
                        hintText="Enter Email"
                        errorText={errorEmail}
                        floatingLabelText="Email"
                        onChange={this._handleEmailChange}
                        onKeyUp={this._formSubmit}
                        style={{width: '80%', maxWidth: 350}}
                        errorStyle={{color: 'white'}}
                        value={email}
                        />
                    <br/>
                    <TextField
                        hintText="Enter Password"
                        errorText={errorPassword}
                        floatingLabelText="Password"
                        onChange={this._handlePasswordChange}
                        onKeyUp={this._formSubmit}
                        style={{width: '80%', maxWidth: 350}}
                        errorStyle={{color: 'white'}}
                        value={password}
                        type="password"
                        />
                    <br/>
                    <RaisedButton
                        label="Sign In"
                        secondary={true}
                        onClick={this._formSubmit}
                        style={{marginTop: 100, minWidth: 250}}
                        />
                        <br/>
                    <span>
                        {error}
                    </span>
                </form>
            </div>
        )
    }
}

SignInPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = SignInPage;
