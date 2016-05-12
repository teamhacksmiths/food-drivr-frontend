// TODO: Change this to tie into the changes it will make to the user's account.
<form style={style}>
    <TextField
        hintText="First Name"
        errorText={errorFirstName}
        floatingLabelText="First Name"
        onChange={this._handleFirstNameChange}
        value={name}
        />
        <br/>
    <TextField
        hintText="Last Name"
        errorText={errorLastName}
        floatingLabelText="Last Name"
        onChange={this._handleLastNameChange}
        value={name}
        />
        <br/>
    <TextField
        hintText="Enter New Address"
        errorText={errorAddress}
        floatingLabelText="Address"
        onChange={this._handleAddressChange}
        value={name}
        />
        <br/>
    <TextField
        hintText="Enter Email"
        errorText={errorEmail}
        floatingLabelText="Email"
        onChange={this._handleEmailChange}
        value={email}
        />
        <br/>
    <TextField
        hintText="8 or more characters."
        errorText={errorPassword}
        floatingLabelText="New Password"
        onChange={this._handleNewPasswordChange}
        value={password}
        type='password'
        />
        <br/>
    <TextField
        hintText="8 or more characters."
        errorText={errorPasswordConfirmation}
        floatingLabelText="New Password Confirmation"
        onChange={this._handleNewPasswordConfirmChange}
        value={passwordConfirmation}
        type='password'
        />
        <br/>
    <TextField
        hintText="Enter Password to Confirm Changes"
        errorText={errorPassword}
        floatingLabelText="Password"
        onChange={this._handleFirstNameChange}
        value={name}
        />
        <br/>
<RaisedButton
    label="Submit"
    secondary={true}
    onClick={this._handleSubmitUser}
    />
    <br/>
<span className="text-lightgrey">
    {error}
</span>
</form>