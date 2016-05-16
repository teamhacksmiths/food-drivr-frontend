import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const Styles = {
  formGroup: {
    width: 350,
  },
  formCentered: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonGroup: {
    margin: 15
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
};

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      errors: {
        currentPassword: '',
        password: '',
        passwordConfirmation: ''
      },
      formData: {
        password: '',
        passwordConfirmation: '',
        currentPassword: ''
      }
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleOpen(){
    this.setState({open: true});
  };
  handleClose() {
    this.setState({
      formData: {
        password: '',
        passwordConfirmation: '',
        currentPassword: ''
      }
    })
    this.props.onCancel();
  };
  handleSubmit() {
    const params = this.state.formData;
    this.props.onSubmit(params);
  };
  handleFormUpdate(name, e) {
    const formData = this.state.formData;
    const passwordRE = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
    const newPassword = e.target.value;
    const regExpTest = passwordRE.test(newPassword);
    const errors = this.state.errors;
    if (regExpTest !== true){
      const errorMessage = "Minimum 8 characters at least 1 Alpha and 1 Numeric."
      errors[name] = errorMessage;
    } else {
      errors[name] = "";
    }
    formData[name] = newPassword
    this.setState({
      formData: formData
      errors: errors
    })
  };
  render() {
    const actions = [
      <RaisedButton
        label="Submit"
        primary
        onTouchTap={this.handleSubmit}
        style={Styles.buttonGroup}
      />,
      <RaisedButton
        label="Cancel"
        secondary
        onTouchTap={this.handleClose}
        style={Styles.buttonGroup}
      />,
    ];
    return (
      <Dialog
        actions={actions}
        modal={false}
        open={this.props.isOpen}
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
              onSubmit={this.props.onSubmit}
            >
              <div className="form-group">
                <TextField
                  style={Styles.formGroup}
                  id="current-password"
                  ref="currentPasswordInput"
                  name="currentPassword"
                  floatingLabelText="Current Password"
                  value={this.state.formData.currentPassword}
                  errorText={this.state.errors.currentPassword}
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
                  errorText={this.state.errors.passwordError}
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
  }
}

PasswordForm.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  isOpen: React.PropTypes.bool.isRequired
};

export default PasswordForm;
