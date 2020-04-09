import React, { Component } from 'react'
import Footer from '../../../assets/img/Fill-1.png'
import BitmapConfirmCopy from '../../../assets/img/Bitmap_Copy.png'
import { Link } from 'react-router-dom'
import classes from './SchoolCodeForm.module.scss'

class Notifier extends Component {
  render() {
    const user = this.props.user

    return (
      <>
        <div className={`${classes.Container}`}>
          <div className="row justify-content-center">
            <div className="col-11 col-md-7">
              <div className="card card-login mt-5">
                <div className={`card-body ${classes.code_form_container}`}>
                  <div className="row col text-center justify-content-center">
                    <img src={BitmapConfirmCopy} alt="bitmap" />
                    <label className="ml-3 mt-3">
                      {user.schoolCodeVerify ? (
                        <React.Fragment>
                          <strong>Bravo! Your account was verified.</strong>
                          <br />
                          <strong>You can now access premium content.</strong>
                        </React.Fragment>
                      ) : (
                        <strong>
                          Invalid Code! Your School code is not Verified!
                        </strong>
                      )}
                    </label>
                  </div>
                  <div className="row justify-content-center">
                    <Link
                      to={
                        user.schoolCodeVerify
                          ? '/teacher/dashboard'
                          : '/teacher/school-code'
                      }
                    >
                      <button
                        className={`col-sm-12 pt-3 pb-3 text-uppercase text-white ${classes.btn_custom}`}
                      >
                        {user.schoolCodeVerify
                          ? 'Account Verified!'
                          : 'Verify School Code'}
                      </button>
                    </Link>
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

export default Notifier
