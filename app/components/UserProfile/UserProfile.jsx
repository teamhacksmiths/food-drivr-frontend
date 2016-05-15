import React from 'react';
import Geosuggest from 'react-geosuggest';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AvatarMissing from '../../assets/images/avatar-missing.png';
import Toggle from 'material-ui/Toggle';
import AddressListMenu from '../AddressListMenu/AddressListMenu';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import PasswordForm from './PasswordForm';
import Paper from 'material-ui/Paper';

const style = {
  margin: 20,
  textAlign: 'center'
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      password: {
        isEditing: false
      },
      formData: {
        email: this.props.userData.email || '',
        password: 'helloworld',
        phone: this.props.userData.phone || '',
        company: this.props.userData.company || '',
        notifications: this.props.userData.notifications || false
      },
      errors: {}
    };
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleNotificationToggle = this.handleNotificationToggle.bind(this);
    this.handleChangePasswordClick = this.handleChangePasswordClick.bind(this);
    this.handlePasswordEditSubmit = this.handlePasswordEditSubmit.bind(this);
  }

  componentDidMount() {
    this.disableEditing();
  }

  handlePasswordEditSubmit() {
    console.log("Edited Password")
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

  handleEditButtonClick(e) {
    if (this.state.isEditing) {
      this.handleFormSubmission();
    } else {
      this.enableEditing();
    }
    e.preventDefault();
  }

  handleChangePasswordClick(e) {
    this.setState({
      password: {
        isEditing: true
      }
    });
  }

  handleFormUpdate(name, e) {
    const formData = this.state.formData;
    formData[name] = e.target.value;
    this.setState(formData);
  }

  handleAddAddress(address) {
    this.state.addresses.push({
      address
    });
    this.setState({
      addresses: this.state.addresses
    });
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
      userData,
      handleFormReset
    } = this.props;
    const buttonMarginStyle = {
      margin: 12
    };
    return (
      <Paper style={style} z-depth={2}>
        <div className="user-profile-container">
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
                value={this.state.formData.email}
                onChange={this.handleFormUpdate.bind(this, 'email')}
                errorText={this.state.errors.emailError}
                disabled={!this.state.isEditing}
                hintText="Email Address"
                required
                autocomplete="email"
              />
            </div>
            <div className="form-group">
              <TextField
                id="phone"
                ref="phoneInput"
                name="phone"
                value={this.state.formData.phone}
                errorText={this.state.errors.phoneError}
                onChange={this.handleFormUpdate.bind(this, 'phone')}
                disabled={!this.state.isEditing}
                type="phone"
                hintText="Contact Phone"
                autocomplete="tel"
              />
            </div>
            <div className="form-group">
              <TextField
                id="company"
                name="company"
                ref="companyInput"
                value={this.state.formData.company}
                onChange={this.handleFormUpdate.bind(this, 'company')}
                disabled={!this.state.isEditing}
                type="text"
                hintText="Company Name (Optional)"
                autocomplete="organization"
              />
            </div>
            <div className="form-group toggle-block">
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
            <AddressListMenu
              addresses={this.state.addresses}
            />

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
            <RaisedButton
              style={buttonMarginStyle}
              primary
              onClick={this.handleEditButtonClick}
              label={this.state.isEditing ? 'Save Profile' : 'Edit Profile'}
            />
            <div className={this.state.isEditing ? 'cancel-button' : 'hidden'}>
              <RaisedButton
                style={buttonMarginStyle}
                secondary
                onClick={handleFormReset}
                label="Cancel"
              />
            </div>
          </form>
          <div className={this.state.isEditing ? 'change-password-reveal' : 'hidden'} >
            <FlatButton
              primary
              label="Edit Password"
              onClick={this.handleChangePasswordClick}
            />
          </div>
          <div className={this.state.password.isEditing ? 'edit-password-form' : 'hidden'}>
            <PasswordForm
              onSubmit={this.handlePasswordEditSubmit}
            />
          </div>
        </div>
      </Paper>
    );
  }
}

UserProfile.propTypes = {
  userData: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    company: React.PropTypes.string,
    avatar: React.PropTypes.string,
    phone: React.PropTypes.string,
    notifications: React.PropTypes.bool.isRequired
  }),
  handleSendFormData: React.PropTypes.func.isRequired,
  handleFormReset: React.PropTypes.func.isRequired
};

export default UserProfile;
