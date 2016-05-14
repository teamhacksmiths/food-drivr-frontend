import React from 'react';
import Geosuggest from 'react-geosuggest';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ReactSelect from 'react-select';
import AvatarMissing from '../../assets/images/avatar-missing.png';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import AddressListMenu from '../AddressListMenu/AddressListMenu';

const addressList = [{
    key: 1,
    address: "1213 Coral Lane Corolla, NC 27927",
    default: false
  },
  {
    key: 2,
    address: "123 Main St. Somewhere, OH 13223",
    default: true
  }];

class SettingsDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      addresses: addressList
    };
  }

  componentDidMount() {
    this.disableEditing()
  }

  enableEditing() {
    this.setState({
      isEditing: true,
    });
  }

  disableEditing() {
    this.setState({
      isEditing: false,
    });
  }

  handleEditButtonClick() {
    if (this.state.isEditing) {
      this.disableEditing()
    } else {
      this.enableEditing()
    }
  }

  handleCancelButtonClick() {

  }

  handleSubmit(data) {
    console.log(data)
  }

  handleChangeValue() {

  }

  handleAddAddress(address) {
    this.state.addresses.push({
      address
    });
    this.setState({
      addresses: this.state.addresses
    });
  }

  handleEditAddress(newAddress, index) {
    let address = this.state.addresses[index];

  }

  handleSetAddressAsDefault() {

  }

  handleDeleteAddress() {

  }

  render() {
    const {
      donor,
    } = this.props;
    const buttonMarginStyle = {
      margin: 12,
    };
    return (
      <div className="donor-profile-container">
        <div className="donor-avatar-frame">
          <img class="donor-avatar-image" src={donor.avatar ? donor.avatar : AvatarMissing} />
        </div>
        <form className="donor-dashboard-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <TextField
              id="email"
              name="email"
              defaultValue={donor.email}
              disabled={!this.state.isEditing}
              hintText="Email Address"
              required
              autocomplete="email"
            />
          </div>
          <div className="form-group">
            <TextField
              id="password"
              name="password"
              defaultValue={donor.password}
              disabled={!this.state.isEditing}
              type="password"
              hintText="Password"
            />
          </div>
          <div className="form-group">
            <TextField
              id="phone"
              name="phone"
              defaultValue={donor.phone}
              disabled={!this.state.isEditing}
              type="phone"
              hintText="Contact Phone"
              autocomplete="tel"
            />
          </div>
          <div className="form-group">
            <TextField
              id="company"
              name="company"
              defaultValue={donor.company}
              disabled={!this.state.isEditing}
              type="text"
              hintText="Company Name (Optional)"
              onEnter={this.handleSubmit.bind(this)}
              autocomplete="organization"
            />
          </div>
          <div className="form-group toggle-block">
            <Toggle
              className="toggle"
              label="Toggle Notifications"
            />
          </div>
          {/*<AddressListMenu
            addresses={this.state.addresses}
            handleAddAddress={this.handleAddAddress.bind(this)}
            handleEditAddress={this.handleEditAddress.bind(this)}
            handleSetAddressAsDefault={this.handleSetAddressAsDefault.bind(this)}
            handleDeleteAddress={this.handleDeleteAddress.bind(this)}
          />*/}
          <div className=".geosuggest__group">
            <Geosuggest
              className={this.state.edittingAddress ? '' : 'hidden'}
              placeholder="Start typing!"
              initialValue="Portland"
              onSuggestSelect={this.onSuggestSelect}
              location={new google.maps.LatLng(45.523062, -122.676482)}
              radius="20"
              enabled={!this.state.isEditing}
            />
            <span className="geosuggest__highlight"></span>
            <span className="geosuggest__bar"></span>
          </div>
          <RaisedButton
            style={buttonMarginStyle}
            primary={true}
            onClick={this.handleEditButtonClick.bind(this)}
            label={this.state.isEditing ? 'Save Profile' : 'Edit Profile'}
          />
          <div className={this.state.isEditing ? 'cancel-button' : 'hidden'}>
            <RaisedButton
              style={buttonMarginStyle}
              secondary={true}
              onClick={this.handleCancelButtonClick.bind(this)}
              label="Cancel"
            />
          </div>
        </form>
      </div>
    );
  }
}

SettingsDashboard.propTypes = {
  donor: React.PropTypes.object.isRequired
}

export default SettingsDashboard;
