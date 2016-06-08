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
        Email: '',
        Phone: '',
        Company: '',
        Notifications: false,
        CurrentPassword: '',
        NewPassword: '',
        NewPasswordConfirmation: ''
      },
      hasErrors: false,
      errors: {
        Email: '',
        CurrentPassword: '',
        NewPassword: '',
        NewPasswordConfirmation: ''
      },
      canSubmit: false
    };
    this.getUserData = this.getUserData.bind(this);
    this.submitUserData = this.submitUserData.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handlePasswordReset = this.handlePasswordReset.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.handleChangePasswordClick = this.handleChangePasswordClick.bind(this);
    this.handleNotificationToggle = this.handleNotificationToggle.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
    this.handleCloseAction = this.handleCloseAction.bind(this);
    this.handleSubmitAction = this.handleSubmitAction.bind(this);
    this.checkCanSubmit = this.checkCanSubmit.bind(this);
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
    this.checkCanSubmit();
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
        if (response.data.user.phone != null) {
          newForm.Phone = response.data.user.phone;
        } else {
          newForm.Phone = '';
        }
        if (response.data.user.company != null) {
          newForm.Company = response.data.user.company;
        } else {
          newForm.Company = '';
        }

        this.setState({
          isLoading: false,
          isEditing: false,
          userData: response.data.user,
          formData: newForm
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
    if (e.target.id === 'Email') {
      if (!e.target.value) {
        this.state.errors.Email = 'This field is required.';
      } else if (!re.test(e.target.value)) {
        this.state.errors.Email = 'Email is not valid.';
      } else {
        this.state.errors.Email = '';
      }
    } else if (e.target.id === 'NewPassword') {
      if (!e.target.value) {
        this.state.errors.NewPassword = 'This field is required.';
      } else if (e.target.value.length < 8) {
        this.state.errors.NewPassword = 'Password needs more than 8 characters.';
      } else if (e.target.value === this.state.formData.CurrentPassword) {
        this.state.errors.NewPassword = 'New password must be different!';
      } else {
        this.state.errors.NewPassword = '';
      }
    } else if (e.target.id === 'NewPasswordConfirmation') {
      if (!e.target.value) {
        this.state.errors.NewPasswordConfirmation = 'This field is required.';
      } else if (e.target.value.length < 8) {
        this.state.errors.NewPasswordConfirmation = 'Passwords need more than 8 characters.';
      } else if (e.target.value !== this.state.formData.NewPassword) {
        this.state.errors.NewPasswordConfirmation = 'Passwords must match!';
      } else {
        this.state.errors.NewPasswordConfirmation = '';
      }
    }
    const newFormData = this.state.formData;
    const newFormErrors = this.state.errors;

    newFormData[e.target.id] = e.target.value;
    newFormErrors[e.target.id] = this.state.errors[e.target.id];
    this.setState({
      formData: newFormData,
      errors: newFormErrors
    });
  }

/*
@return set state to a default on form reset.
*/
  handleFormReset() {
    this.setState({
      isLoading: true,
      snackBarIsOpen: false,
      snackBarMessage: '',
      userData: {},
      isEditing: false
    });
    this.getUserData();
  }

/*
@param Object {} : Password, NewPassword, NewPasswordConfirmation
@return Confirmation + snackbar message
*/
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

/*
@return set isEditing state. return to default state. Cancel profile edit
*/
  handleCancelClick() {
    this.setState({ isEditing: false });
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
@return toggle boolean state of formData.notifications
*/
  handleNotificationToggle() {
    const formData = this.state.formData;
    const toggled = !formData.notifications;
    formData.notifications = toggled;
    this.setState(formData);
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
    formData.NewPassword = '';
    formData.NewPasswordConfirmation = '';
    formData.CurrentPassword = '';
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

  checkCanSubmit() {
    const formData = this.state.formData;
    const errors = this.state.errors;
    if (errors.CurrentPassword === '' &&
      errors.NewPassword === '' &&
      errors.NewPasswordConfirmation === '' &&
      formData.CurrentPassword !== '' &&
      formData.NewPassword !== '' &&
      formData.NewPasswordConfirmation !== '') {
      this.setState({ canSubmit: true });
    }
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
      <div>
        <UserProfile
          userData={this.state.userData}
          onFormSubmit={this.submitUserData}
          errors={this.state.errors}
          onFormUpdate={this.handleFormUpdate}
          formData={this.state.formData}
          isEditing={this.state.isEditing}
          onNotificationToggle={this.handleNotificationToggle}
          onFormReset={this.handleFormReset}
        />
        <GeoSuggest 
          isEditing={this.state.isEditing}
        />
        <Divider />
        <EditProfileButton 
          isEditing={this.state.isEditing}
          onCancelClick={this.handleCancelClick}
          onEditButtonClick={this.handleEditButtonClick}
        />
        <PasswordForm
          actions={actions}
          onPasswordReset={this.handlePasswordReset}
          isOpen={this.state.passwordEdit}
          onFormUpdate={this.handleFormUpdate}
          formData={this.state.formData}
          errors={this.state.errors}
          canSubmit={this.checkCanSubmit}
          onHandleClose={this.handleCloseAction}
          onChangePasswordClick={this.handleChangePasswordClick}
          passwordEdit={this.state.passwordEdit}
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
