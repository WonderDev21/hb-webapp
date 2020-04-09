import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import NavKit from '../../../../assets/img/nav-kits.svg'
import Learn from '../../../../assets/img/nav-learn.svg'
import * as actions from '../../../../store/actions/index'
import { getCookie, deleteCookie } from '../../../../utils/Cookies'
import StudentSubHeader from './StudentSubHeader'

class StudentHeader extends Component {
  state = {
    userSubmenuOpen: false,
    endSession: false
  }

  componentDidMount() {
    const token = getCookie('hbtoken_30')
    if (!this.props.user.firstName) {
      this.props.getUser(token)
    }
  }

  openUserSubmenu = () => {
    this.setState({ userSubmenuOpen: !this.state.userSubmenuOpen })
  }

  logOut = () => {
    this.props.resetLearningPaths()
    this.props.resetUser()
    this.props.updateLoggedState()
    deleteCookie('hbtoken_30')
    this.setState({ endSession: true })
  }

  render() {
    if (this.state.endSession) {
      return <Redirect to="/" />
    }

    return (
      <>
        <nav className="navbar navbar-icon-top navbar-expand-md bg-blue-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li
                className={
                  `nav-item` + (this.props.active === 'kits' ? ` active` : '')
                }
              >
                <Link to="/student/kits" className="nav-link">
                  <img className="d-block mx-auto" src={NavKit} alt="" />
                  <FormattedMessage
                    id="app.navbar.kits"
                    defaultMessage="Kits"
                  />
                </Link>
              </li>
              <li
                className={
                  `nav-item` + (this.props.active === 'learn' ? ` active` : '')
                }
              >
                <Link to="/student/learn/dashboard" className="nav-link">
                  <img
                    className="d-block mx-auto mt-2 mb-3"
                    src={Learn}
                    alt=""
                  />
                  <FormattedMessage
                    id="app.navbar.learn"
                    defaultMessage="Learn"
                  />
                </Link>
              </li>
            </ul>
            <StudentSubHeader
              firstName={this.props.user.firstName}
              userSubMenuOpen={this.state.userSubmenuOpen}
              onClickUserProfile={this.openUserSubmenu}
              active={this.props.active}
              onClickLogout={this.logOut}
            />
          </div>
        </nav>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: token => dispatch(actions.getUser(token)),
    resetUser: () => dispatch(actions.resetUser()),
    updateLoggedState: () => dispatch(actions.updateLoggedState(false)),
    resetLearningPaths: () => dispatch(actions.resetLearningPaths())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentHeader)
