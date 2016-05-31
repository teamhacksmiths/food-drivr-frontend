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
      isEditing: false,
      password: {
        isEditing: false
      },
      formData: {
        email: '',
        phone: '',
        company:'',
        notifications: false,
      },
      hasErrors: false,
      errors: {}
    };
    this.getUserData = this.getUserData.bind(this);
    this.submitUserData = this.submitUserData.bind(this);
    this.enableEditing = this.enableEditing.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handleCloseSnackBar = this.handleCloseSnackBar.bind(this);
    this.handleSendPasswordReset = this.handleSendPasswordReset.bind(this);
  }

  componentWillMount() {
    // check if user role is set, otherwise, return to the homepage.
    if (!this.state.role) {
      this.context.router.push('/');
    }
  }

  componentDidMount() {
    // Get user data on component mount
    this.getUserData();
  }

  getUserData() {
    auth.getUser()
      .then((response) => {
        console.log(response);
        this.setState({
          isLoading: false,
          isEditing: false,
          userData: response.userData
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.status >= 400 && error.status <= 500) {
          auth.logout();
          this.setState({ isLoading: true });
          this.context.router.push('/');
        }
        this.handleOpenSnackBar('An unknown error has occured while loading the network data.');
      });
  }

  submitUserData(data) {
    const userData = this.state.userData;
    auth.postUser(userData)
      .then(() => {
        console.log('Successfully submitted user data.');
        this.setState({ isEditing: false });
        this.handleOpenSnackBar('Successfully updated your profile!');
      }).catch(() => {
        this.handleOpenSnackBar(
          'An error occured while submitting data to the network.'
        );
      });
  }

  handleFormUpdate(param, e) {
    const formData = {};
    formData[param] = e.target.value;
    this.setState(formData);
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
    this.getUserData();
  }

  handleSendPasswordReset(data) {
    auth.updatePassword(data)
      .then(() => {
        this.handleOpenSnackBar('Successfully updated your password');
      }).catch(() => {
        this.handleOpenSnackBar('Please check that your password is correct and try again.');
      });
  }

  enableEditing() {
    this.setState({ isEditing: true });
  }

  handleCancelClick() {
    this.setState({ isEditing: false });
    this.handleFormReset();
  }

  validateField(name, e) {
    switch (name) {
      case 'email': {
        const email = e.target.value;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailIsValid = re.test(email);
        let error = null;
        if (emailIsValid) {
          error = null;
        } else {
          error = 'Email must be valid.';
        }
        return error;
      }
      case 'password': {}
      case 'phone': {}
      default: {}
    }
  }

  handleEditButtonClick(e) {
    if (this.state.isEditing) {
      this.handleFormSubmission();
    } else {
      this.enableEditing();
    }
    e.preventDefault();
  }

  handlePasswordCancel() {
    this.setState({
      password: { isEditing: false }
    });
  }

  handleChangePasswordClick() {
    this.setState({
      password: { isEditing: true }
    });
  }

  handleNotificationToggle() {
    const formData = this.state.formData;
    const toggled = !formData.notifications;
    formData.notifications = toggled;
    this.setState(formData);
  }

  handleOpenSnackBar(message) {
    this.setState({
      snackBarIsOpen: true,
      snackBarMessage: message
    });
  }

  render() {
    return (
      this.state.isLoading ? <FullscreenLoading isLoading={this.state.isLoading} /> :
        <div>
          <UserProfile
            userData={this.state.userData}
            onFormSubmit={this.submitUserData}
            onFormReset={this.handleFormReset}
            onFormUpdate={this.handleFormUpdate}
            isEditing={this.state.isEditing}
            onSendPasswordReset={this.handleSendPasswordReset}
            onEdit={this.enableEditing}
            formData={this.state.formData}
            errors={this.state.errors}
            onNotificationToggle={this.handleNotificationToggle}
          />
          <Snackbar
            open={this.state.snackBarIsOpen}
            action="Close"
            message={this.state.snackBarMessage}
            autoHideDuration={3000}
            onRequestClose={this.state.snackBarIsOpen}
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
