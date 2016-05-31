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

const UserProfile = (props) => (
  <div className="user-profile-container lightgrey-background" style={Styles.containerStyle}>
    <h1 className="giant-title text-center text-yellow">Hello, {props.userData.name}</h1>
    <div className="user-avatar-frame">
      <img
        className="user-avatar-image"
        src={props.userData.avatar ? props.userData.avatar : { AvatarMissing } }
        alt="person-avatar"
      />
    </div>
    <form className="user-dashboard-form" ref="form" onSubmit={props.onFormSubmit}>
      <div className="form-group">
        <TextField
          id="password"
          name="password"
          value={props.formData.password}
          errorText={props.errors.passwordError}
          onChange={props.onFormUpdate.bind(this, 'password')}
          disabled={!props.isEditing}
          type="password"
          hintText="Password"
        />
        <TextField
          id="phone"
          ref="phoneInput"
          name="phone"
          style={Styles.formGroup}
          value={props.formData.phone}
          errorText={props.errors.phoneError}
          onChange={props.onFormUpdate.bind(this, 'phone')}
          disabled={!props.isEditing}
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
          value={props.formData.company}
          onChange={props.onFormUpdate.bind(this, 'company')}
          disabled={!props.isEditing}
          type="text"
          hintText="Company Name (Optional)"
          autocomplete="organization"
        />
        <Toggle
          className="toggle"
          onToggle={props.onNotificationToggle}
          toggled={props.formData.notifications}
          disabled={!props.isEditing}
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
          enabled={!props.isEditing}
        />
        <span className="geosuggest__highlight"></span>
        <span className="geosuggest__bar"></span>
      </div>
      <Divider />
      <div className="profile-button-group" style={Styles.buttonGroup}>
        <div className={props.isEditing ? 'cancel-button' : 'hidden'}>
          <RaisedButton
            style={Styles.buttonStyle}
            secondary
            onTouchTap={this.onCancelClick}
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
  handleFormReset: React.PropTypes.func.isRequired,
  handleSendPasswordReset: React.PropTypes.func.isRequired
};

export default UserProfile;
