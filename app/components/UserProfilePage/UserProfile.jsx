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
  <div className="user-profile__container">
    <h1 className="text-center text-yellow">Hello, {props.userData.name}</h1>
    <img
      className="user-profile__avatar"
      src={props.userData.avatar ? props.userData.avatar : AvatarMissing}
      alt="person-avatar"
    />
    <form className="user-profile__form" onSubmit={props.onFormSubmit}>
        <TextField
          id="email"
          hintText="Enter Your Email"
          errorText={props.errors.email}
          floatingLabelText="Email"
          onChange={props.onFormUpdate}
          value={props.formData.email}
          disabled
          style={Styles.formGroup}
        />
        <TextField
          id="phone"
          name="Phone"
          style={Styles.formGroup}
          value={props.formData.phone}
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
          id="company"
          name="Company"
          floatingLabelText="Company"
          value={props.formData.company}
          onChange={props.onFormUpdate}
          disabled={!props.isEditing}
          type="text"
          hintText="Company Name (Optional)"
          autocomplete="organization"
          style={Styles.formGroup}
        />
        <Toggle
          className="user-profile__toggle"
          onToggle={props.onFormUpdate}
          toggled={props.toggled}
          disabled={!props.isEditing}
          id="notifications"
          label="Toggle Notifications"
        />
    </form>
  </div>
);

export default UserProfile;
