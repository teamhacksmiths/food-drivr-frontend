import React from 'react';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  titleStyle: {
    borderBottom: 'none',
    color: 'rgb(247, 179, 43)',
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    textTransform: 'uppercase',
    fontSize: 26,
    paddingBottom: 30,
    paddingTop: 40
  },
  contentStyle: {
    width: '90%',
    margin: 'auto'
  }
};
const DonationConfirmed = (props) => (
  <div>
    <Dialog
      title="Donation Confirmation"
      modal={false}
      open={props.onOpen}
      onRequestClose={props.onHandleClose}
      autoScrollBodyContent
      titleStyle={styles.titleStyle}
      bodyStyle={styles.contentStyle}
      className="donation-popup"
    >
      <section>
        <h3 className="donation-popup__items-title">Items</h3>
        <ul className="donation-popup__items-list">
          {props.items.map((item, index) => (
            <li key={index} disabled>{item.description}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="donation-popup__items-title">Pick-Up Location</h3>
        <input className="donation-popup__input text-grey" list="donation-popup__addresses" defaultValue="600 Main St." />
        <datalist id="donation-popup__addresses">
          <option value="600 Main St."></option>
          <option value="6636 Tremblay Walks"></option>
          <option value="303 Kuhlam Walks Apt.405"></option>
        </datalist>
      </section>
      <div className="text-center">
        <button className="btn btn-rect bg-yellow text-white" onClick={props.onConfirm}>Donate</button>
      </div>
    </Dialog>
    <Snackbar
      open={props.openSnackBar}
      message={props.snackbarMessage}
      autoHideDuration={4000}
      onRequestClose={props.onSnackClose}
    />
  </div>
);

DonationConfirmed.propTypes = {
  onOpen: React.PropTypes.bool.isRequired,
  onHandleClose: React.PropTypes.func.isRequired,
  onConfirm: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired,
  openSnackBar: React.PropTypes.bool.isRequired,
  snackbarMessage: React.PropTypes.string.isRequired,
  onSnackClose: React.PropTypes.func.isRequired
};

module.exports = DonationConfirmed;
