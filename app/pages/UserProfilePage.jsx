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
      newPasswordConfirmation: '',
      formData: {
        email: '',
        phone: '',
        company: '',
        notifications: false
      },
      hasErrors: false,
      error: '',
      errorEmail: '',
      errorPassword: '',
      errorNewPassword: '',
      errorNewPasswordConfirmation: ''
    };
    this.getUserData = this.getUserData.bind(this);
    this.submitUserData = this.submitUserData.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handlePasswordReset = this.handlePasswordReset.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.handlePasswordCancel = this.handlePasswordCancel.bind(this);
    this.handleChangePasswordClick = this.handleChangePasswordClick.bind(this);
    this.handleNotificationToggle = this.handleNotificationToggle.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
  }

  componentWillMount() {
    const role = localStorage.getItem('role');
    if (parseInt(role, 10) === undefined || parseInt(role, 10) === null) {
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
          userData: response.data.user
        });
        console.log(this.state.userData);
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
    auth.postUser(this.state.userData)
      .then(() => {
        console.log('Successfully submitted user data.');
        this.setState({
          isEditing: false,
          snackBarIsOpen: true,
          snackBarMessage: 'Successfully updated your profile!'
        });
      }).catch((err) => {
        console.log(err);
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

  handlePasswordReset(data) {
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

  handleCancelClick() {
    this.setState({ isEditing: false });
    this.handleFormReset();
  }

  validateEmail(email) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  handleEmailChange(e) {
    const formData = this.state.formData;
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!e.target.value) {
      this.state.errorEmail = 'This field is required.';
    } else if (!re.test(e.target.value)) {
      this.state.errorEmail = 'Email is not valid.';
    }
    formData.email = e.target.value;
    this.setState({
      errorEmail: this.state.errorEmail,
      formData
    });
  }

  handlePasswordChange(e) {
    if (!e.target.value) {
      this.state.errorPassword = 'This field is required.';
    }
    this.setState({
      errorPassword: this.state.errorPassword,
      oldPassword: e.target.value
    });
  }

  handleNewPasswordChange(e) {
    if (!e.target.value) {
      this.state.errorNewPassword = 'This field is required.';
    } else if (e.target.value.length < 8) {
      this.state.errorNewPassword = 'Passwords need more than 8 characters.';
    }
    this.setState({
      errorNewPassword: this.state.errorNewPassword,
      newPassword: e.target.value
    });
  }

  handlePasswordConfirmChange(e) {
    if (!e.target.value) {
      this.state.errorNewPasswordConfirmation = 'This field is required.';
    } else if (e.target.value.length < 8) {
      this.state.errorNewPasswordConfirmation = 'Passwords need more than 8 characters.';
    } else if (e.target.value !== this.state.password) {
      this.state.errorNewPasswordConfirmation = 'Passwords must match!';
    }
    this.setState({
      errorNewPasswordConfirmation: this.state.errorPasswordNewConfirmation,
      newPasswordConfirmation: e.target.value
    });
  }

  handleEditButtonClick(e) {
    if (this.state.isEditing) {
      this.submitUserData();
    } else {
      this.setState({ isEditing: true });
    }
    e.preventDefault();
  }

  handlePasswordCancel() {
    this.setState({ passwordEdit: false });
  }

  handleChangePasswordClick() {
    this.setState({ passwordEdit: true });
  }

  handleNotificationToggle() {
    const formData = this.state.formData;
    const toggled = !formData.notifications;
    formData.notifications = toggled;
    this.setState(formData);
  }

  handleSnackClose() {
    this.setState({ snackBarIsOpen: false });
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
            onEditButtonClick={this.handleEditButtonClick}
            onChangePasswordClick={this.handleChangePasswordClick}
            onPasswordCancel={this.handlePasswordCancel}
            onPasswordReset={this.handlePasswordReset}
            formData={this.state.formData}
            errors={this.state.errors}
            onNotificationToggle={this.handleNotificationToggle}
            onEmailChange={this.handleEmailChange}
            errorEmail={this.state.errorEmail}
            onPasswordChange={this.handlePasswordChange}
            errorPassword={this.state.errorPassword}
          />
          <Snackbar
            open={this.state.snackBarIsOpen}
            action="Close"
            message={this.state.snackBarMessage}
            autoHideDuration={3000}
            onRequestClose={this.handleSnackClose}
          />
        </div>
    );
  }
}

UserProfilePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserProfilePage;
