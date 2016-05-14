import React from 'react';
import SettingsDashboard from '../../components/SettingsDashboard/SettingsDashboard';
import FullscreenLoading from '../../components/FullscreenLoading/FullscreenLoading';
import auth from '../../utils/auth.js';


const dummyUser = {
  name: "Ryan Collins",
  email: 'admin@ryancollins.io',
  phone: '222-222-2222',
  role_id: 0,
  avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAQyAAAAJDU3YWY4Nzk1LWQ0YzEtNGIyMy1iOWI3LTBmMTllMmI1Y2Q5NQ.jpg',
  password: 'password123',
  addresses: [
    {
      key: 1,
      fullAddress: "123 Main St., Corolla NC, 27927",
      default: true
    },
    {
      key: 2,
      fullAddress: '2121 Main St. Springfield, OH, 20202',
      default: false
    }
  ]
};

class UserProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
        role: parseInt(localStorage.getItem('role'), 10),
        loggedIn: auth.loggedIn(),
        isLoading: true,
        user: dummyUser
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(params) {

  }
  render() {
    return(
      this.state.isLoading ?
      <FullscreenLoading
        isLoading={this.state.isLoading}
       /> :
      <div>
        <SettingsDashboard
          user={this.state.user}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

UserProfilePage.propTypes = {
  errors: React.PropTypes.array,
  user: React.PropTypes.object.isRequired
}

export default UserProfilePage;
