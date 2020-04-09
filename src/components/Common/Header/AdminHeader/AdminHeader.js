import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import * as actions from '../../../../store/actions/index'
import { getCookie, deleteCookie } from '../../../../utils/Cookies'
import Logo from '../../../../assets/img/logo_white.png'
import classes from './AdminHeader.module.scss'
import NavKit from '../../../../assets/img/nav-kits.svg'
import NavLearn from '../../../../assets/img/nav-learn.svg'
import NavChallenge from '../../../../assets/img/nav-challenges.svg'
import AdminSubHeader from './AdminSubHeader'

class AdminHeader extends Component {
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
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li
                className={
                  `nav-item` + (this.props.active === 'kits' ? ` active` : '')
                }
              >
                <Link
                  to="/admin/dashboard"
                  className="nav-link d-flex align-items-center flex-column"
                >
                  <div
                    className={`mb-auto d-flex justify-content-center flex-column ${classes.NavTabImage}`}
                  >
                    <img className="my-auto" src={NavKit} alt="" />
                  </div>
                  <div className="mt-auto">
                    <FormattedMessage
                      id="app.navbar.kits"
                      defaultMessage="Kits"
                    />
                  </div>
                </Link>
              </li>
              <li
                className={
                  `nav-item` + (this.props.active === 'learn' ? ` active` : '')
                }
              >
                <Link
                  to="/admin/dashboard"
                  className="nav-link d-flex align-items-center flex-column"
                >
                  <div
                    className={`mb-auto d-flex justify-content-center flex-column ${classes.NavTabImage}`}
                  >
                    <img className="my-auto" src={NavLearn} alt="" />
                  </div>
                  <div className="mt-auto">
                    <FormattedMessage
                      id="app.navbar.learn"
                      defaultMessage="Learn"
                    />
                  </div>
                </Link>
              </li>
              <li
                className={
                  `nav-item` +
                  (this.props.active === 'challenges' ? ` active` : '')
                }
              >
                <Link
                  to="/admin/dashboard"
                  className="nav-link d-flex align-items-center flex-column"
                >
                  <div
                    className={`mb-auto d-flex justify-content-center flex-column ${classes.NavTabImage}`}
                  >
                    <img className="my-auto" src={NavChallenge} alt="" />
                  </div>
                  <div className="mt-auto">
                    <FormattedMessage
                      id="app.navbar.challenges"
                      defaultMessage="Challenges"
                    />
                  </div>
                </Link>
              </li>
            </ul>

            <AdminSubHeader
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader)
