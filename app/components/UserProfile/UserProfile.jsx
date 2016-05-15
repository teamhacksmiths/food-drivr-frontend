import React from 'react';
import ReactDOM from 'react-dom';
import Geosuggest from 'react-geosuggest';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AvatarMissing from '../../assets/images/avatar-missing.png';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import AddressListMenu from '../AddressListMenu/AddressListMenu';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      formData: {
        email: '',
        password: '',
        phone: '',
        company: '',
        notifications: false
      },
      errors: {},
    };
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission() {
    this.props.handleSendFormData(this.state.formData);
  }

  componentDidMount() {
    this.disableEditing()
    this.setState({
      formData: this.props.userData
    })
  }

  enableEditing() {
    this.setState({
      isEditing: true,
    });
  }

  disableEditing() {
    this.setState({
      isEditing: false,
    });
  }

  validateField(name, e) {
    switch (name) {
      case 'email':
        const email = e.target.value;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailIsValid = re.test(email);
        var error = null;
        if (emailIsValid) {
          error = null;
        } else {
          error = "Email must be valid."
        }
        return error;
      case 'password':
      case 'phone':
      default:

    }
  }

  handleEditButtonClick(e) {
    if (this.state.isEditing) {
      this.handleFormSubmission()
    } else {
      this.enableEditing()
    }
    e.preventDefault();
  }


  handleFormUpdate(name, e) {
    var formData = this.state.formData;
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
    formData["notifications"] = toggled;
    this.setState(formData)
  }

  render() {
    const {
      handleFormSubmission,
      handleFormUpdate,
      userData,
      handleFormReset,
    } = this.props;
    const buttonMarginStyle = {
      margin: 12,
    };
    return (
      <div className="user-profile-container">
        <div className="user-avatar-frame">
          <img class="user-avatar-image" src={userData.avatar ? userData.avatar : AvatarMissing} />
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
              onToggle={this.handleNotificationToggle.bind(this)}
              toggled={this.state.formData.notifications}
              disabled={!this.state.isEditing}
              ref="notificationInput"
              id="notification-toggle"
              label="Toggle Notifications"
            />
          </div>
          {/*<AddressListMenu
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
          <RaisedButton
            style={buttonMarginStyle}
            primary={true}
            onClick={this.handleEditButtonClick}
            label={this.state.isEditing ? 'Save Profile' : 'Edit Profile'}
          />
          <div className={this.state.isEditing ? 'cancel-button' : 'hidden'}>
            <RaisedButton
              style={buttonMarginStyle}
              secondary={true}
              onClick={handleFormReset}
              label="Cancel"
            />
          </div>
        </form>
      </div>
    );
  }
}

UserProfile.propTypes = {
  userData: React.PropTypes.object.isRequired,
  handleSendFormData: React.PropTypes.func.isRequired,
  handleFormReset: React.PropTypes.func.isRequired
}

export default UserProfile;
