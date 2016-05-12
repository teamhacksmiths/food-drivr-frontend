import React from 'react';
import DonorDashboard from '../../components/DonorDashboard/DonorDashboard';
import foodDrivrAPIHelpers from '../../utils/foodDrivrAPIHelpers';
import FullscreenLoading from '../../components/FullscreenLoading/FullscreenLoading';

const dummyDonor = {
  name: "Ryan Collins",
  email: 'admin@ryancollins.io',
  phone: '222-222-2222',
  avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAQyAAAAJDU3YWY4Nzk1LWQ0YzEtNGIyMy1iOWI3LTBmMTllMmI1Y2Q5NQ.jpg',
  password: 'password123',
  addresses: [
    {
      address: "123 Main St., Corolla NC, 27927",
      default: true
    },
    {
      address: '2121 Main St. Springfield, OH, 20202',
      default: false
    }
  ]
};

export default class DonorDashboardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      donor: dummyDonor
    }

  }

  componentWillMount() {
    foodDrivrAPIHelpers.getUserData().then(function(user){
      console.log("Got the user's data: ", user);
      this.setState({
        isLoading: false,
      })
    }.bind(this))
  }
  render() {
    return (
      this.state.isLoading ?
      <FullscreenLoading
        isLoading={this.state.isLoading}
       /> :
      <div>
        <DonorDashboard
          donor={this.state.donor}
        />
      </div>
    );
  }
}
