import React from 'react';
import Geosuggest from 'react-geosuggest';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AvatarMissing from '../../assets/images/avatar-missing.png';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';


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
    <form className="user-dashboard-form" onSubmit={props.onFormSubmit}>
      <div className="form-group">
        <TextField
          hintText="Enter Your Email"
          errorText={props.errorEmail}
          floatingLabelText="Email"
          onChange={props.onFormUpdate}
          value={props.formData.email}
        />
        <TextField
          id="password"
          name="password"
          value={props.formData.password}
          errorText={props.errorPassword}
          onChange={props.onFormUpdate}
          disabled={!props.isEditing}
          type="password"
          hintText="Password"
        />
        <TextField
          id="phone"
          name="phone"
          style={Styles.formGroup}
          value={props.formData.phone}
          onChange={props.onFormUpdate}
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
          value={props.formData.company}
          onChange={props.onFormUpdate}
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
     {  /* <Geosuggest
               className="hidden"
               placeholder="Start typing!"
               initialValue="Portland"
               onSuggestSelect={this.onSuggestSelect}
               location={new google.maps.LatLng(45.523062, -122.676482)}
               radius="20"
               enabled={!props.isEditing}
             />*/
      }
        <span className="geosuggest__highlight"></span>
        <span className="geosuggest__bar"></span>
      </div>
      <Divider />
      <div className="profile-button-group" style={Styles.buttonGroup}>
        <div className={props.isEditing ? 'cancel-button' : 'hidden'}>
          <RaisedButton
            style={Styles.buttonStyle}
            secondary
            onTouchTap={props.onCancelClick}
            label="Cancel"
          />
        </div>
        <RaisedButton
          style={Styles.buttonStyle}
          primary
          onClick={props.onEditButtonClick}
          label={props.isEditing ? 'Save Profile' : 'Edit Profile'}
        />
      </div>
    </form>
    <div
      style={Styles.changePasswordGroup}
      className={props.isEditing ? 'change-password-reveal' : 'hidden'}
    >
      <FlatButton
        primary
        label="Change Password"
        onTouchTap={props.handleChangePasswordClick}
      />
      <div className={props.passwordEdit ? 'edit-password-form' : 'hidden'}>
      </div>
    </div>
  </div>
);

export default UserProfile;
