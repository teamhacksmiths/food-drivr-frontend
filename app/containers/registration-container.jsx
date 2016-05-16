import React from 'react';
import UserSignup from '../components/user-signup-component.jsx';
import auth from '../utils/auth.js';
import CircularProgress from 'material-ui/CircularProgress';

class Registration extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			error: '',
			userData: {},
			authToken: '',
			user: {},
			name: '',
			email: '',
			password: '',
			passwordConfirmation: ''
		};
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
		this.setState({
			errorName: this.state.errorName,
			name: e.target.value
		});
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
		this.setState({
			errorEmail: this.state.errorEmail,
			email: e.target.value
		});
	}

	_handlePasswordChange(e) {
		this.state.errorPassword = "";
		if (!e.target.value) {
			this.state.errorPassword = "This field is required.";
		} else if (e.target.value.length < 8) {
			this.state.errorPassword = "Passwords need more than 8 characters.";
		}
		this.setState({
			errorPassword: this.state.errorPassword,
			password: e.target.value
		});
	}

	_handlePasswordConfirmChange(e) {
		this.state.errorPasswordConfirmation = "";
		if (!e.target.value) {
			this.state.errorPasswordConfirmation = "This field is required.";
		} else if (e.target.value.length < 8) {
			this.state.errorPasswordConfirmation = "Passwords need more than 8 characters.";
		} else if (e.target.value !== this.state.password) {
			this.state.errorPasswordConfirmation = "Passwords must match!";
		}
		this.setState({
			errorPasswordConfirmation: this.state.errorPasswordConfirmation,
			passwordConfirmation: e.target.value
		});
	}

	_handleSubmitUser(e) {
		if (e.keyCode === 13 || e.button === 0) {
			console.log(this.props.route.header);
			const { name, email, password, passwordConfirmation } = this.state;
			const userRole = this.props.route.header === 'Donor' ? 0 : 1;
			e.preventDefault();
			if (this.state.errorName == '' &&
				this.state.errorPassword == '' &&
				this.state.errorEmail == '' &&
				this.state.errorPasswordConfirmation == '') {
				this.setState({ error: <CircularProgress /> });
				auth.register(name, email, password, passwordConfirmation, userRole)
				.then((response) => {
					console.log("hello from register")
					console.log(response.data);
					console.log(response.status);
					localStorage.setItem('email', email);
					localStorage.setItem('password', password);
					const role = localStorage.setItem('role', userRole);
					if (parseInt(role, 10) !== 1) {
						this.context.router.push('/thankyou');
					}
				})
				.catch((err) => {
					console.log(err);
					this.setState({ error: 'Registration Failed' });
				});
			} else {
				this.setState({ error: 'Can not send request.' })
			}
		}
	}

	render() {
		const {
			style,
			name,
			errorName,
			email,
			errorEmail,
			password,
			errorPassword,
			passwordConfirmation,
			errorPasswordConfirmation,
			error
		 } = this.state;
		return (
			<UserSignup
				onNameChange={this._handleNameChange}
				onValidateEmail={this._validateEmail}
				onEmailChange={this._handleEmailChange}
				onPasswordChange={this._handlePasswordChange}
				onPasswordConfirmChange={this._handlePasswordConfirmChange}
				onSubmitUser={this._handleSubmitUser}
				userType={this.props.route.header}
				name={name}
				email={email}
				password={password}
				passwordConfirmation={passwordConfirmation}
				errorName={errorName}
				errorEmail={errorEmail}
				errorPassword={errorPassword}
				errorPasswordConfirmation={errorPasswordConfirmation}
				error={error}
				/>
		)
	}
}

Registration.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = Registration;
