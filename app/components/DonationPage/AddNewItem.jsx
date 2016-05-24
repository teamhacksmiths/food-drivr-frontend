import React from 'react';
import TextField from 'material-ui/TextField';

const AddNewItem = ({ onUpdateItem, enableAddItem, onAddItem }) => (
  <div className="text-flex">
    <TextField
      type="text"
      onKeyUp={onUpdateItem}
      id="donationTitle"
      hintText="What would you like to donate ?"
      style={{ width: '100%', height: 55, marginRight: 45, lineHeight: 1.7, letterSpacing: 1.9, fontFamily: "'Open Sans', sans-serif", fontSize: 20 }}
    />
    <button
      className={enableAddItem ? 'btn-donation' : 'btn-donation btn-disabled'}
      onClick={onAddItem}
    />
  </div>
);

AddNewItem.propTypes = {
  onUpdateItem: React.PropTypes.func.isRequired,
  enableAddItem: React.PropTypes.bool.isRequired,
  onAddItem: React.PropTypes.func.isRequired
};

module.exports = AddNewItem;
