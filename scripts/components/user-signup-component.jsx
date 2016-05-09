import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';

const UserSignup = props => (
	<div className='signup-container text-center'>
		<p>{props.userType} Sign Up</p>
		<form>
			<TextField
				hintText="Enter Name"
				errorText={props.errorName}
				floatingLabelText="Name"
				onChange={props.onNameChange}
				onKeyUp={props.onSubmitUser}
				style={{width: '80%', maxWidth: 350}}
				errorStyle={{color: 'white'}}
				value={props.name}
				/>
				<br/>
			<TextField
				hintText="Enter Email"
				errorText={props.errorEmail}
				floatingLabelText="Email"
				onChange={props.onEmailChange}
				onKeyUp={props.onSubmitUser}
				style={{width: '80%', maxWidth: 350}}
				errorStyle={{color: 'white'}}
				value={props.email}
				/>
				<br/>
			<TextField
				hintText="8 or more characters."
				errorText={props.errorPassword}
				floatingLabelText="Password"
				onChange={props.onPasswordChange}
				onKeyUp={props.onSubmitUser}
				style={{width: '80%', maxWidth: 350}}
				errorStyle={{color: 'white'}}
				value={props.password}
				type='password'
				/>
				<br/>
			<TextField
				hintText="8 or more characters."
				errorText={props.errorPasswordConfirmation}
				floatingLabelText="Password Confirmation"
				onChange={props.onPasswordConfirmChange}
				onKeyUp={props.onSubmitUser}
				style={{width: '80%', maxWidth: 350}}
				errorStyle={{color: 'white'}}
				value={props.passwordConfirmation}
				type='password'
				/>
				<br/>
			<RaisedButton
				label="Sign Up"
				secondary={true}
				onClick={props.onSubmitUser}
				style={{marginTop: 100, minWidth: 250}}
				backgroundColor={props.userType === 'Volunteer' ? 'rgb(247, 179, 43)' : ''}
				/>
				<br/>
			<span className="text-lightgrey">
				{props.error}
			</span>
		</form>
	</div>
)

export default UserSignup;
