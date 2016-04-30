import React from 'react';
import { Link } from 'react-router';
import { Headline } from './reusable-components.jsx';
import Registration from '../containers/registration-container.jsx';

var SignUpPage = React.createClass({
    getInitialState: function() {
        return {
            userType: '',
            userState: false,
            class: 'btn-signup',
            signupType: '',
            style: {
                background: '#ff1e40'
            }
        };
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    onSubmitDonor: function() {
        this.setState({ userType: 'Donor' });
        this.setState({ userState: true });
        this.setState({ class: 'invisible-btn' });
        this.setState({ signupType: 'Donor '});
        this.setState({ style: {background: '#f7b32b'}});
    },
    onSubmitVolunteer: function() {
        this.setState({ userType: 'Volunteer' });
        this.setState({ userState: true });
        this.setState({ class: 'invisible-btn' });
        this.setState({ signupType: 'Volunteer '});
        this.setState({ style: {background: '#14cfe8'}});
    },
    render: function() {
        return (
            <div className='signup-container text-center text-white' style={this.state.style}>
                <p>{this.state.signupType + 'Sign Up'}</p>
                <div onClick={this.onSubmitDonor} className='pointer-cursor' className={this.state.class}>
                    <img src='images/donor-icon.svg' alt='donor package'/>
                    <button
                        className='btn-signup'
                        type='submit'
                        >
                          Donor
                    </button>
                </div>
                <p className={this.state.class}>OR</p>
                <div onClick={this.onSubmitVolunteer} className='pointer-cursor' className={this.state.class}>
                    <img src='images/volunteer-icon.svg' alt='volounteer truck'/>
                    <button
                        className='btn-signup'
                        type='submit'
                        >
                          Volunteer
                    </button>
                </div>
                {this.state.userState ?
                    <Registration userType={this.state.userType} style={this.state.style}/> : null
                }
          </div>
        );
    }
});

module.exports = SignUpPage;
