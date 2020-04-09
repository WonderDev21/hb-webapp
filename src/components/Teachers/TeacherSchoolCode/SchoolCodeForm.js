import React, { Component } from 'react'
import ReactCodeInput from 'react-verification-code-input'
import BitmapConfirm from '../../../assets/img/Bitmap.png'
import Footer from '../../../assets/img/Fill-1.png'
import { Link } from 'react-router-dom'
import classes from './SchoolCodeForm.module.scss'

class SchoolCodeForm extends Component {
  constructor() {
    super()
    this.state = {
      codeInput: ''
    }
    this.handleRequestCode = this.handleRequestCode.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
    this.handleVerify = this.handleVerify.bind(this)
  }

  handleRequestCode(event) {
    event.preventDefault()
    let email = event.target.email.value
    this.props.handleResendCode(email)
  }

  handleComplete(code) {
    this.setState({ codeInput: code })
  }

  handleVerify() {
    this.props.handleSubmit(this.state.codeInput)
  }

  render() {
    return (
      <>
        <div className={`${classes.Container}`}>
          <div className="row justify-content-center">
            <div className="col-11 col-md-7">
              <Link to="/teacher/dashboard" className="simple">
                <h3 className="d-flex fw-700 mt-3 mt-sm-5 mb-5">
                  <i
                    className={`fa fa-chevron-left mr-2 ${classes.bg_purple}`}
                  ></i>{' '}
                  <span className={`${classes.span_style}`}>
                    Back to workspace
                  </span>
                </h3>
              </Link>
              <div className="card card-login mt-5">
                <div className={`card-body ${classes.code_form_container}`}>
                  <div className="row">
                    <form>
                      <div className="form-group row">
                        <img src={BitmapConfirm} alt="bitmap" />
                        <div className={`${classes.heading_bg_image}`}>
                          <label className="col-form-label col text-center">
                            <strong>Confirm your account</strong>
                            <br />
                            (please check your inbox!)
                          </label>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-sm-12 col-form-label">
                          Please type your school code send via email:
                        </label>
                      </div>
                      <div className="form-group row">
                        <ReactCodeInput onComplete={this.handleComplete} />
                        <input
                          type="button"
                          className={`col-sm-3 text-uppercase text-white ${classes.btn_custom}`}
                          value="Verify"
                          onClick={this.handleVerify}
                        />
                      </div>
                    </form>
                    <form
                      onSubmit={this.handleRequestCode}
                      id="request_verification_form"
                    >
                      <div className="form-group row">
                        <label className="col-form-label">
                          You did not get the code? Please rewrite your email:
                        </label>
                      </div>
                      <div class="form-group row ">
                        <input
                          type="text"
                          name="email"
                          class="col-sm-8 form-control"
                          required
                        />
                        <input
                          type="submit"
                          className={`col-sm-3 text-uppercase text-white ${classes.btn_custom_resend}`}
                          value="Request Code"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Footer} alt="footer" className={`${classes.footer}`} />
          </div>
        </div>
      </>
    )
  }
}

export default SchoolCodeForm
