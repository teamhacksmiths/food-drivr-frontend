import React from 'react';
import { Link } from 'react-router';
import { Headline } from './reusable-components.jsx';
import Registration from '../containers/registration-container.jsx';

var SignUpPage = React.createClass({
    getInitialState: function() {
        return {
            userType: '',
            userState: false,
            class: 'btn btn-info'
        };
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    onSubmitDonor: function() {
        this.setState({ userType: "Donor" });
        this.setState({ userState: true });
        this.setState({ class: 'invisible-btn' });
    },
    onSubmitVolunteer: function() {
        this.setState({ userType: "Volunteer" });
        this.setState({ userState: true });
        this.setState({ class: 'invisible-btn' });
    },
    render: function() {
        return (
            <div className='container'>
        <Headline header="Sign Up As:" />
            <button
                className={this.state.class}
                type='submit'
                onClick={this.onSubmitDonor}
                >
                  Donor
            </button>
            <button
                className={this.state.class}
                type='submit'
                onClick={this.onSubmitVolunteer}
                >
                  Volunteer
            </button>
            {this.state.userState ?
                <Registration userFunction={this.state.userType} /> : null
            }
      </div>
        );
    }
});

module.exports = SignUpPage;
