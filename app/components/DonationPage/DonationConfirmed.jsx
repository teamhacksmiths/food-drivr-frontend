import React from 'react';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';

const styles = {
  titleStyle: {
    borderBottom: 'none',
    color: 'rgb(247, 179, 43)',
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    textTransform: 'uppercase',
    fontSize: 26,
    paddingBottom: 30,
    paddingTop: 40,
    letterSpacing: 1.5
  },
  bodyStyle: {
    width: '80%',
    margin: 'auto',
    paddingBottom: 0
  },
  contentStyle: {
    width: '50%',
    minWidth: 300,
    maxWidth: 600
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
      bodyStyle={styles.bodyStyle}
      contentStyle={styles.contentStyle}
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
        <p className="donation-popup__address text-grey">600 Main St.</p>
      </section>
      <section>
        <h3 className="donation-popup__items-title">Notes for the Driver</h3>
        <textarea
          className="donation-popup__textarea text-grey"
          placeholder="Special Notes For The Driver"
          rows="4"
          onChange={props.onNoteChange}
          value={props.noteMsg}
        />
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
  onNoteChange: React.PropTypes.func.isRequired,
  noteMsg: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  openSnackBar: React.PropTypes.bool.isRequired,
  snackbarMessage: React.PropTypes.string.isRequired,
  onSnackClose: React.PropTypes.func.isRequired
};

module.exports = DonationConfirmed;
