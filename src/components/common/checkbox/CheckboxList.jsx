import React from 'react';
import PropTypes from 'prop-types';
import './CheckboxList.css'
import Checkbox from "./Checkbox";

const CheckboxList = ({ items }) => {

  return (
  <div className="checkbox-list">
    {items.map((item, index) =>
      <Checkbox
        key={`${index}-${item.label}`}
        checked={item.checked}
        disabled={item.disabled}
        label={item.label}
        value={item.value}
        nChange={item.onChange}
      />)}
  </div>
)};

CheckboxList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  }))
};

export default CheckboxList;
