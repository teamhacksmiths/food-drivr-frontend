import React from 'react';
import { Headline } from './reusable-components.jsx';
import Registration from '../containers/registration-container.jsx';

class SignUpPage extends React.Component {
    constructor(context) {
        super(context);
        this.state = {};
        this.state.userType = '';
        this.state.userState = false;
        this.state.class = 'btn-signup';
        this.state.signupType = '';
        this.state.style = {
            background: '#ff1e40'
        };
        this.onSubmitDonor = this.onSubmitDonor.bind(this);
        this.onSubmitVolunteer = this.onSubmitVolunteer.bind(this);
    }

        onSubmitDonor() {
            this.setState({ userType: 'Donor',
                            userState: true,
                            class: 'invisible-btn',
                            signupType: 'Donor ',
                            signupType: 'Donor ',
                            style: { background: '#f7b32b' }
        })
        }

        onSubmitVolunteer() {
            this.setState({ userType: 'Volunteer',
                            userState: true,
                            class: 'invisible-btn',
                            signupType: 'Volunteer ',
                            style: { background: '#14cfe8' }
        })
        }

        render() {
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
                    <Registration style={this.state.style}/> : null
                }
          </div>
            );
        }
}

module.exports = SignUpPage;
