import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import classes from './UserLogin.module.scss'

const UserLogin = ({ handleSubmit, alertMessage, show, userType }) => {
  UserLogin.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    alertMessage: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
  }

  return (
    <>
      <div className="col-11 col-md-7">
        <div className="card card-login mt-5">
          <div className="card-header bg-dark-purple py-3">
            <Link to="/">
              <p className={classes.GoBack}>
                <FormattedMessage
                  id="app.sub_auth_header.go_back"
                  defaultMessage="Go back"
                />
              </p>
            </Link>
            <ul className="list-inline text-white">
              <li className="list-inline-item active">
                <FormattedMessage id="app.login.login" defaultMessage="Login" />
              </li>
              <li className="list-inline-item">
                <Link
                  className={classes.SignUpLink}
                  to={`/${userType}/sign-up`}
                >
                  <FormattedMessage
                    id="app.student_sign_up.sign_up"
                    defaultMessage=" Sign up"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className={`card-body no-border pb-5 ${classes.form_container}`}>
            <div className="row justify-content-center">
              <div className="col-10">
                <p className="text-danger text-center mb-3 text-uppercase"></p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      <FormattedMessage
                        id="app.sign_up.email"
                        defaultMessage=" Email"
                      />
                    </label>
                    <input type="email" className="form-control" name="email" />
                  </div>
                  <div className="form-group">
                    <label>
                      <FormattedMessage
                        id="app.sign_up.password"
                        defaultMessage=" Password"
                      />
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                    <Link to="/reset-password">
                      <p className="form-text text-white text-right">
                        <FormattedMessage
                          id="app.login.forgot_password"
                          defaultMessage="Forgot your password?"
                        />
                      </p>
                    </Link>
                  </div>
                  {alertMessage && (
                    <div className="text-alert text-center mb-3">
                      {alertMessage}
                    </div>
                  )}
                  {show && (
                    <div className="d-flex justify-content-center mb-3">
                      <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                  <button className="btn btn-auth d-block mx-auto px-4 text-uppercase">
                    <FormattedMessage
                      id="app.login.login_button"
                      defaultMessage="Login"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-10 mt-5"></div>
      <div className="w-100"></div>
    </>
  )
}

export default UserLogin
