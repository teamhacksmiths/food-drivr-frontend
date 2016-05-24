import React from 'react';
import UserProfile from '../components/UserProfilePage/UserProfile';
import FullscreenLoading from '../components/Reusable/FullscreenLoading';
import auth from '../utils/auth.js';
import Snackbar from 'material-ui/Snackbar';

class UserProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      role: parseInt(localStorage.getItem('role'), 10),
      isLoading: true,
      snackBarIsOpen: false,
      snackBarMessage: '',
      userData: {}
    };
    this.handleSendFormData = this.handleSendFormData.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handleCloseSnackBar = this.handleCloseSnackBar.bind(this);
  }

  fetchUserData() {
    auth.getUser()
      .then((userData) => {
        console.log(userData);
        this.setState({
          isLoading: false,
          userData
        });
      })
    .catch((error) => {
      console.log(error);
      this.setState({
        isLoading: false,
      });
      this.handleOpenSnackBar('Received a failure response from the server');
    });
  }
  handleParseUserFromData(data) {
  }

  handleFormReset() {
    this.setState({
      userData: foodDrivrAPI.getDummyUser()
    });
  }

  submitDataToAPI(data) {
    foodDrivrAPI.postUserDataToAPI(data).then((response) => {
      console.log(response);
      this.setState({
        snackBarIsOpen: true,
        snackBarMessage: 'Successfully updated Profile Data'
      });
    }).catch((error) => {
      console.log(error);
      this.setState({
        snackBarIsOpen: true,
        snackBarMessage: 'An error occured while communicating with the network.  Please try again.'
      });
    });
  }

  handleSendFormData(params) {
    const updateUserData = {
      email: params.email,
      password: params.password,
      company: params.company,
      phone: params.phone,
      setting_attributes: {
        notifications: params.notifications
      }
    };
    this.submitDataToAPI(updateUserData);
  }

  handleOpenSnackBar(message) {
    this.setState({
      snackBarIsOpen: true,
      snackBarMessage: message
    });
  }

  handleCloseSnackBar() {
    this.setState({
      snackBarIsOpen: false,
      snackBarMessage: ''
    });
  }

  render() {
    const { handleCloseSnackBar } = this.props;
    return (
      this.state.isLoading ? <FullscreenLoading isLoading={this.state.isLoading} /> :
      <div>
        <UserProfile
          userData={this.state.userData}
          handleSendFormData={this.handleSendFormData}
          handleFormReset={this.handleFormReset}
        />
        <Snackbar
          open={this.state.snackBarIsOpen}
          action="Close"
          message={this.state.snackBarMessage}
          autoHideDuration={3000}
          onActionTouchTap={this.handleCloseSnackBar}
          onRequestClose={this.handleCloseSnackBar}
        />
      </div>
    );
  }
}

UserProfilePage.propTypes = {
  errors: React.PropTypes.array
};

export default UserProfilePage;