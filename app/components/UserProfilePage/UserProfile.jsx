import React from 'react';
import Geosuggest from 'react-geosuggest';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AvatarMissing from '../../assets/images/avatar-missing.png';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import PasswordForm from './PasswordForm.jsx';


const Styles = {
  containerStyle: {
    textAlign: 'center'
  },
  formGroup: {
    width: 350
  },
  buttonGroup: {
    display: 'flex',
    padding: 10
  },
  buttonStyle: {
    marginRight: 15
  },
  changePasswordGroup: {
    margin: 10,
    textAlign: 'center',
    padding: 20
  }
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: this.props.isEditing,
      password: {
        isEditing: false
      },
      formData: {
        email: this.props.userData.email || '',
        phone: this.props.userData.phone || '',
        company: this.props.userData.company || '',
        notifications: this.props.userData.notifications || false,
        emailIsValid: true
      },
      hasErrors: false,
      errors: {}
    };
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleNotificationToggle = this.handleNotificationToggle.bind(this);
    this.handleChangePasswordClick = this.handleChangePasswordClick.bind(this);
    this.handlePasswordFormSubmission = this.handlePasswordFormSubmission.bind(this);
    this.handlePasswordCancel = this.handlePasswordCancel.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  componentDidMount() {
    this.disableEditing();
  }

  handlePasswordFormSubmission(params) {
    this.props.handleSendPasswordReset(params);
  }

  validateEmail() {
    const formData = this.state.formData;
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const test = re.test(formData.email);
    return test || formData.email.length === 0;
  }

  handleFormSubmission() {
    this.props.handleSendFormData(this.state.formData);
  }

  enableEditing() {
    this.setState({ isEditing: true });
  }

  disableEditing() {
    this.setState({ isEditing: false });
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
    default:
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

  handleCancelClick() {
    this.disableEditing();
    this.props.handleFormReset();
  }

  handleChangePasswordClick() {
    this.setState({
      password: { isEditing: true }
    });
  }

  handleFormUpdate(name, e) {
    const emailIsValid = this.validateEmail();
    const formData = this.state.formData;
    formData[name] = e.target.value;
    formData.emailIsValid = emailIsValid;
    this.setState(formData);
  }

  handleNotificationToggle() {
    const formData = this.state.formData;
    const toggled = !formData.notifications;
    formData.notifications = toggled;
    this.setState(formData);
  }

  render() {
    const {
      handleFormSubmission,
      handleFormUpdate,
      userData
    } = this.props;

    return (
      <div className="user-profile-container lightgrey-background" style={Styles.containerStyle}>
        <h1 className="giant-title text-center text-yellow">Hello, {this.props.userData.name}</h1>
        <div className="user-avatar-frame">
          <img
            className="user-avatar-image"
            src={userData.avatar ? userData.avatar : AvatarMissing}
            alt="person-avatar"
          />
        </div>
        <form className="user-dashboard-form" ref="form" onSubmit={handleFormSubmission}>
          <div className="form-group">
            <TextField
              id="email"
              name="email"
              style={Styles.formGroup}
              value={this.state.formData.email}
              onChange={this.handleFormUpdate.bind(this, 'email')}
              errorText={this.state.errors.emailError}
              floatingLabelText="Email"
              disabled={!this.state.isEditing}
              errorText={this.state.formData.emailIsValid ? '' : 'Please enter a valid email address.'}
              hintText="Email Address"
              required
              autocomplete="email"
            />
            <TextField
              id="password"
              ref="passwordInput"
              name="password"
              value={this.state.formData.password}
              errorText={this.state.errors.passwordError}
              onChange={this.handleFormUpdate.bind(this, 'password')}
              disabled={!this.state.isEditing}
              type="password"
              hintText="Password"
            />
            <TextField
              id="phone"
              ref="phoneInput"
              name="phone"
              style={Styles.formGroup}
              value={this.state.formData.phone}
              errorText={this.state.errors.phoneError}
              onChange={this.handleFormUpdate.bind(this, 'phone')}
              disabled={!this.state.isEditing}
              floatingLabelText="Phone"
              type="phone"
              hintText="Contact Phone"
              autocomplete="tel"
            />
            <TextField
              style={Styles.formGroup}
              id="company"
              name="company"
              floatingLabelText="Company"
              ref="companyInput"
              value={this.state.formData.company}
              onChange={this.handleFormUpdate.bind(this, 'company')}
              disabled={!this.state.isEditing}
              type="text"
              hintText="Company Name (Optional)"
              autocomplete="organization"
            />
            <Toggle
              className="toggle"
              onToggle={this.handleNotificationToggle}
              toggled={this.state.formData.notifications}
              disabled={!this.state.isEditing}
              ref="notificationInput"
              id="notification-toggle"
              label="Toggle Notifications"
            />
          </div>

          {/* <AddressListMenu
          addresses={this.state.addresses}
          handleAddAddress={this.handleAddAddress.bind(this)}
          handleEditAddress={this.handleEditAddress.bind(this)}
          handleSetAddressAsDefault={this.handleSetAddressAsDefault.bind(this)}
          handleDeleteAddress={this.handleDeleteAddress.bind(this)}
          />*/}
          <div className=".geosuggest__group">
            <Geosuggest
              className={this.state.editingAddress ? '' : 'hidden'}
              placeholder="Start typing!"
              initialValue="Portland"
              onSuggestSelect={this.onSuggestSelect}
              location={new google.maps.LatLng(45.523062, -122.676482)}
              radius="20"
              enabled={!this.state.isEditing}
            />
            <span className="geosuggest__highlight"></span>
            <span className="geosuggest__bar"></span>
          </div>
          <Divider />
          <div className="profile-button-group" style={Styles.buttonGroup}>
            <div className={this.state.isEditing ? 'cancel-button' : 'hidden'}>
              <RaisedButton
                style={Styles.buttonStyle}
                secondary
                onTouchTap={this.handleCancelClick}
                label="Cancel"
              />
            </div>
            <RaisedButton
              style={Styles.buttonStyle}
              primary
              onClick={this.handleEditButtonClick}
              label={this.state.isEditing ? 'Save Profile' : 'Edit Profile'}
            />
          </div>
        </form>
        <div
          style={Styles.changePasswordGroup}
          className={this.state.isEditing ? 'change-password-reveal' : 'hidden'}
        >
          <FlatButton
            primary
            label="Change Password"
            onTouchTap={this.handleChangePasswordClick}
          />
          <div className={this.state.password.isEditing ? 'edit-password-form' : 'hidden'}>
            <PasswordForm
              onSubmit={this.handlePasswordFormSubmission}
              isOpen={this.state.password.isEditing}
              onCancel={this.handlePasswordCancel}
            />
          </div>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  isEditing: React.PropTypes.bool,
  userData: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    company: React.PropTypes.string,
    avatar: React.PropTypes.string,
    phone: React.PropTypes.string,
    notifications: React.PropTypes.bool.isRequired
  }),
  handleSendFormData: React.PropTypes.func.isRequired,
  handleFormReset: React.PropTypes.func.isRequired,
  handleSendPasswordReset: React.PropTypes.func.isRequired
};

module.exports = UserProfile;
