import React from 'react';
import Geosuggest from 'react-geosuggest';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Styles from './DonorDashboard.css';
import ReactSelect from 'react-select';
import AvatarMissing from '../../assets/images/avatar-missing.png';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

class DonorDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      isAddingAddress: false
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

  getAddressList() {
    let addresses = this.props.donor.addresses;
    let optionsList = addresses.map((addressObject) => {
      return {
        option: addressObject.address,
        label: addressObject.address,
        default: addressObject.default
      };
    })
    optionsList.sort(function(a, b) {
      return (a["default"] === b["default"]) ? 0 : a? -1 : 1;
    })
    return optionsList;
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

  getDefaultAddress() {

  }

  handleCancelButtonClick() {

  }


  handleSubmit(data) {
    console.log(data)
  }

  handleChangeValue() {

  }

  render() {
    const buttonMarginStyle = {
      margin: 12,
    };
    return (
      <div className="donor-profile-container">
        <div className="donor-avatar-frame">
          <img class="donor-avatar-image" src={this.props.donor.avatar ? this.props.donor.avatar : AvatarMissing} />
        </div>
        <form className="donor-dashboard-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <TextField
              id="email"
              name="email"
              defaultValue={this.props.donor.email}
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
              defaultValue={this.props.donor.password}
              disabled={!this.state.isEditing}
              type="password"
              hintText="Password"
            />
          </div>
          <div className="form-group">
            <TextField
              id="phone"
              name="phone"
              defaultValue={this.props.donor.phone}
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
              defaultValue={this.props.donor.company}
              disabled={!this.state.isEditing}
              type="text"
              hintText="Company Name (Optional)"
              onEnter={this.handleSubmit.bind(this)}
              authocomplet="organization"
            />
          </div>
          <div className="form-group toggle-block">
            <Toggle
              className="toggle"
              label="Toggle Notifications"
            />
          </div>
          <ReactSelect
            className="geosuggest-address-select-field"
            name="address-list"
            loadOptions={this.getAddressList.bind(this)}
            onChange={this.logChange}
            enabled={this.state.isEditing && this.state.isAddingAddress}
          />
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
              hidden={!this.props.isEditing}
              onClick={this.handleCancelButtonClick.bind(this)}
              label="Cancel"
            />
          </div>
        </form>
      </div>
    );
  }
}

DonorDashboard.propTypes = {
  donor: React.PropTypes.object.isRequired
}

export default DonorDashboard;
