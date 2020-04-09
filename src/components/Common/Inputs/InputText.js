import React, { useState } from 'react'
import classes from './InputText.module.scss'

const InputText = ({ type = 'text', name, value, onChange }) => {
  const [fieldValue, setFieldValue] = useState(value)

  const updateField = e => {
    setFieldValue(e.target.value)
    if (onChange) {
      onChange(e)
    }
  }
  return (
    <input
      type={type}
      name={name}
      className={classes.input__profile}
      value={fieldValue}
      onChange={updateField}
    />
  )
}

export default InputText
