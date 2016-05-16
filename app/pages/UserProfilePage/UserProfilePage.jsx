import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import FullscreenLoading from '../../components/FullscreenLoading/FullscreenLoading';
import foodDrivrAPI from '../../utils/foodDrivrAPI.js';
import Snackbar from 'material-ui/Snackbar';

class UserProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      role: parseInt(localStorage.getItem('role'), 10),
      isLoading: true,
      snackBarIsOpen: false,
      snackBarMessage: ''
    };
    this.fetchUserData();
    this.handleSendFormData = this.handleSendFormData.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handleCloseSnackBar = this.handleCloseSnackBar.bind(this);
    this.handleSendPasswordReset = this.handleSendPasswordReset.bind(this);
  }

  fetchUserData() {
    foodDrivrAPI.getUserData().then((response) => {
      this.setState({
        isLoading: false,
        userData: response.userData
      });
    }).catch((error) => {
      this.setState({ loading: false })
      handleOpenSnackBar("An unknown error occured while loading the network data.")
    });
  }

  handleFormReset() {
    this.setState({
      userData: foodDrivrAPI.getDummyUser()
    });
  }

  submitDataToAPI(data) {
    foodDrivrAPI.postUserDataToAPI(data).then((response) => {
      console.log(response);
      this.handleOpenSnackBar('Successfully updated your profile!');
    }).catch((error) => {
      this.handleOpenSnackBar(
        'An error occured while submitting data to the network. Error Code: ', error
      );
    });
  }

  handleSendPasswordReset(params){
    foodDrivrAPI.updatePassword(params).then((response) => {
      this.handleOpenSnackBar("Successfully updated your password");
    }).catch((error) => {
      this.handleOpenSnackBar("Please check that your password is correct and try again.")
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
    const {
      handleCloseSnackBar
    } = this.props;
    return (
      this.state.isLoading ? <FullscreenLoading isLoading={this.state.isLoading} /> :
        <div>
          <UserProfile
            userData={this.state.userData}
            handleSendFormData={this.handleSendFormData}
            handleFormReset={this.handleFormReset}
            handleSendPasswordReset={this.handleSendPasswordReset}
          />
          <Snackbar
            open={this.state.snackBarIsOpen}
            action="Close"
            message={this.state.snackBarMessage}
            autoHideDuration={3000}
            onActionTouchTap={handleCloseSnackBar}
            onRequestClose={handleCloseSnackBar}
          />
        </div>
    );
  }
}

UserProfilePage.propTypes = {
  errors: React.PropTypes.array,
  handleCloseSnackBar: React.PropTypes.func
};

export default UserProfilePage;
