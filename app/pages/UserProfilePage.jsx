import React from 'react';
import auth from '../utils/auth.js';
import FullscreenLoading from '../components/Reusable/FullscreenLoading';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import UserProfile from '../components/UserProfilePage/UserProfile';
import PasswordForm from '../components/UserProfilePage/PasswordForm.jsx';

const Styles = {
  buttonGroup: {
    margin: 15
  }
};

class UserProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      role: parseInt(localStorage.getItem('role'), 10),
      open: false,
      isLoading: true,
      snackBarIsOpen: false,
      snackBarMessage: '',
      userData: {},
      isEditing: false,
      passwordEdit: false,
      formData: {
        email: '',
        phone: '',
        company: '',
        notifications: false,
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
      },
      hasErrors: false,
      error: {
        errorEmail: '',
        errorPassword: '',
        errorNewPassword: '',
        errorNewPasswordConfirmation: ''
      },
      canSubmit: false
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

  handleFormUpdate(input, e) {
    this.setState({ [`${input}Value`]: e.target.value });
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

  handleOpen() {
    this.setState({ open: true });
  }

  handleSnackClose() {
    this.setState({ snackBarIsOpen: false });
  }

    /*
      Handling the Password Form
    */

  handleClose() {
    this.setState({
      formData: {
        password: '',
        passwordConfirmation: '',
        currentPassword: ''
      }
    });
    this.props.onPasswordCancel();
  }

  handleSubmit() {
    const params = this.state.formData;
    if (this.state.canSubmit === true) {
      this.props.onPasswordReset(params);
    }
  }

  /* handle1FormUpdate(name, e) {
    const formData = this.state.formData;
    const passwordRE = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    const newPassword = e.target.value;
    const regExpTest = passwordRE.test(newPassword);
    const errors = this.state.errors;
    if (regExpTest !== true && newPassword.length > 0) {
      const errorMessage = 'Minimum 8 characters, 1 Upper, 1 Lower, 1 Special and 1 Number';
      errors[name] = errorMessage;
    } else {
      errors[name] = null;
    }

    formData[name] = newPassword;
    this.setState({
      formData,
      errors,
      hasErrors: true,
      canSubmit: this.checkCanSubmit()
    });
  }
*/
  checkPasswordsDontMatch() {
    const formData = this.state.formData;
    return formData.password !== formData.passwordConfirmation;
  }

  checkCanSubmit() {
    let canSubmit = false;
    const passwordMatchError = this.checkPasswordsDontMatch();
    const formData = this.state.formData;
    const password = formData.password;
    const passwordConfirmation = formData.passwordConfirmation;
    const currentPassword = formData.currentPassword;
    if (!passwordMatchError) {
      if (currentPassword.length > 0) {
        const passwordRE = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
        const passwordTest = passwordRE.test(password);
        const passwordConfTest = passwordRE.test(passwordConfirmation);
        canSubmit = passwordTest && passwordConfTest;
      }
    } else {
      /* I hate that I am redoing this and am altering state here, but I need to submit this */
      const errors = this.state.errors;
      errors.passwordConfirmation = 'Passwords do not match.';
      this.setState({ errors });
    }
    return canSubmit;
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        secondary
        onTouchTap={this.handlePasswordCancel}
        style={Styles.buttonGroup}
      />,
      <RaisedButton
        label="Submit"
        disabled={!this.state.canSubmit}
        primary
        onTouchTap={this.handleSubmit}
        style={Styles.buttonGroup}
      />
    ];
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
            formData={this.state.formData}
            errors={this.state.errors}
            onNotificationToggle={this.handleNotificationToggle}
            onEmailChange={this.handleEmailChange}
            errorEmail={this.state.errorEmail}
            onPasswordChange={this.handlePasswordChange}
            errorPassword={this.state.errorPassword}
          />
          <PasswordForm
          actions={actions}
          isOpen={this.state.passwordEdit}
          onPasswordCancel={this.handlePasswordCancel}
          onPasswordReset={this.handlePasswordReset}
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
