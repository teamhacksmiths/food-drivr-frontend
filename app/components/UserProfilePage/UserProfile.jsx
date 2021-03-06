import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import UserAvatar from './UserAvatar';

const Styles = {
  formGroup: {
    width: '100%',
    maxWidth: 500
  }
};

const UserProfile = ({
  toggled,
  isEditing,
  onFormUpdate,
  formData,
  errors,
  onFormSubmit,
  userData,
  handleUploadAvatar
}) => (
  <div className="user-profile__container">
    <h1 className="text-center text-yellow">Hello, {userData.name}</h1>
      <UserAvatar
        avatar={userData.avatar}
        handleUploadAvatar={handleUploadAvatar}
        isEditing={isEditing}
      />
    <form className="user-profile__form" onSubmit={onFormSubmit}>
        <TextField
          id="email"
          hintText="Enter Your Email"
          errorText={errors.email}
          floatingLabelText="Email"
          onChange={onFormUpdate}
          value={formData.email}
          disabled
          style={Styles.formGroup}
        />
        <TextField
          id="phone"
          name="Phone"
          style={Styles.formGroup}
          value={formData.phone}
          onChange={onFormUpdate}
          disabled={!isEditing}
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
          value={formData.company}
          onChange={onFormUpdate}
          disabled={!isEditing}
          type="text"
          hintText="Company Name (Optional)"
          autocomplete="organization"
          style={Styles.formGroup}
        />
        <Toggle
          className="user-profile__toggle"
          onToggle={onFormUpdate}
          toggled={toggled}
          disabled={!isEditing}
          id="notifications"
          label="Toggle Mobile Push Notifications"
        />
    </form>
  </div>
);

UserProfile.propTypes = {
  toggled: PropTypes.bool,
  isEditing: PropTypes.bool,
  onFormUpdate: PropTypes.func,
  formData: PropTypes.shape({
    company: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  }),
  errors: PropTypes.shape({
    email: PropTypes.string
  }),
  onFormSubmit: PropTypes.func,
  userData: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  }),
  handleUploadAvatar: PropTypes.func.isRequired
};

export default UserProfile;
