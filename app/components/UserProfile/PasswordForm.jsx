import React from 'react';
import TextField from 'material-ui/TextField';

const Styles = {
  hidden: {
    display: 'none'
  }
};

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
  }
  handleFormUpdate(name, e) {

  }
  render() {
    return (
      <form
        className="password-form"
        onSubmit={this.props.onSubmit}
      >
        <div className="form-group">
          <TextField
            id="current-password"
            ref="currentPasswordInput"
            name="currentPassword"
            errorText={this.state.errors.currentPassword}
            disabled={!this.state.isEditing}
            type="password"
            hintText="Current Password"
          />
        </div>
        <div className="form-group">
          <TextField
            id="password"
            ref="passwordInput"
            name="password"
            errorText={this.state.errors.passwordError}
            disabled={!this.state.isEditing}
            type="password"
            hintText="New Password"
          />
        </div>
        <div className="form-group">
          <TextField
            id="passwordConfirmation"
            ref="passwordConfirmationInput"
            name="passwordConfirmation"
            errorText={this.state.errors.passwordError}
            onChange={this.handleFormUpdate.bind(this, 'password')}
            disabled={!this.state.isEditing}
            type="password"
            hintText="Confirm Password"
          />
        </div>
      </form>
    );
  }
}

PasswordForm.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export default PasswordForm;
