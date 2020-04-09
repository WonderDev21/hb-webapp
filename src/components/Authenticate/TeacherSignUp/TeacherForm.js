import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import classes from './TeacherForm.module.scss';
import Modal from '../../Common/Modal/Modal/Modal';
import GoBackImg from '../../../assets/img/go-back-white.png';
import Terms from '../Terms/Terms';

class TeacherForm extends Component {
  state = {
    readTerms: false,
    terms_accepted: false,
    form: null
  }

  openTermsModal = () => {
    this.setState({ readTerms: true })
  }

  closeModal = () => {
    this.setState({ readTerms: false })
  }

  agreeTerms = () => {
    const { handleSubmit } = this.props;
    const { form } = this.state;
    if (form) {
      this.setState({ terms_accepted: true })
      handleSubmit(form);
    } 
    this.closeModal();
  }

  disagreeTerms = () => {
    this.setState({ terms_accepted: false })
    this.closeModal()
    
  }

  openModalTerms = (event) => {
    event.preventDefault();
    const { currentTarget: form } = event;
    this.setState({ form: form })
    this.openTermsModal()
  }

  render() {
    const { show, alertMessage } = this.props;
    return (
      <>
        <Modal
          show={this.state.readTerms}
          modalClosed={this.closeModal}
        >
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
                  <Link to="/" className={classes.linkGoBack} >
                    <img src={GoBackImg} alt='Go back' />
                    <p className={classes.GoBack}><FormattedMessage id="app.teacher_auth_header.go_back" defaultMessage="Go back" /></p>
                  </Link>
                </div>
                <div className={`card-body ${classes.form_container}`}>
                  <div className="row justify-content-center">
                    <div className="col-10">
                      <div className="py-3">
                        <ul className="list-inline text-white">
                          <li className="list-inline-item">
                            <Link className={classes.LogInLink} to='/teacher/login'>
                              <FormattedMessage id="app.login.entry" defaultMessage="Entry" />
                            </Link>
                          </li>
                          <li className={`list-inline-item ${classes.LinkActive}`}>
                            <FormattedMessage id="app.teacher_sign_up.sign_up" defaultMessage="Registry" />
                          </li>
                        </ul>
                      </div>
                      <form onSubmit={this.openModalTerms}>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                <FormattedMessage id="app.sign_up.first_name" defaultMessage="First Name" />
                              </label>
                              <input type="text" name="first_name" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                <FormattedMessage id="app.sign_up.last_name" defaultMessage="Last Name" />
                              </label>
                              <input type="text" name="last_name" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label>
                                <FormattedMessage id="app.sign_up.email" defaultMessage="Email" />
                              </label>
                              <input type="email" name="email" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label>
                                <FormattedMessage id="app.sign_up.age" defaultMessage="Age" />
                              </label>
                              <input type="number" min="1" max="100" name="age" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="form-group">
                              <label>
                                <FormattedMessage id="app.sign_up.city" defaultMessage="City" />
                              </label>
                              <input type="text" name="city" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label>
                                <FormattedMessage id="app.sign_up.password" defaultMessage="Password" />
                              </label>
                              <input type="password" pattern=".{6,}" title="6 characters minimum" name="password" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label>
                                <FormattedMessage id="app.sign_up.confirm_password" defaultMessage="Confirm Password" />
                              </label>
                              <input type="password" name="confirm_password" className="form-control" required />
                            </div>
                          </div>
                          <div className="col-12">
                            {
                              alertMessage &&
                              <p className="text-danger text-uppercase text-center ion-text">
                                <FormattedMessage id={`app.authentication.${alertMessage}`} defaultMessage="Passwords don't match" />
                              </p>
                            }
                            {
                              show && (
                                <div className="d-flex justify-content-center">
                                  <div className="spinner-grow text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                  </div>
                                </div>
                              )
                            }
                          </div>
                        </div>
                        <button type="submit" className="btn btn-auth d-block mx-auto text-uppercase">
                          <FormattedMessage id="app.sign_up.sign_up_buton" defaultMessage="Sign Up" />
                        </button>
                      </form>
                      <p
                        className="text-center mt-3">
                        <FormattedMessage
                          id="app.sign_up.accept_terms"
                          defaultMessage="By sign up you’re accepting our"
                        />
                        <button className={classes.Terms} onClick={this.openTermsModal}>
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
    );
  }
}

export default TeacherForm;
