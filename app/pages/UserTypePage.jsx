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
      <section className="signup text-center text-white">
        <h1 className="uppercase">Sign Up</h1>
        <UserTypeButton
          onSubmit={this.handleSubmitDonor}
          imgSrc="images/donor-icon.svg"
          imgAlt="donor package"
          title="Donor"
        />
        <p className="or flex-grow-1">OR</p>
        <UserTypeButton
          onSubmit={this.handleSubmitVolunteer}
          imgSrc="images/volunteer-icon.svg"
          imgAlt="volounteer package"
          title="Volunteer"
        />
      </section>
    );
  }
}

UserTypePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = UserTypePage;
