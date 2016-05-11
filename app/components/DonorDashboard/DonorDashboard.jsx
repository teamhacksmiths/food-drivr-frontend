import React from 'react';
import Geosuggest from 'react-geosuggest';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Styles from './DonorDashboard.css';

class DonorDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      editingButtonTitle: ''
    };
  }
  componentDidMount() {
    this.setState({
      isEditing: false,
      editingButtonTitle: 'Edit Profile'
    })
  }
  enableEditing() {
    this.setState({
      isEditing: true,
      editingButtonTitle: 'Save Profile'
    });
  }

  disableEditing() {
    this.setState({
      isEditing: false,
      editingButtonTitle: 'Edit Profile'
    });
  }

  handleEditButtonClick() {
    if (this.state.isEditing) {
      this.disableEditing()()
    } else {
      this.enableEditing()
    }
  }

  handleSubmit(data) {
    console.log(data)
  }

  handleChangeValue() {

  }

  render() {
    return (
      <div className="donor-profile-container">
        <div className="donor-avatar-frame">
          <img class="donor-avatar-image" src={this.props.donor.avatar} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <TextField
              id="email"
              name="email"
              defaultValue={this.props.donor.email}
              disabled={!this.state.isEditing}
              hintText="Email Address"
              required
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
            />
          </div>
          <div className=".geosuggest__group">
            <Geosuggest
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
          <FlatButton
            onClick={this.handleEditButtonClick.bind(this)}
            label={this.state.editingButtonTitle}
            />
        </form>
      </div>
    );
  }
}

DonorDashboard.propTypes = {
  donor: React.PropTypes.object.isRequired
}

export default DonorDashboard;
