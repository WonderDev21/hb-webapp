import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Tab.scss'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string,
    label: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  }

  onClick = () => {
    const { onClick, id } = this.props
    onClick(id)
  }

  render() {
    const {
      onClick,
      props: { activeTab, label, id }
    } = this

    let className = 'tab-list-item-key'

    if (activeTab === id) {
      className += ' tab-list-active-key'
    }

    return (
      <li
        className={className}
        onClick={onClick}
        key={`tab-${id}`}
        id={`tab-${id}`}
      >
        {label}
      </li>
    )
  }
}

export default Tab
