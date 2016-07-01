import React from 'react';
import auth from '../utils/auth.js';
import FullscreenLoading from '../components/Reusable/FullscreenLoading';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import UserProfile from '../components/UserProfilePage/UserProfile';
import PasswordForm from '../components/UserProfilePage/PasswordForm.jsx';
import GeoSuggest from '../components/UserProfilePage/GeoSuggest.jsx';
import EditProfileButton from '../components/UserProfilePage/EditProfileButton.jsx';

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
        notifications: null,
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
        avatar: null,
        address: ''
      },
      errors: {
        email: '',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
      },
      saveChanges: false,
      canSubmit: false,
      toggled: null,
    };
    this.getUserData = this.getUserData.bind(this);
    this.submitUserData = this.submitUserData.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handlePasswordReset = this.handlePasswordReset.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.handleChangePasswordClick = this.handleChangePasswordClick.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
    this.handleCloseAction = this.handleCloseAction.bind(this);
    this.handleSubmitAction = this.handleSubmitAction.bind(this);
    this.handleSuggestSelect = this.handleSuggestSelect.bind(this);
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

/*
@return Pull user data from server. set isLoading, isEditing and userData state.
If error occurs, logout user and return to homepage.
*/
  getUserData() {
    auth.getUser()
      .then((response) => {
        console.log(response);
        const newForm = this.state.formData;
        if (response.data.user.email != null) {
          newForm.email = response.data.user.email;
        } else {
          newForm.email = '';
        }
        if (response.data.user.phone != null) {
          newForm.phone = response.data.user.phone;
        } else {
          newForm.phone = '';
        }
        if (response.data.user.company != null) {
          newForm.company = response.data.user.company;
        } else {
          newForm.company = '';
        }
        if (response.data.user.avatar != null) {
          newForm.avatar = response.data.user.avatar;
        } else {
          newForm.avatar = null;
        }
        newForm.notifications = response.data.user.settings.notifications;

        this.setState({
          isLoading: false,
          isEditing: false,
          userData: response.data.user,
          formData: newForm,
          toggled: newForm.notifications
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.status >= 400 && error.status <= 500) {
          auth.logout();
          auth.onChange(false);
          this.setState({
            isLoading: true,
            snackBarIsOpen: true,
            snackBarMessage: 'An unknown error has occured while loading the network data.'
          });
          this.context.router.push('/');
          localStorage.clear();
        }
      });
  }

/*
@param Object {} optional fields:
      formData: {
        Email: '',
        Phone: '',
        Company: '',
        Notifications: false,
        CurrentPassword: '',
        NewPassword: '',
        NewPasswordConfirmation: ''
      }
@return Confirmation + snackbar message.
*/
  submitUserData() {
    auth.postUser(this.state.formData)
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

/*
@param event
@return Error + Value for form. Gets set to appropriate state based on event ID.
*/
  handleFormUpdate(e) {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const rePhone = /^\(\d{3}\) ?\d{3}( |-)?\d{4}|^\d{3}( |-)?\d{3}( |-)?\d{4}/i;
    const userData = Object.assign({}, this.state.userData);
    const newFormData = this.state.formData;
    const newFormErrors = this.state.errors;

    if (e.target.id === 'email') {
      if (!e.target.value) {
        this.state.errors.email = 'This field is required.';
      } else if (!re.test(e.target.value)) {
        this.state.errors.email = 'Email is not valid.';
      } else {
        this.state.errors.email = '';
      }
    } else if (e.target.id === 'phone') {
      if (!rePhone.test(e.target.value)) {
        this.state.errors.phone = 'Phone Number is not valid.';
      } else {
        this.state.errors.phone = '';
      }
    } else if (e.target.id === 'newPassword') {
      if (!e.target.value) {
        this.state.errors.newPassword = 'This field is required.';
      } else if (e.target.value.length < 8) {
        this.state.errors.newPassword = 'Password needs more than 8 characters.';
      } else if (e.target.value === this.state.formData.currentPassword) {
        this.state.errors.newPassword = 'New password must be different!';
      } else {
        this.state.errors.newPassword = '';
      }
    } else if (e.target.id === 'newPasswordConfirmation') {
      if (!e.target.value) {
        this.state.errors.newPasswordConfirmation = 'This field is required.';
      } else if (e.target.value.length < 8) {
        this.state.errors.newPasswordConfirmation = 'Passwords need more than 8 characters.';
      } else if (e.target.value !== this.state.formData.newPassword) {
        this.state.errors.newPasswordConfirmation = 'Passwords must match!';
      } else {
        this.state.errors.newPasswordConfirmation = '';
      }
    } else if (e.target.id === 'notifications') {
      if (newFormData.notifications === true && e.target.value === 'on') {
        newFormData.notifications = false;
      } else if (e.target.value === 'on') {
        newFormData.notifications = true;
      } else {
        newFormData.notifications = false;
      }
    }
    if (e.target.id !== 'notifications') {
      newFormData[e.target.id] = e.target.value;
    }
    newFormErrors[e.target.id] = this.state.errors[e.target.id];

    if (!newFormErrors.currentPassword &&
      !newFormErrors.newPassword &&
      !newFormErrors.newPasswordConfirmation &&
      newFormData.currentPassword.length > 1 &&
      newFormData.newPassword.length > 1 &&
      newFormData.newPasswordConfirmation.length > 1) {
      this.setState({ canSubmit: true });
    } else {
      this.setState({ canSubmit: false });
    }
    this.setState({
      formData: newFormData,
      errors: newFormErrors,
      toggled: newFormData.notifications
    });
    if (newFormData.email !== userData.email ||
        newFormData.phone !== userData.phone ||
        newFormData.company !== userData.company ||
        newFormData.notifications !== userData.settings.notifications
      ) {
      this.setState({ saveChanges: true });
    } else {
      this.setState({ saveChanges: false });
    }
  }

/*
@return set state to a default on form reset.
*/
  handleFormReset() {
    const newFormData = this.state.formData;
    if (this.state.isEditing === true) {
      for (const i in newFormData) {
        newFormData[i] = '';
      }
    }
    this.setState({
      isLoading: true,
      snackBarIsOpen: false,
      snackBarMessage: '',
      userData: {},
      isEditing: false,
      formData: newFormData
    });
    this.getUserData();
  }

/*
@param Object {} : Password, NewPassword, NewPasswordConfirmation
@return Confirmation + snackbar message
*/
  handlePasswordReset(data) {
    auth.updatePassword(data)
      .then((response) => {
        const newFormData = this.state.formData;
        if (this.state.isEditing === true) {
          newFormData.currentPassword = '';
          newFormData.newPassword = '';
          newFormData.newPasswordConfirmation = '';
        }
        this.setState({
          passwordEdit: false,
          formData: newFormData,
          snackBarIsOpen: true,
          snackBarMessage: 'Successfully updated your password'
        });
        this.handleCancelClick();
      }).catch((err) => {
        console.log(err);
        this.setState({
          snackBarIsOpen: true,
          snackBarMessage: 'Please check that your password is correct and try again.'
        });
      });
  }

/*
@return set isEditing state. return to default state. Cancel profile edit
*/
  handleCancelClick() {
    this.setState({
      isEditing: false,
      saveChanges: false
    });
    this.handleFormReset();
  }

/*
@param event
@return Submit form data.
*/
  handleEditButtonClick(e) {
    if (this.state.isEditing) {
      this.submitUserData();
    } else {
      this.setState({ isEditing: true });
    }
    e.preventDefault();
  }

/*
@return set passwordEdit state to `true`
*/
  handleChangePasswordClick() {
    this.setState({ passwordEdit: true });
  }

/*
@return set `snackBarIsOpen` state to `false`. Close snackbar.
*/
  handleSnackClose() {
    this.setState({ snackBarIsOpen: false });
  }

/*
@return set state for formData. Actions for password form.
*/
  handleCloseAction() {
    const formData = this.state.formData;
    formData.newPassword = '';
    formData.newPasswordConfirmation = '';
    formData.currentPassword = '';
    this.setState({
      formData,
      passwordEdit: false,
      open: false
    });
  }

/*
@return set canSubmit state. Allow user to submit password change to server.
*/
  handleSubmitAction() {
    if (this.state.canSubmit === true) {
      this.handlePasswordReset(this.state.formData);
    }
  }

  handleSuggestSelect(address) {
    const formData = this.state.formData;
    console.log(address.label);
    formData.address = address.label;
    this.setState({ formData });
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        secondary
        onTouchTap={this.handleCloseAction}
        style={Styles.buttonGroup}
      />,
      <RaisedButton
        label="Submit"
        disabled={!this.state.canSubmit}
        primary
        onTouchTap={this.handleSubmitAction}
        style={Styles.buttonGroup}
      />
    ];
    return (
      this.state.isLoading ? <FullscreenLoading isLoading={this.state.isLoading} /> :
      <div className="user-profile">
        <UserProfile
          userData={this.state.userData}
          onFormSubmit={this.submitUserData}
          errors={this.state.errors}
          onFormUpdate={this.handleFormUpdate}
          formData={this.state.formData}
          isEditing={this.state.isEditing}
          toggled={this.state.toggled}
          onFormReset={this.handleFormReset}
        />
        <GeoSuggest
          isEditing={this.state.isEditing}
          onSuggestSelect={this.handleSuggestSelect}
        />
        <Divider />
        <EditProfileButton
          className="user-profile__btn-edit"
          isEditing={this.state.isEditing}
          onCancelClick={this.handleCancelClick}
          onEditButtonClick={this.handleEditButtonClick}
          saveChanges={this.state.saveChanges}
        />
        <PasswordForm
          actions={actions}
          onPasswordReset={this.handlePasswordReset}
          isOpen={this.state.passwordEdit}
          onFormUpdate={this.handleFormUpdate}
          formData={this.state.formData}
          errors={this.state.errors}
          onHandleClose={this.handleCloseAction}
          onChangePasswordClick={this.handleChangePasswordClick}
          isEditing={this.state.isEditing}
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
