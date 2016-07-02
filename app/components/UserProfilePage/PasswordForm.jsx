import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Styles = {
  formGroup: {
    width: '95%',
    maxWidth: 350
  }
};

const PasswordForm = (props) => (
<div className={props.isEditing ? 'change-password-reveal' : 'hidden'} >
  <FlatButton
    primary
    label="Change Password"
    onTouchTap={props.onChangePasswordClick}
  />
    <Dialog
      actions={props.actions}
      modal={false}
      open={props.isOpen}
      contentClassName="update-password-dialog text-center"
      style={Styles.dialog}
      onRequestClose={props.onHandleClose}
    >
      <h4
        className="text-center text-yellow"
        style={Styles.formHeader}
      >
      Update Password
      </h4>
      <form onSubmit={props.onPasswordReset} >
        <TextField
          style={Styles.formGroup}
          id="currentPassword"
          name="currentPassword"
          floatingLabelText="Current Password"
          value={props.formData.CurrentPassword}
          onChange={props.onFormUpdate}
          type="password"
          hasErrors
        />
        <TextField
          id="newPassword"
          style={Styles.formGroup}
          name="password"
          floatingLabelText="New Password"
          value={props.formData.NewPassword}
          errorText={props.errors.NewPassword}
          onChange={props.onFormUpdate}
          type="password"
        />
        <TextField
          style={Styles.formGroup}
          id="newPasswordConfirmation"
          name="passwordConfirmation"
          floatingLabelText="Confirm New Password"
          value={props.formData.NewPasswordConfirmation}
          errorText={props.errors.NewPasswordConfirmation}
          onChange={props.onFormUpdate}
          type="password"
        />
      </form>
    </Dialog>
</div>
);

export default PasswordForm;
