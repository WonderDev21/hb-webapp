import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import * as actions from '../../../../store/actions/index'
import { getCookie, deleteCookie } from '../../../../utils/Cookies'
import Logo from '../../../../assets/img/logo_white.png'
import classes from './TeacherHeader.module.scss'
import TeacherSubHeader from './TeacherSubHeader'

class TeacherHeader extends Component {
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
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/teacher/dashboard" className="nav-link">
                  <img
                    className={`d-block mx-auto ${classes.Index}`}
                    src={Logo}
                    alt=""
                  />
                </Link>
              </li>
              <li className="nav-item">
                <p className={classes.ForSchools}>
                  <FormattedMessage
                    id="app.teachers.for_schools"
                    defaultMessage="FOR SCHOOLS"
                  />
                </p>
              </li>
            </ul>

            <div className={classes.goProContainer}>
              <Link to="/plans" className={`${classes.goProButton}`}>
                GO PRO
              </Link>
            </div>

            <TeacherSubHeader
              email={this.props.user.email}
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

export default connect(mapStateToProps, mapDispatchToProps)(TeacherHeader)
