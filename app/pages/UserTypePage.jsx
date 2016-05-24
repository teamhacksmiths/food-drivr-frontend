import React from 'react';
import UserTypeButton from '../components/UserTypePage/UserTypeButton.jsx';

class UserTypePage extends React.Component {
  constructor(context) {
    super(context);
    this.handleSubmitDonor = this.handleSubmitDonor.bind(this);
    this.handleSubmitVolunteer = this.handleSubmitVolunteer.bind(this);
  }

  handleSubmitDonor() {
    this.context.router.push('/signup/donor');
  }

  handleSubmitVolunteer() {
    this.context.router.push('/signup/volunteer');
  }

  render() {
    return (
      <div className="signup-container text-center text-white" style={{ background: '#ff1e40' }}>
        <p>Sign Up</p>
        <UserTypeButton
          onSubmit={this.handleSubmitDonor}
          imageSrc="images/donor-icon.svg"
          imgAlt="donor package"
          title="Donor"
        />
        <p className="btn-signup">OR</p>
        <UserTypeButton
          onSubmit={this.handleSubmitVolunteer}
          imageSrc="images/volunteer-icon.svg"
          imgAlt="volounteer package"
          title="Volunteer"
        />
      </div>
    );
  }
}

UserTypePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = UserTypePage;
