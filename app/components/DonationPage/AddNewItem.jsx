import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  textField: {
    width: '100%',
    maxWidth: 500,
    height: 50,
    marginRight: 15,
    lineHeight: 2.7,
    paddingBottom: 10,
    letterSpacing: 1.9,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 14
  }
};

const AddNewItem = ({
  onUpdateItem,
  enableAddItem,
  onAddItem
}) => (
  <form className="donations__form">
    <TextField
      type="text"
      onKeyUp={onUpdateItem}
      id="donationTitle"
      hintText="What would you like to donate ?"
      style={styles.textField}
    />
    <button
      className={enableAddItem ?
        'btn btn-addDonation'
      :
        'btn btn-addDonation btn--disabled'
      }
      onClick={onAddItem}
    />
  </form>
);

AddNewItem.propTypes = {
  onUpdateItem: React.PropTypes.func.isRequired,
  enableAddItem: React.PropTypes.bool.isRequired,
  onAddItem: React.PropTypes.func.isRequired
};

export default AddNewItem;
