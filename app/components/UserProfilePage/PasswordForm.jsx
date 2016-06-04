import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';

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
  }
};

const PasswordForm = (props) => (
  <Dialog
    actions={props.actions}
    modal={false}
    open={props.isOpen}
    contentClassName="dialog-grey"
    style={Styles.dialog}
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
              id="current-password"
              ref="currentPasswordInput"
              name="currentPassword"
              floatingLabelText="Current Password"
              value={this.state.formData.currentPassword}
              onChange={this.handleFormUpdate.bind(this, 'currentPassword')}
              type="password"
              hintText="Current Password"
              hasErrors
            />
          </div>
          <div className="form-group">
            <TextField
              id="password"
              style={Styles.formGroup}
              ref="passwordInput"
              name="password"
              floatingLabelText="New Password"
              value={this.state.formData.password}
              errorText={this.state.errors.password}
              onChange={this.handleFormUpdate.bind(this, 'password')}
              type="password"
              hintText="New Password"
            />
          </div>
          <div className="form-group">
            <TextField
              style={Styles.formGroup}
              id="passwordConfirmation"
              ref="passwordConfirmationInput"
              name="passwordConfirmation"
              floatingLabelText="Confirm New Password"
              value={this.state.formData.passwordConfirmation}
              errorText={this.state.errors.passwordConfirmation}
              onChange={this.handleFormUpdate.bind(this, 'passwordConfirmation')}
              type="password"
              hintText="Confirm Password"
            />
          </div>
        </form>
      </div>
    </div>
  </Dialog>
);

export default PasswordForm;
