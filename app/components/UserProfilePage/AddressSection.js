import React, { PropTypes } from 'react';
import GeoSuggest from './GeoSuggest';
import AddressList from './AddressList';

const AddressSection = ({
  addresses,
  handleToggle,
  isEditing,
  handleSuggestSelect,
  handleAddAddress,
  handleRemoveAddress,
  buttonIsEnabled
}) => (
  <section className="address-section">
    {isEditing &&
      <div>
        <GeoSuggest
          isEditing={isEditing}
          handleSuggestSelect={handleSuggestSelect}
          handleAddAddress={handleAddAddress}
          buttonIsEnabled={buttonIsEnabled}
        />
        <AddressList
          addresses={addresses}
          handleToggle={handleToggle}
          handleRemoveAddress={handleRemoveAddress}
        />
      </div>
    }
  </section>
);

AddressSection.propTypes = {
  addresses: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleAddAddress: PropTypes.func.isRequired,
  handleRemoveAddress: PropTypes.func.isRequired,
  buttonIsEnabled: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleSuggestSelect: PropTypes.func.isRequired
};

export default AddressSection;
