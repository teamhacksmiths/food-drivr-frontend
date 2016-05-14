import React from 'react';
import SettingsDashboard from '../../components/SettingsDashboard/SettingsDashboard';
import FullscreenLoading from '../../components/FullscreenLoading/FullscreenLoading';

const dummyUser = {
  name: "Ryan Collins",
  email: 'admin@ryancollins.io',
  phone: '222-222-2222',
  role_id: 0,
  avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAQyAAAAJDU3YWY4Nzk1LWQ0YzEtNGIyMy1iOWI3LTBmMTllMmI1Y2Q5NQ.jpg',
  password: 'password123',
  addresses: [
    {
      fullAddress: "123 Main St., Corolla NC, 27927",
      default: true
    },
    {
      fullAddress: '2121 Main St. Springfield, OH, 20202',
      default: false
    }
  ]
};

class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: dummyDonor
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubit(params) {

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
