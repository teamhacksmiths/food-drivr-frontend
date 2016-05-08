import React from 'react';
import { Link } from 'react-router';
import { Headline } from './reusable-components.jsx';
import Registration from '../containers/registration-container.jsx';

class SignUpPage extends React.Component {
    constructor(context) {
        super(context);
        this.state = {};
        this.state.userType = '';
        this.state.userState = false;
        this.state.class = 'btn-signup';
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
                            style: { background: '#f7b32b' }
        });
            this.context.router.push('/signup/donor');
        }

        onSubmitVolunteer() {
            this.setState({ userType: 'Volunteer',
                            userState: true,
                            class: 'invisible-btn',
                            style: { background: '#14cfe8' }
        });
            this.context.router.push('/signup/volunteer');
        }

        render() {
            return (
                <div className='signup-container text-center text-white' style={this.state.style}>
                <p>{this.state.userType + ' Sign Up'}</p>
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
}

SignUpPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = SignUpPage;
