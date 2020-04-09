import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import myProfile from '../../../../assets/img/myprofile.svg'
import help from '../../../../assets/img/help.svg'
import logout from '../../../../assets/img/logout.svg'
import UserPicture from '../../../../assets/img/logo-ico.png'
import classes from './StudentHeader.module.scss'

const StudentSubHeader = ({
  firstName,
  userSubMenuOpen,
  onClickUserProfile,
  onClickLogout,
  active
}) => {
  StudentSubHeader.propTypes = {
    firstName: PropTypes.string.isRequired,
    userSubMenuOpen: PropTypes.bool,
    onClickUserProfile: PropTypes.func.isRequired,
    onClickLogout: PropTypes.func.isRequired,
    active: PropTypes.string.isRequired
  }

  return (
    <>
      <div
        className={
          `profile-nav ${classes.User}` +
          (active === 'user' ? ` ${classes.Active}` : '')
        }
        id="userSubmenu"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={onClickUserProfile}
      >
        <p className={`text-white ${classes.UserName}`}>{firstName}</p>
        <div className={`profile-photo ${classes.Profile}`}>
          <img className={classes.LogoIco} src={UserPicture} alt="User" />
        </div>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <div
        className={`dropdown-menu dropdown-menu-right ${classes.UserDropdown} ${
          classes.ArrowTop
        } ${userSubMenuOpen ? 'd-block' : ' '}`}
        aria-labelledby="userSubmenu"
      >
        <Link
          className={`dropdown-item ${classes.DropdownItemHover}`}
          to="/student/profile"
          onClick={onClickUserProfile}
        >
          <img src={myProfile} alt="my-profile-icon" />
          <span className={classes.Items}>
            <FormattedMessage
              id="app.dropdown.my-profile"
              defaultMessage="My profile"
            />
          </span>
        </Link>
        <div className={classes.DropdownDivider}></div>
        <Link
          className={`dropdown-item ${classes.DropdownItemHover}`}
          to="/student/tickets"
        >
          <img src={help} alt="help" />
          <span className={classes.Items}>
            <FormattedMessage id="app.dropdown.help" defaultMessage="Help" />
          </span>
        </Link>
        <div className={classes.DropdownDivider}></div>
        <div
          className={`dropdown-item ${classes.DropdownItemHover}`}
          onClick={onClickLogout}
          id="button-logout"
        >
          <img src={logout} alt="logout" />
          <span className={classes.Items}>
            <FormattedMessage
              id="app.dropdown.logout"
              defaultMessage="Logout"
            />
          </span>
        </div>
      </div>
    </>
  )
}

export default StudentSubHeader
