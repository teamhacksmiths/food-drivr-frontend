import React from 'react';
import TextField from 'material-ui/TextField';
import AvatarMissing from '../../assets/images/avatar-missing.png';
import Toggle from 'material-ui/Toggle';

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
  }
};

const UserProfile = (props) => (
  <div className="user-profile-container lightgrey-background" style={Styles.containerStyle}>
    <h1 className="giant-title text-center text-yellow">Hello, {props.userData.name}</h1>
    <div className="user-avatar-frame">
      <img
        className="user-avatar-image"
        src={props.userData.avatar ? props.userData.avatar : AvatarMissing}
        alt="person-avatar"
      />
    </div>
    <form className="user-dashboard-form" onSubmit={props.onFormSubmit}>
      <div className="form-group">
        <TextField
          id="Email"
          hintText="Enter Your Email"
          errorText={props.errors.Email}
          floatingLabelText="Email"
          onChange={props.onFormUpdate}
          value={props.formData.Email}
          disabled={!props.isEditing}
          style={Styles.formGroup}
        />
        <TextField
          id="CurrentPassword"
          name="Password"
          value={props.formData.CurrentPassword}
          errorText={props.errors.CurrentPassword}
          onChange={props.onFormUpdate}
          disabled={!props.isEditing}
          type="password"
          hintText="Password"
          style={Styles.formGroup}
        />
        <TextField
          id="Phone"
          name="Phone"
          style={Styles.formGroup}
          value={props.formData.Phone}
          onChange={props.onFormUpdate}
          disabled={!props.isEditing}
          floatingLabelText="Phone"
          type="phone"
          hintText="Contact Phone"
          autocomplete="tel"
          style={Styles.formGroup}
        />
        <TextField
          style={Styles.formGroup}
          id="Company"
          name="Company"
          floatingLabelText="Company"
          value={props.formData.Company}
          onChange={props.onFormUpdate}
          disabled={!props.isEditing}
          type="text"
          hintText="Company Name (Optional)"
          autocomplete="organization"
          style={Styles.formGroup}
        />
        <Toggle
          className="toggle"
          onToggle={props.onNotificationToggle}
          toggled={props.formData.notifications}
          disabled={!props.isEditing}
          id="Notifications"
          label="Toggle Notifications"
        />
      </div>
    </form>
  </div>
);

export default UserProfile;
