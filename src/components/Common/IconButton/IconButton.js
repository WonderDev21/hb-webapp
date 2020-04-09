import React from 'react'
import classNames from 'classnames'
import './IconButton.scss'

const IconButton = ({ className, icon, background, onClick }) => {
  return (
    <div
      className={classNames([
        className,
        'iconbutton',
        `iconbutton__${background}`
      ])}
      onClick={onClick}
    >
      {icon}
    </div>
  )
}

export default IconButton
