import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const EditProfileButton = ({
  isEditing,
  saveChanges,
  onEditButtonClick,
  onCancelClick
}) => (
  <div className="user-profile__btn-group">
    <RaisedButton
      primary
      disabled={isEditing ? !saveChanges : false}
      onClick={onEditButtonClick}
      label={isEditing ? 'Save Profile' : 'Edit Profile'}
    />
    <div className={isEditing ? 'cancel-button' : 'hidden'}>
      <RaisedButton
        secondary
        onTouchTap={onCancelClick}
        label="Cancel"
      />
    </div>
  </div>
);

EditProfileButton.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  saveChanges: PropTypes.bool.isRequired
};

export default EditProfileButton;
