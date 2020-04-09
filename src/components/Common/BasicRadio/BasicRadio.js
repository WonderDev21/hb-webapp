import React from 'react'

const BasicRadio = ({ label, type, name, checked = false, onChange }) => {
  return (
    <div className="d-flex align-items-start mt-3 text-left">
      <input
        name={name}
        type={type}
        checked={checked}
        className="survey__radio"
        onChange={onChange}
      />
      <h5 className="ml-2 survey__answer">{label}</h5>
    </div>
  )
}

export default BasicRadio
