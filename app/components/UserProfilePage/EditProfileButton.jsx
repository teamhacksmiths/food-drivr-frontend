import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Styles = {
  buttonStyle: {
    marginRight: 15
  }
};

const EditProfileButton = (props) => (
  <div className="profile-button-group">
    <RaisedButton
      style={Styles.buttonStyle}
      primary
      disabled={props.isEditing ? !props.saveChanges : false}
      onClick={props.onEditButtonClick}
      label={props.isEditing ? 'Save Profile' : 'Edit Profile'}
    />
    <div className={props.isEditing ? 'cancel-button' : 'hidden'}>
      <RaisedButton
        style={Styles.buttonStyle}
        secondary
        onTouchTap={props.onCancelClick}
        label="Cancel"
      />
    </div>
  </div>
);

export default EditProfileButton;
