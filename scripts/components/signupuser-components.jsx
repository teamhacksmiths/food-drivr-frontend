import React from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import { Headline } from './reusable-components.jsx';

function UserRegister(props) {
		return (
				<div className='container'>
					{ /*<Headline header={"Sign Up As A " + props.userType} /> */}
					<form onSubmit={props.onSubmitUser} style={props.style}>
						<div className="form-group">
							<input
								type="text"
								required
								placeholder="Name"
								id="signup-name"
								className="form-signup"
								onChange={props.onNameChange}
								value={props.name}
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								required
								placeholder="Email"
								id="signup-email"
								className="form-signup"
								onChange={props.onEmailChange}
								value={props.email}
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								required
								placeholder="Password"
								id="signup-password"
								className="form-signup"
								onChange={props.onPasswordChange}
								value={props.password}
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								required
								placeholder="Password Confirmation"
								id="signup-password"
								className="form-signup"
								onChange={props.onPasswordConfirmChange}
								value={props.passwordConfirmation}
							/>
						</div>
						<span className="text-center">
							<button
									className='btn-signup-register'
									type='submit'>
										SIGN UP
							</button>
						</span>
					</form>
				</div>
		);
}

UserRegister.propTypes = {
		onSubmitUser: PropTypes.func.isRequired,
		onNameChange: PropTypes.func.isRequired,
		onEmailChange: PropTypes.func.isRequired,
		onPasswordChange: PropTypes.func.isRequired,
		onPasswordConfirmChange: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		passwordConfirmation: PropTypes.string.isRequired,
}

module.exports = UserRegister;
