import React, { PropTypes } from 'react';
import auth from '../utils/auth.js';
import FullscreenLoading from '../components/Reusable/FullscreenLoading';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import UserProfile from '../components/UserProfilePage/UserProfile';
import PasswordForm from '../components/UserProfilePage/PasswordForm';
import EditProfileButton from '../components/UserProfilePage/EditProfileButton';
import AddressSection from '../components/UserProfilePage/AddressSection';

const Styles = {
  buttonGroup: {
    margin: 15
  }
};

/**
 * @function check defaults
 * @description filter and count the address array,
 * returning whether there is a default value set;
 * @param [Addresses] - the array of addresses.
 * @return - Bool - Whether or not the addresses array contains at least one default
 */
const checkDefaults = (addresses) =>
  addresses.filter((item) => item.default === true).length > 0;

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
        addresses: [],
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
      canAddAddress: false
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
    this.onToggleDefault = this.onToggleDefault.bind(this);
    this.handleRemoveAddress = this.handleRemoveAddress.bind(this);
    this.handleAddAddress = this.handleAddAddress.bind(this);
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

  onToggleDefault(e) {
    const {
      formData
    } = this.state;
    const addresses = formData.addresses;
    /* I know this is really wrong, binding to the dom, but we are not using redux,
      Be careful to change any of the address list and list items because the id is bound to the index
      of the item so that I can reference it from the container.
    */
    const index = e.target.id;
    const selectedAddress = addresses[index];
    const alteredAddress = Object.assign({}, selectedAddress, {
      default: true
    });
    const newAddresses = addresses.filter((item) => item !== selectedAddress);
    newAddresses.forEach((item, i) => newAddresses[i].default = false);
    newAddresses.unshift(alteredAddress);
    const newFormData = Object.assign({}, formData, {
      addresses: newAddresses
    });
    this.setState({
      formData: newFormData,
      saveChanges: true
    });
  }

/*
@return Pull user data from server. set isLoading, isEditing and userData state.
If error occurs, logout user and return to homepage.
*/
  getUserData() {
    auth.getUser()
      .then((response) => {
        const newForm = this.state.formData;
        newForm.email = response.data.user.email || '';
        newForm.phone = response.data.user.phone || '';
        newForm.company = response.data.user.company || '';
        newForm.avatar = response.data.user.avatar || null;
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
  /* THIS METHOD NEEDS SERIOUS LIPOSUCTION @FRANK :D */
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

  /**
 * @function handleFormReset
 * @description - Set's the form back to initial state.  Refactor to Model if possible.
 * @param None
 */
  handleFormReset() {
    const newFormData = this.state.formData;
    if (this.state.isEditing === true) {
      newFormData.addresses = [];
      for (const i in newFormData) {
        if (typeof newFormData[i] == 'string') {
          newFormData[i] = '';
        }
      }
    }
    const randomKey = Math.floor(Math.random() * (1337 - 1)) + 1;
    this.setState({
      key: randomKey,
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
  /**
  * @function handlePasswordReset
  * @description Takes data and sends to the api for resetting password
  * @param {data} - the data from the form.
  * @sideeffect - sets the state of the form data and handles errors.
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
    formData.addresses = [];
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

  /**
 * @function handleRemoveAddress
 * @description Takes an index and sets the state of the address array without the item.
 * @param i - the index of the item to alter in the address array
 */
  handleRemoveAddress(i) {
    const formData = this.state.formData;
    const elementId = i.target.id;
    const newFormData = Object.assign({}, formData, {
      addresses: [
        ...formData.addresses.slice(0, elementId),
        ...formData.addresses.slice(elementId + 1)
      ]
    });
    /* If their are no default addresses set, just set the first one as default */
    if (newFormData.addresses.length && !checkDefaults(newFormData.addresses)) {
      newFormData.addresses[0].default = true;
    }
    this.setState({
      formData: newFormData,
      saveChanges: newFormData.addresses.length
    });
  }

  /**
 * @function handleAddAddress
 * @description - Handles adding of the address to the form's data
 * @param None
 */
  handleAddAddress() {
    const {
      addressToAdd
    } = this.state;
    if (addressToAdd === null) { return undefined; }
    const formData = this.state.formData;
    const newAddress = {
      fullAddress: addressToAdd,
      default: !checkDefaults(formData.addresses)
    };
    const newFormData = Object.assign({}, formData, {
      addresses: [
        ...formData.addresses,
        newAddress
      ]
    });
    this.setState({
      formData: newFormData,
      canAddAddress: false,
      addressToAdd: null,
      saveChanges: checkDefaults(newFormData.addresses)
    });
  }

  /**
 * @function handleSuggestSelect
 * @description - Handles the selection of an address from the select field
 * @param {address} - the address object selected from the field
 * @sideeffect - Sets state of the form data with the addressToAdd value
 */
  handleSuggestSelect(address) {
    if (address.label) {
      this.setState({
        canAddAddress: true,
        addressToAdd: address.label
      });
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
      this.state.isLoading ?
        <FullscreenLoading isLoading={this.state.isLoading} />
      :
        <div className="user-profile" key={this.state.key || 1}>
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
          <Divider />
          <AddressSection
            isEditing={this.state.isEditing}
            handleSuggestSelect={this.handleSuggestSelect}
            handleAddAddress={this.handleAddAddress}
            handleRemoveAddress={this.handleRemoveAddress}
            handleToggle={this.onToggleDefault}
            buttonIsEnabled={this.state.canAddAddress}
            addresses={this.state.formData.addresses}
          />
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
