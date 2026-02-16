import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'

const Checkbox = ({ checked, disabled, label, value, onChange }) => (
  <label
    className={`checkbox
    ${checked ? 'checkbox--checked' : ''}
    ${disabled ? 'checkbox--disabled' : ''}
  `}
  >
    <input
      type='checkbox'
      disabled={disabled}
      checked={checked}
      value={value}
      onChange={onChange}
    />
    <span className='checkbox__indicator'>{checked ? '[x]' : '[ ]'}</span>
    <span className='checkbox__label'>{label}</span>
  </label>
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Checkbox
