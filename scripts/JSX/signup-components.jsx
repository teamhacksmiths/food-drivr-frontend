import { Headline } from './reusable-components.jsx';
import React from 'react';
import { Link } from 'react-router';

var SignUpPage = React.createClass({
    render: function() {
        return (
            <div className="signup">
				{this.props.children || <SignUpContainer />}
			</div>

        );
    }
});

var SignUpContainer = React.createClass({
    render: function() {
        return (
            <div className='container'>
				<Headline value="Sign Up As:" />
				<SignUpButton />
			</div>
        );
    }
});

var SignUpButton = React.createClass({
    render: function() {
        return (
            <div>
			<Link to="/signup/donor" role="button" className='btn btn-info'>Donor</Link>
			<Link to="/signup/volunteer" role="button" className='btn btn-info'>Volunteer</Link>
			</div>
        );
    }
});

module.exports = SignUpPage;
