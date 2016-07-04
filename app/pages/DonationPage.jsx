import React from 'react';
import auth from '../utils/auth.js';
import PendingDonations from '../components/DonationPage/PendingDonations.jsx';
import DonationConfirmation from '../components/DonationPage/DonationConfirmation.jsx';
import DonationHistory from '../components/DonationPage/DonationHistory.jsx';
import DonationHistoryList from '../components/DonationPage/DonationHistoryList';
import DonationHistoryItem from '../components/DonationPage/DonationHistoryItem';

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
      snackbarMessage: '',
      noteMsg: '',
      donationList: [],
      newDonationList: [],
      listBegin: 0,
      listEnd: 3
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDonate = this.handleDonate.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleGetDonations = this.handleGetDonations.bind(this);
    this.handleSlice = this.handleSlice.bind(this);
  }

  componentWillMount() {
    const role = localStorage.getItem('role');
    if (parseInt(role, 10) !== 0) {
      this.context.router.push('/');
    }
  }

  componentDidMount() {
    this.handleGetDonations();
  }

  handleGetDonations() {
    auth.getDonation().then((response) => {
      response.data.donations.sort((a, b) => a.created_at < b.created_at);
      const list = response.data.donations;
      const mappedDonationList = list.map((donation, i) =>
        <DonationHistoryList
          key={i}
          title={donation.participants.donor.name}
          date={this.convertDate(donation.created_at)}
        >
          {donation.items.map((item, index) =>
            <DonationHistoryItem
              key={index}
              quantity={item.quantity}
              unit={item.unit}
              title={item.description}
            />
          )}
        </DonationHistoryList>);

      this.setState({
        donations: response.data.donations,
        donationList: mappedDonationList,
        newDonationList: mappedDonationList
      });
      this.handleSlice(0);
    })
    .catch((err) => {
      if (err.status >= 400 && err.status <= 500) {
        console.log(err);
        auth.logout();
        auth.onChange(false);
        this.context.router.push('/');
        localStorage.clear();
      }
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

  handleOpen() {
    const el = document.getElementsByTagName('button')[1];
    if (!el.classList.contains('btn--disabled')) {
      this.setState({ open: true });
    }
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleDonate() {
    auth.postDonation(this.state.itemsAdded)
    .then(() => {
      this.setState({
        open: false,
        openSnackBar: true,
        snackbarMessage: 'Donation Complete!',
        itemsAdded: [],
        enableDonation: false
      });
      this.handleGetDonations();
    })
    .catch((err) => {
      console.log(err);
      this.setState({
        open: false,
        openSnackBar: true,
        snackbarMessage: 'Donation Could Not Be Sent! Please Try Again!'
      });
    });
  }

  handleSnackClose() {
    this.setState({ openSnackBar: false });
  }

  handleNoteChange(e) {
    this.setState({ noteMsg: e.target.value });
  }

  convertDate(date) {
    const dateItems = date.split(/\-|T/i);
    const months = [
      'January', 'Febraury',
      'March', 'April',
      'May', 'June',
      'July', 'September',
      'October', 'November',
      'December'
    ];
    return `${months[parseInt(dateItems[1] - 1, 10)]} ${dateItems[2]}, ${dateItems[0]}`;
  }

  handleSlice(limiter) {
    const begin = this.state.listBegin;
    const end = this.state.listEnd + limiter;
    const newList = this.state.newDonationList.slice(begin, end);

    this.setState({
      listBegin: begin,
      listEnd: end,
      donationList: newList
    });
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
        onNoteChange={this.handleNoteChange}
        noteMsg={this.state.noteMsg}
        itemsAdded={this.state.itemsAdded}
        openSnackBar={this.state.openSnackBar}
        snackbarMessage={this.state.snackbarMessage}
        onSnackClose={this.handleSnackClose}
      />
      <DonationHistory
        donations={this.state.donations}
        onSlice={this.handleSlice}
        donationList={this.state.donationList}
        convertDate={this.convertDate}
      />
    </section>
    );
  }
}

DonationPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = DonationPage;
