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
      passwordEdit: false,
      oldPassword: '',
      newPassword: '',
      newPasswordConfirmation: ''; 
      formData: {
        email: '',
        phone: '',
        company: '',
        notifications: false,
      },
      hasErrors: false,
      error: '';
      errorPassword: '',
      errorNewPassword: '',
      errorNewPasswordConfirmation: '' 
    };
    this.getUserData = this.getUserData.bind(this);
    this.submitUserData = this.submitUserData.bind(this);
    this.enableEditing = this.enableEditing.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handleCloseSnackBar = this.handleCloseSnackBar.bind(this);
    this.handleSendPasswordReset = this.handleSendPasswordReset.bind(this);
    this.enableEditing = this.enableEditing.bind(this);
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
          this.setState({
            isLoading: true,
            snackBarIsOpen: true,
            snackBarMessage: 'An unknown error has occured while loading the network data.'
          });
          this.context.router.push('/');
        }
      });
  }

  submitUserData() {
    const userData = this.state.userData;
    auth.postUser(userData)
      .then(() => {
        console.log('Successfully submitted user data.');
        this.setState({
          isEditing: false,
          snackBarIsOpen: true,
          snackBarMessage: 'Successfully updated your profile!'
        });
      }).catch(() => {
        this.setState({
          snackBarIsOpen: true,
          snackBarMessage: 'An error occured while submitting data to the network.'
        });
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
        this.setState({
          snackBarIsOpen: true,
          snackBarMessage: 'Successfully updated your password'
        });
      }).catch(() => {
        this.setState({
          snackBarIsOpen: true,
          snackBarMessage: 'Please check that your password is correct and try again.'
        });
      });
  }

  enableEditing() {
    this.setState({ isEditing: true });
  }

  handleCancelClick() {
    this.setState({ isEditing: false });
    this.handleFormReset();
  }

  handlePasswordChange(e) {
    this.state.errorPassword = '';
    if (!e.target.value) {
      this.state.errorPassword = 'This field is required.';
    } else if (e.target.value.length < 8) {
      this.state.errorPassword = 'Passwords need more than 8 characters.';
    }
    this.setState({
      errorPassword: this.state.errorPassword,
      password: e.target.value
    });
  }

  handleNewPasswordChange(e) {
    if (!e.target.value) {
      this.state.errorNewPassword = 'This field is required.';
    } else if (e.target.value.length < 8) {
      this.state.errorPassword = 'Passwords need more than 8 characters.';
    }
    this.setState({
      errorPassword: this.state.errorPassword,
      password: e.target.value
    });
  }

  handlePasswordConfirmChange(e) {
    this.state.errorPasswordConfirmation = '';
    if (!e.target.value) {
      this.state.errorPasswordConfirmation = 'This field is required.';
    } else if (e.target.value.length < 8) {
      this.state.errorPasswordConfirmation = 'Passwords need more than 8 characters.';
    } else if (e.target.value !== this.state.password) {
      this.state.errorPasswordConfirmation = 'Passwords must match!';
    }
    this.setState({
      errorPasswordConfirmation: this.state.errorPasswordConfirmation,
      passwordConfirmation: e.target.value
    });
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
    this.setState({ passwordEdit: false });
  }

  handleChangePasswordClick() {
    this.setState({ passwordEdit: true }});
  }

  handleNotificationToggle() {
    const formData = this.state.formData;
    const toggled = !formData.notifications;
    formData.notifications = toggled;
    this.setState(formData);
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
            onCancelClick={this.handleCancelClick}
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
