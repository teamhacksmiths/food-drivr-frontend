import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import FullscreenLoading from '../../components/FullscreenLoading/FullscreenLoading';
import foodDrivrAPI from '../../utils/foodDrivrAPI.js';
import Snackbar from 'material-ui/Snackbar';
import axios from 'axios';

class UserProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
        role: parseInt(localStorage.getItem('role'), 10),
        isLoading: true,
        snackBarIsOpen: false,
        snackBarMessage: ''
      };
    this.handleSendFormData = this.handleSendFormData.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.handleCloseSnackBar = this.handleCloseSnackBar.bind(this);
  }
  componentDidMount() {
    this.setState({
      isLoading: false,
      userData: foodDrivrAPI.getDummyUser()
    })
  }

  handleFormReset() {
    this.setState({
      userData: foodDrivrAPI.getDummyUser()
    })
  }

  submitDataToAPI(data) {
    foodDrivrAPI.postUserDataToAPI(data).then((response) => {
      this.setState({
        snackBarIsOpen: true,
        snackBarMessage: 'Successfully updated Profile Data'
      })
    }).catch((error) => {
      this.setState({
        snackBarIsOpen: true,
        snackBarMessage: "An error occured while communicating with the network.  Please try again."
      })
    });
  }

  handleSendFormData(params) {
    const updateUserData = {
      email: params["email"],
      password: params["password"],
      company: params["company"],
      phone: params["phone"],
      setting_attributes: {
        notifications: params["notifications"]
      }
    };
    this.submitDataToAPI(updateUserData)
  }

  handleOpenSnackBar(message) {
    this.setState({
      snackBarIsOpen: true,
      snackBarMessage: message
    })
  }

  handleCloseSnackBar() {
    this.setState({
      snackBarIsOpen: false,
      snackBarMessage: ''
    });
  }

  render() {
    const {
      handleCloseSnackBar
    } = this.props;
    return(
      this.state.isLoading ?
      <FullscreenLoading
        isLoading={this.state.isLoading}
       /> :
      <div>
        <UserProfile
          userData={this.state.userData}
          handleSendFormData={this.handleSendFormData}
          handleFormReset={this.handleFormReset}
        />
        <Snackbar
          open={this.state.snackBarIsOpen}
          action="Close"
          message={this.state.snackBarMessage}
          autoHideDuration={3000}
          onActionTouchTap={this.handleCloseSnackBar}
          onRequestClose={this.handleCloseSnackBar}
        />
      </div>
    )
  }
}

UserProfilePage.propTypes = {
  errors: React.PropTypes.array
}

export default UserProfilePage;
