import React from 'react';

const ButtonAdd = props => (
  <button
    className={props.enabled ? 'btn-add-address' : 'btn-add-address btn-disabled'}
  />
)

export default ButtonAdd;
