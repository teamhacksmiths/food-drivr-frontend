import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Headline from '../Reusable/Headline.jsx';

const SignInUser = ({ email, password, error, errorEmail, errorPassword, onEmailChange, onPasswordChange, onFormSubmit }) => (
    <div className="signin text-center text-white">
        <Headline value="Sign In" />
            <form>
                <TextField
                    hintText="Enter Email"
                    errorText={errorEmail}
                    floatingLabelText="Email"
                    onChange={onEmailChange}
                    onKeyUp={onFormSubmit}
                    style={{ width: '80%', maxWidth: 350 }}
                    errorStyle={{ color: 'white' }}
                    value={email}
                />
                <br />
                <TextField
                    hintText="Enter Password"
                    errorText={errorPassword}
                    floatingLabelText="Password"
                    onChange={onPasswordChange}
                    onKeyUp={onFormSubmit}
                    style={{ width: '80%', maxWidth: 350 }}
                    errorStyle={{ color: 'white' }}
                    value={password}
                    type="password"
                />
                <br />
                <RaisedButton
                    label="Sign In"
                    secondary
                    onClick={onFormSubmit}
                    style={{ marginTop: 100, minWidth: 250 }}
                />
                <br />
                <span>
                    {error}
                </span>
            </form>
    </div>
);

SignInUser.propTypes = {
	email: React.PropTypes.string.isRequired,
	password: React.PropTypes.string.isRequired,
	error: React.PropTypes.string.isRequired,
	errorEmail: React.PropTypes.string.isRequired,
	errorPassword: React.PropTypes.string.isRequired,
	onEmailChange: React.PropTypes.func.isRequired,
	onPasswordChange: React.PropTypes.func.isRequired,
	onFormSubmit: React.PropTypes.func.isRequired
};

module.exports = SignInUser;
