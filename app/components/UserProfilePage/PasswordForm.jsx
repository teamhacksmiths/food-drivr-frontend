import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Styles = {
  formGroup: {
    width: '95%',
    maxWidth: 350
  }
};

const PasswordForm = ({
  isEditing,
  formData,
  onChangePasswordClick,
  onFormUpdate,
  errors,
  actions,
  onPasswordReset,
  onHandleClose,
  isOpen
}) => (
  <div className={isEditing ? 'change-password-reveal' : 'hidden'} >
    <FlatButton
      primary
      label="Change Password"
      onTouchTap={onChangePasswordClick}
    />
    <Dialog
      actions={actions}
      modal={false}
      open={isOpen}
      contentClassName="update-password-dialog text-center"
      style={Styles.dialog}
      onRequestClose={onHandleClose}
    >
      <h4
        className="text-center text-yellow"
        style={Styles.formHeader}
      >
        Update Password
      </h4>
      <form onSubmit={onPasswordReset} >
        <TextField
          style={Styles.formGroup}
          id="currentPassword"
          name="currentPassword"
          floatingLabelText="Current Password"
          value={formData.currentPassword}
          onChange={onFormUpdate}
          type="password"
          hasErrors
        />
        <TextField
          id="newPassword"
          style={Styles.formGroup}
          name="password"
          floatingLabelText="New Password"
          value={formData.newPassword}
          errorText={errors.newPassword}
          onChange={onFormUpdate}
          type="password"
        />
        <TextField
          style={Styles.formGroup}
          id="newPasswordConfirmation"
          name="passwordConfirmation"
          floatingLabelText="Confirm New Password"
          value={formData.newPasswordConfirmation}
          errorText={errors.newPasswordConfirmation}
          onChange={onFormUpdate}
          type="password"
        />
      </form>
    </Dialog>
  </div>
);

PasswordForm.propTypes = {
  isEditing: PropTypes.bool,
  formData: PropTypes.shape({
    currentPassword: PropTypes.string,
    newPassword: PropTypes.string,
    newPasswordConfirmation: PropTypes.string
  }),
  errors: PropTypes.shape({
    currentPassword: PropTypes.string,
    newPassword: PropTypes.string,
    newPasswordConfirmation: PropTypes.string
  }),
  onChangePasswordClick: PropTypes.func,
  onFormUpdate: PropTypes.func,
  actions: PropTypes.array,
  onPasswordReset: PropTypes.func,
  onHandleClose: PropTypes.func,
  isOpen: PropTypes.bool
};

export default PasswordForm;
