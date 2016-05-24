import React from 'react';
import Headline from '../components/Reusable/Headline.jsx';
import AppStoreIcon from '../components/Reusable/AppStoreIcon.jsx';
import WhiteTruckButton from '../components/Reusable/WhiteTruckButton.jsx';
import VolunteerThankYou from '../components/ThankYouPage/VolunteerThankYou.jsx';
import DonorThankYou from '../components/ThankYouPage/DonorThankYou.jsx';
import DonateButton from '../components/ThankYouPage/DonateButton.jsx';
import auth from '../utils/auth.js';

class ThankYouPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      role: parseInt(localStorage.getItem('role'), 10)
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    console.log('Hello from Thank You!');
    console.log(`Current role is ${this.state.role}`);
    if (this.state.role !== 1) {
      this.context.router.push('/thankyou?userType=donor');
    } else if (this.state.role !== 0) {
      this.context.router.push('/thankyou?userType=volunteer');
    } else {
      console.log('No Role?');
      this.context.router.push('/');
    }
  }
  handleClick() {
    if (this.state.role !== 1) {
      auth.login(localStorage.getItem('email'), localStorage.getItem('password'))
        .then((response) => {
          console.log('hello from login');
          console.log(response);
          localStorage.setItem('token', response.data.authtoken.auth_token);
          return auth.getUser();
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.user.role_id);
          localStorage.setItem('role', response.data.user.role_id);
          localStorage.setItem('name', response.data.user.name);
          if (auth.loggedIn()) {
            this.context.router.push('/donation');
            auth.onChange(true);
          }
        })
        .catch((err) => {
          console.log(err);
          this.context.router.push('/');
        });
    } else {
      this.context.router.push('/');
    }
  }
  render() {
    return (
        <section className="thankyou text-center text-white">
          <WhiteTruckButton />
          <Headline value="Thank You!" />
          {this.state.role !== 0 ? <VolunteerThankYou /> : <DonorThankYou />}
          {this.state.role ? '' : <DonateButton onClick={this.handleClick} />}
          {this.state.role !==1 ? '' : <AppStoreIcon />}
        </section>
    );
  }
}

ThankYouPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = ThankYouPage;
