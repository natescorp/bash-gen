import React from 'react'
import PropTypes from 'prop-types'
import './CheckboxList.css'
import Checkbox from './Checkbox'

const CheckboxList = ({ items, title, columns = 3 }) => {
  return (
    <div className='checkbox-list'>
      {title && (
        <div className='checkbox-list__header'>
          <span className='checkbox-list__prompt'>SELECT&gt;</span>
          <span className='checkbox-list__title'>{title}</span>
        </div>
      )}

      <div className='checkbox-list__grid' style={{ '--columns': columns }}>
        {items.map((item, index) => (
          <Checkbox
            key={`${index}-${item.label}`}
            checked={item.checked}
            disabled={item.disabled}
            label={item.label}
            value={item.value}
            onChange={item.onChange}
          />
        ))}
      </div>

      <div className='checkbox-list__footer'>
        <span className='checkbox-list__hint'>↑ ↓ to navigate | SPACE to select</span>
        <span className='checkbox-list__count'>
          Selected: {items.filter((i) => i.checked).length} / {items.length}
        </span>
      </div>
    </div>
  )
}

CheckboxList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
      onChange: PropTypes.func,
    }),
  ),
  title: PropTypes.string,
  columns: PropTypes.number,
}

export default CheckboxList
