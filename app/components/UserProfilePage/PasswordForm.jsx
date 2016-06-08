import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Styles = {
  formGroup: {
    width: 350
  },
  formCentered: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    margin: 'auto'
  },
  dialog: {
    textAlign: 'center'
  },
  formHeader: {
    textAlign: 'center',
    fontSize: 26
  },
  changePasswordGroup: {
    margin: 10,
    textAlign: 'center',
    padding: 20
  }
};

const PasswordForm = (props) => (
<div
  style={Styles.changePasswordGroup}
  className={props.isEditing ? 'change-password-reveal' : 'hidden'}
>
  <FlatButton
    primary
    label="Change Password"
    onTouchTap={props.onChangePasswordClick}
  />
  <div className={props.passwordEdit ? 'edit-password-form' : 'hidden'}>
    <Dialog
      actions={props.actions}
      modal={false}
      open={props.isOpen}
      contentClassName="dialog-grey"
      style={Styles.dialog}
      onRequestClose={props.onHandleClose}
    >
      <div className="update-password">
        <h4
          className="dialog-title text-center text-yellow"
          style={Styles.formHeader}
        >
        Update Password
        </h4>
        <div className="password-form-wrapper" style={Styles.formCentered}>
          <form
            className="password-form"
            style={Styles.form}
            onSubmit={props.onPasswordReset}
          >
            <div className="form-group">
              <TextField
                style={Styles.formGroup}
                id="CurrentPassword"
                name="currentPassword"
                floatingLabelText="Current Password"
                value={props.formData.CurrentPassword}
                onChange={props.onFormUpdate}
                type="password"
                hintText="Current Password"
                hasErrors
              />
            </div>
            <div className="form-group">
              <TextField
                id="NewPassword"
                style={Styles.formGroup}
                name="password"
                floatingLabelText="New Password"
                value={props.formData.NewPassword}
                errorText={props.errors.NewPassword}
                onChange={props.onFormUpdate}
                type="password"
                hintText="New Password"
              />
            </div>
            <div className="form-group">
              <TextField
                style={Styles.formGroup}
                id="NewPasswordConfirmation"
                name="passwordConfirmation"
                floatingLabelText="Confirm New Password"
                value={props.formData.NewPasswordConfirmation}
                errorText={props.errors.NewPasswordConfirmation}
                onChange={props.onFormUpdate}
                type="password"
                hintText="Confirm Password"
              />
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  </div>
</div>
);

PasswordForm.propTypes = {
  canSubmit: React.PropTypes.func.isRequired
};

export default PasswordForm;
