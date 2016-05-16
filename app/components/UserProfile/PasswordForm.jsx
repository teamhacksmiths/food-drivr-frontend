import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const Styles = {
  formGroup: {
    width: 350
  },
};

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.isOpen,
      errors: {
        currentPassword: null
      }
    };
  };
  componentDidUpdate() {
    this.setState({
      open: this.props.isOpen
    })
  };
  handleOpen(){
    this.setState({open: true});
  };
  handleClose() {
    this.setState({open: false});
  };
  handleSubmit(name, e) {

  };
  handleFormUpdate(name, e) {

  };
  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        secondary
        onTouchTap={this.handleClose}
      />,
      <RaisedButton
        label="Submit"
        primary
        onTouchTap={this.handleSubmit}
      />,
    ];
    return (
      <Dialog
        title="Update Password"
        actions={actions}
        modal={false}
        open={this.state.open}
      >
        <form
          className="password-form"
          onSubmit={this.props.onSubmit}
        >
          <div className="form-group">
            <TextField
              style={Styles.formGroup}
              id="current-password"
              ref="currentPasswordInput"
              name="currentPassword"
              errorText={this.state.errors.currentPassword}
              type="password"
              hintText="Current Password"
            />
          </div>
          <div className="form-group">
            <TextField
              id="password"
              style={Styles.formGroup}
              ref="passwordInput"
              name="password"
              errorText={this.state.errors.passwordError}
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
              errorText={this.state.errors.passwordError}
              onChange={this.handleFormUpdate.bind(this, 'password')}
              type="password"
              hintText="Confirm Password"
            />
          </div>
        </form>
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
