import React from 'react';
import auth from '../utils/auth.js';
import PendingDonations from '../components/DonationPage/PendingDonations.jsx';
import DonationConfirmation from '../components/DonationPage/DonationConfirmation.jsx';
import DonationHistory from '../components/DonationPage/DonationHistory.jsx';

class DonationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      donations: [],
      newItemName: '',
      itemsAdded: [],
      enableAddItem: false,
      enableDonation: false,
      open: false,
      openSnackBar: false,
      snackbarMessage: ''
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDonate = this.handleDonate.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
  }

  componentWillMount() {
    const role = localStorage.getItem('role');
    if (parseInt(role, 10) !== 0) {
      this.context.router.push('/');
    }
  }

  componentDidMount() {
    auth.getDonation().then((response) => {
      console.log(response);
      this.setState({ donations: response.data.donations });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleUpdateItem(e) {
    if (e.keyCode === 13) {
      this.handleAddItem(e);
    } else {
      this.setState({ enableAddItem: e.target.value !== '' });
      this.setState({ newItemName: e.target.value });
    }
  }

  handleAddItem(e) {
    e.preventDefault();
    if (e.keyCode === 13 || e.button === 0) {
      if (this.state.enableAddItem) {
        const newItemsArr = this.state.itemsAdded;
        newItemsArr.push({ description: this.state.newItemName });
        this.setState({
          itemsAdded: newItemsArr,
          enableDonation: true
        });

        document.getElementById('donationTitle').value = '';
        this.setState({
          enableAddItem: false,
          newItemName: ''
        });
      }
    }
  }

  handleRemoveItem(index) {
    const newItemsArr = this.state.itemsAdded;
    newItemsArr.splice(index, 1);
    this.setState({ itemsAdded: newItemsArr });
    if (this.state.itemsAdded.length === 0) this.setState({ enableDonation: false });
  }

  handleOpen(e) {
    if (!e.target.classList.contains('btn--disabled')) {
      this.setState({ open: true });
    }
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleDonate() {
    auth.postDonation(this.state.itemsAdded)
    .then((response) => {
      console.log(response);
      this.setState({ open: false,
              openSnackBar: true,
              snackbarMessage: 'Donation Complete!',
              itemsAdded: [] });
    })
    .catch((err) => {
      console.log(err);
      this.setState({ open: false,
              openSnackBar: true,
              snackbarMessage: 'Donation Could Not Be Sent! Please Try Again!' });
    });
  }

  handleSnackClose() {
    this.setState({ openSnackBar: false });
  }

  render() {
    return (
    <section className="donations">
      <PendingDonations
        enableAddItem={this.state.enableAddItem}
        onAddItem={this.handleAddItem}
        onUpdateItem={this.handleUpdateItem}
        itemsAdded={this.state.itemsAdded}
        enableDonation={this.state.enableDonation}
        onHandleOpen={this.handleOpen}
        onHandleRemoveItem={this.handleRemoveItem}
      />
      <DonationConfirmation
        onOpen={this.state.open}
        onHandleClose={this.handleClose}
        onHandleDonate={this.handleDonate}
        itemsAdded={this.state.itemsAdded}
        openSnackBar={this.state.openSnackBar}
        snackbarMessage={this.state.snackbarMessage}
        onSnackClose={this.handleSnackClose}
      />
      <DonationHistory donations={this.state.donations} />
    </section>
    );
  }
}

DonationPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = DonationPage;
