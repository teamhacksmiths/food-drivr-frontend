import React from 'react';
import {Link} from 'react-router';
import {Headline} from './reusable-components.jsx';

var SignInPage = React.createClass({
    render: function(){
        return (
			<div className="signin text-center text-white">
  				<Headline value="Sign In" />
				<SignInForm />
			</div>
			);
	}
});

var SignInForm = React.createClass({
    getInitialState: function(){
        return {
            user: '',
               password: '',
        }
    },
    render: function(){
        return (
            <form action="">
                <div className="form-group">
                    <input type="email" placeholder="Email" id="signup-email" className="form-signup"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" id="signup-password" className="form-signup"/>
                </div>
                <SignInButton />
            </form>
        );
    }
});

var SignInButton = React.createClass({
    render: function(){
        return (
                <Link to="/donation" role="button">
                    <div className='btn-signup-register'>ENTER</div>
                </Link>
            );
    }
});

module.exports = SignInPage;