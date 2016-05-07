import React from 'react';
import { Link } from 'react-router';
import { Headline } from '../components/reusable-components.jsx';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';

class UserSignup extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'UserSignup';
	}
	render() {
		return (
			<div className='signup-container text-center'>
				<p>{this.props.userType} Sign Up</p>
				<form>
					<TextField
						hintText="Enter Name"
						errorText={this.props.errorName}
						floatingLabelText="Name"
						onChange={this.props.onNameChange}
						style={{width: '80%', maxWidth: 350}}
						errorStyle={{color: 'white'}}
						value={this.props.name}
						/>
						<br/>
					<TextField
						hintText="Enter Email"
						errorText={this.props.errorEmail}
						floatingLabelText="Email"
						onChange={this.props.onEmailChange}
						style={{width: '80%', maxWidth: 350}}
						errorStyle={{color: 'white'}}
						value={this.props.email}
						/>
						<br/>
					<TextField
						hintText="8 or more characters."
						errorText={this.props.errorPassword}
						floatingLabelText="Password"
						onChange={this.props.onPasswordChange}
						style={{width: '80%', maxWidth: 350}}
						errorStyle={{color: 'white'}}
						value={this.props.password}
						type='password'
						/>
						<br/>
					<TextField
						hintText="8 or more characters."
						errorText={this.props.errorPasswordConfirmation}
						floatingLabelText="Password Confirmation"
						onChange={this.props.onPasswordConfirmChange}
						style={{width: '80%', maxWidth: 350}}
						errorStyle={{color: 'white'}}
						value={this.props.passwordConfirmation}
						type='password'
						/>
						<br/>
					<RaisedButton
						label="Sign Up"
						secondary={true}
						onClick={this.props.onSubmitUser}
						style={{marginTop: 100, minWidth: 250}}
						/>
						<br/>
					<span className="text-lightgrey">
						{this.props.error}
					</span>
				</form>
			</div>
		);
	}
}

export default UserSignup;
