import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import LogoIco from '../../../assets/img/logo-ico.png'
import classes from './Profile.module.scss'

const Profile = ({ first_name, last_name, address, city, role }) => {
  Profile.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    address: PropTypes.string,
    city: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className=" text-blue-dark fw-600 my-5">
              <FormattedMessage
                id="app.profile.my_profile"
                defaultMessage="My profile"
              />{' '}
              <small>
                {' '}
                <FormattedMessage
                  id="app.profile.from_learner_to_hero"
                  defaultMessage="From learner to hero"
                />{' '}
                <i
                  className="fa fa-question-circle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Tooltip on bottom"
                ></i>
              </small>
            </h4>
            <div className="row">
              <div className="col-md-5">
                <div className="profile mx-auto">
                  <img className={classes.UserIco} src={LogoIco} alt="User" />
                </div>
              </div>
              <div className="col-md-7">
                <h4 className="text-blue-dark">
                  <strong>
                    {first_name} {last_name}
                  </strong>
                </h4>
                <p className="mb-1">{address}</p>
                <p className="mb-1">
                  <i className={`fa fa-map-marker ${classes.IconMap}`}></i>
                  {city}
                </p>
                <p className="mb-1">{role}</p>
                <Link to="/teacher/edit-profile">
                  <button className="btn btn-danger my-5 mx-5 px-5 ml-auto">
                    <FormattedMessage
                      id="app.profile.edit_profile"
                      defaultMessage="Edit profile"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
