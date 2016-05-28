import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
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
      actions={props.actions}
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
        <div className="donation-popup__address">600 Main St.</div>
        <div className="donation-popup__saved-locations">
            <i>Saved Locations</i>
            <ul>
                <li>6636 Tremblay Walks</li>
                <li>303 Kuhlam Walks Apt.405</li>
            </ul>
        </div>
      </section>
      <p className="donation-popup__add-location pointer-cursor">
        Different location
      </p>
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
  actions: React.PropTypes.array.isRequired,
  onOpen: React.PropTypes.bool.isRequired,
  onHandleClose: React.PropTypes.func.isRequired,
  onNoteChange: React.PropTypes.func.isRequired,
  noteMsg: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  openSnackBar: React.PropTypes.bool.isRequired,
  snackbarMessage: React.PropTypes.string.isRequired,
  onSnackClose: React.PropTypes.func.isRequired
};

module.exports = DonationConfirmed;
