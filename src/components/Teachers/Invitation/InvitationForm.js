import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import classes from '../../Authenticate/TeacherSignUp/TeacherForm.module.scss'

const TeacherInvitationForm = ({
  handleSubmit,
  successMessage,
  alertMessage,
  visible
}) => {
  return (
    <>
      <div className={`container ${classes.SignUpContainer}`}>
        <div className="row justify-content-center">
          <div className="col-11 col-md-7">
            <div className="card card-login mt-5">
              <div className={`card-body ${classes.form_container}`}>
                <div className="row justify-content-center">
                  <div className="col-10">
                    <div className="row justify-content-center mb-4">
                      {visible && (
                        <strong>
                          <h3 className="text-white">Accept Invitation</h3>
                          {alertMessage && (
                            <div className="text-alert text-center mb-3">
                              {alertMessage}
                            </div>
                          )}
                          {successMessage && (
                            <div className="text-success text-center mb-3">
                              {successMessage}
                              <Link to="/teacher/login" className="ml-2">
                                Login Here!
                              </Link>
                            </div>
                          )}
                        </strong>
                      )}
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>
                              <FormattedMessage
                                id="app.sign_up.age"
                                defaultMessage="Age"
                              />
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="100"
                              name="age"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group">
                            <label>
                              <FormattedMessage
                                id="app.sign_up.city"
                                defaultMessage="City"
                              />
                            </label>
                            <input
                              type="text"
                              name="city"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label>
                              <FormattedMessage
                                id="app.sign_up.password"
                                defaultMessage="Password"
                              />
                            </label>
                            <input
                              type="password"
                              pattern=".{6,}"
                              title="6 characters minimum"
                              name="password"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label>
                              <FormattedMessage
                                id="app.sign_up.confirm_password"
                                defaultMessage="Confirm Password"
                              />
                            </label>
                            <input
                              type="password"
                              name="confirm_password"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-auth d-block mx-auto text-uppercase"
                      >
                        <FormattedMessage
                          id="app.sign_up.accept_invitation"
                          defaultMessage="Accept Invitation"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherInvitationForm
