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
      userData: {},
      isEditing: false
    };
    this.fetchUserData();
    this.handleSendFormData = this.handleSendFormData.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handleCloseSnackBar = this.handleCloseSnackBar.bind(this);
    this.handleSendPasswordReset = this.handleSendPasswordReset.bind(this);
  }

  componentWillMount() {
    if (this.state.role !== 0) {
      this.context.router.push('/');
    }
  }

  fetchUserData() {
    auth.getUser()
    .then((response) => {
      console.log(response);
      this.setState({
        isLoading: false,
        userData: response.userData
      });
    })
    .catch((error) => {
      console.log(error);
      if (error.status >= 400 && error.status <= 500) {
        auth.logout();
        this.setState({ isLoading: true });
      }
      this.handleOpenSnackBar('An unknown error has occured while loading the network data.');
    });
  }

  handleFormReset() {
    /* Zero out data and set initial state back to the way it was */
    this.setState({
      isLoading: true,
      snackBarIsOpen: false,
      snackBarMessage: '',
      userData: {},
      isEditing: false
    });
  }

  submitDataToAPI(data) {
    auth.postUser(data)
      .then((response) => {
        this.setState({ isEditing: false });
        this.handleOpenSnackBar('Successfully updated your profile!');
      }).catch((error) => {
        this.handleOpenSnackBar(
          'An error occured while submitting data to the network.'
        );
      });
  }

  handleSendPasswordReset(params) {
    foodDrivrAPI.updatePassword(params)
      .then((response) => {
        this.handleOpenSnackBar('Successfully updated your password');
      }).catch((error) => {
        this.handleOpenSnackBar('Please check that your password is correct and try again.');
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
            isEditing={this.state.isEditing}
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
  handleCloseSnackBar: React.PropTypes.func,
  errors: React.PropTypes.array
};

UserProfilePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserProfilePage;
