import React from 'react';
import DonorDashboard from '../../components/DonorDashboard/DonorDashboard';

const donor = {
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
    this.donor = donor;
  }
  render() {
    return (
      <div>
        <DonorDashboard
          donor={this.donor}
        />
      </div>
    );
  }
}
