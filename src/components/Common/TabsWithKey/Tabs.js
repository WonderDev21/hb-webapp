import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab/Tab'
import './Tabs.scss'

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    defaultTabIndex: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    defaultTabIndex: 0,
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      activeTab: this.assignActiveTabByDefault(props)
    }
  }

  assignActiveTabByDefault = props => {
    const propsDefaultIndex = parseInt(props.defaultTabIndex)
    const defaultIndex = this.props.children[propsDefaultIndex]
      ? props.defaultTabIndex
      : 0
    return this.props.children[defaultIndex].key
      ? this.props.children[defaultIndex].key
      : this.props.children[defaultIndex].props.label
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab }, () => {
      this.props.onChange(tab)
    })
  }

  validateActiveTab = (activeTab, children) => {
    const search = children.filter(x => {
      if (x.key) {
        return x.key === activeTab
      } else {
        return x.props.label === activeTab
      }
    })
    if (search.length === 0) {
      return children[0].key ? children[0].key : children[0].props.label
    }
    return activeTab
  }

  obtainKey(child, label) {
    let { key } = child
    if (!key) {
      key = label
    }
    return key
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this

    const activeChildren = children.filter(x => !x.props.hidden)
    const activeTabValidation = this.validateActiveTab(activeTab, children)

    return (
      <div className="tabs">
        <ol className="tab-list-key">
          {activeChildren.map(child => {
            const { label } = child.props
            const key = this.obtainKey(child, label)
            return (
              <Tab
                activeTab={activeTabValidation}
                key={key}
                id={key}
                label={label}
                onClick={onClickTabItem}
              />
            )
          })}
        </ol>
        <div className="tab-content">
          {activeChildren.map(child => {
            const key = this.obtainKey(child, child.props.label)
            if (key !== activeTabValidation) return undefined
            return child.props.children
          })}
        </div>
      </div>
    )
  }
}

export default Tabs
