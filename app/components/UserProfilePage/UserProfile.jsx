import React from 'react';
import TextField from 'material-ui/TextField';
import AvatarMissing from '../../assets/images/avatar-missing.png';
import Toggle from 'material-ui/Toggle';

const Styles = {
  formGroup: {
    width: '100%',
    maxWidth: 500
  }
};

const UserProfile = (props) => (
  <div className="user-profile-container">
    <h1 className="text-center text-yellow">Hello, {props.userData.name}</h1>
    <img
      className="user-avatar-image"
      src={props.userData.avatar ? props.userData.avatar : AvatarMissing}
      alt="person-avatar"
    />
    <form className="user-dashboard-form" onSubmit={props.onFormSubmit}>
        <TextField
          id="Email"
          hintText="Enter Your Email"
          errorText={props.errors.Email}
          floatingLabelText="Email"
          onChange={props.onFormUpdate}
          value={props.formData.Email}
          disabled
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
    </form>
  </div>
);

export default UserProfile;
