import React from 'react';
import AppStoreIcon from '../Reusable/AppStoreIcon.jsx';
import Arrow from './Arrow.jsx';
import Headline from '../Reusable/Headline.jsx';
import BodyButton from './BodyButton.jsx';
import DriverDescription from './DriverDescription.jsx';
import VolunteerDescription from './VolunteerDescription.jsx';

class SectionBecomeA extends React.Component {
  constructor() {
    super();
    this.state = {
      userType: 'Driver',
      description: ''
    };
    this.onSubmitDriver = this.onSubmitDriver.bind(this);
    this.onSubmitVolunteer = this.onSubmitVolunteer.bind(this);
  }

  onSubmitDriver() {
    this.setState({ userType: 'Driver' });
  }

  onSubmitVolunteer() {
    this.setState({ userType: 'Volunteer' });
  }

  render() {
    return (
      <section className="becomeA bg-grey-dark">
        <Arrow direction="Left" onClick={this.state.userType === 'Driver' ? this.onSubmitVolunteer : this.onSubmitDriver} />
        <section className="text-white">
          <Headline value={`Become a ${this.state.userType}`} className="title" />
            {this.state.userType === 'Driver' ?
              <DriverDescription /> :
              <VolunteerDescription />}
          <BodyButton />
        </section>
        <AppStoreIcon className="appstore" />
        <div className="app-sample" />
        <Arrow direction="Right" onClick={this.state.userType === 'Driver' ? this.onSubmitVolunteer : this.onSubmitDriver} />
      </section>
    );
  }
}

module.exports = SectionBecomeA;
