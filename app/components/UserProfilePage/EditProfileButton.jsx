import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Styles = {
  buttonStyle: {
    marginRight: 15
  }
};

const EditProfileButton = (props) => (
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
);

export default EditProfileButton;
