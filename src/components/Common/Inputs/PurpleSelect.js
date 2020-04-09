import React from 'react'
import PropTypes from 'prop-types'

import classes from './PurpleSelect.module.scss'

export default function PurpleSelect({
  id,
  name,
  options,
  onChange,
  defaultValue
}) {
  const selectOptions = options.map((value, index) => (
    <option value={value} key={index}>
      {value}
    </option>
  ))

  return (
    <select
      className={`${classes.purpleSelect} ${classes.arrow}`}
      name={name}
      id={id}
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {selectOptions}
    </select>
  )
}

PurpleSelect.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired
}
