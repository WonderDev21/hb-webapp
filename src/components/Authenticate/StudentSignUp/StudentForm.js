import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import classes from './StudentForm.module.scss'
import Modal from '../../Common/Modal/Modal/Modal'
import Terms from '../Terms/Terms'

class StudentForm extends Component {
  state = {
    readTerms: false,
    terms_accepted: true
  }

  openTermsModal = () => {
    this.setState({ readTerms: true })
  }

  closeModal = () => {
    this.setState({ readTerms: false })
  }

  agreeTerms = () => {
    this.setState({ terms_accepted: true })
    this.closeModal()
  }

  disagreeTerms = () => {
    this.setState({ terms_accepted: false })
    this.closeModal()
  }

  render() {
    return (
      <>
        <Modal show={this.state.readTerms} modalClosed={this.closeModal}>
          <Terms
            agreeTerms={this.agreeTerms}
            disagreeTerms={this.disagreeTerms}
            closeModal={this.closeModal}
          />
        </Modal>
        <div className={`container ${classes.SignUpContainer}`}>
          <div className="row justify-content-center">
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
                    <li className="list-inline-item">
                      <Link className={classes.LogInLink} to="/student/login">
                        <FormattedMessage
                          id="app.login.login"
                          defaultMessage="Login"
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item active">
                      <FormattedMessage
                        id="app.student_sign_up.sign_up"
                        defaultMessage="Sign up"
                      />
                    </li>
                  </ul>
                </div>
                <div className={`card-body ${classes.form_container}`}>
                  <div className="row justify-content-center">
                    <div className="col-10">
                      <form onSubmit={this.props.handleSubmit}>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                <FormattedMessage
                                  id="app.sign_up.first_name"
                                  defaultMessage="First Name"
                                />
                              </label>
                              <input
                                type="text"
                                name="first_name"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                <FormattedMessage
                                  id="app.sign_up.last_name"
                                  defaultMessage="Last Name"
                                />
                              </label>
                              <input
                                type="text"
                                name="last_name"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>
                                <FormattedMessage
                                  id="app.sign_up.email"
                                  defaultMessage="Email"
                                />
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
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
                            {this.props.alertMessage}
                            {this.props.show && (
                              <div className="d-flex justify-content-center">
                                <div
                                  className="spinner-grow text-primary"
                                  role="status"
                                >
                                  <span className="sr-only">Loading...</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-auth d-block mx-auto px-4 text-uppercase"
                        >
                          <FormattedMessage
                            id="app.sign_up.sign_up_buton"
                            defaultMessage="Sign Up"
                          />
                        </button>
                      </form>

                      <p className="text-center mt-3">
                        <FormattedMessage
                          id="app.sign_up.accept_terms"
                          defaultMessage="By sign up you’re accepting our"
                        />
                        <button
                          className={classes.Terms}
                          onClick={this.openTermsModal}
                        >
                          <FormattedMessage
                            id="app.sign_up.terms_and_conditions"
                            defaultMessage="Terms & Conditions"
                          />
                        </button>
                      </p>
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
}

export default StudentForm
