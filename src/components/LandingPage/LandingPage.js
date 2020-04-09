import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'

import AuthHeader from '../Common/Header/AuthHeader/AuthHeader'
import SubAuthHeader from '../Common/Header/AuthHeader/SubHeader'
import { ReactComponent as LogoStudent } from '../../assets/img/logo_student.svg'
import { ReactComponent as LogoTeacher } from '../../assets/img/logo_teacher.svg'
import IconLogos from '../../assets/img/icon-logos-white.png'
import classes from './LandingPage.module.scss'

function validateRole(role) {
  if (role === 'Teacher') {
    return '/teacher/dashboard'
  } else if (role === 'Student') {
    return '/student/kits'
  }
}

const LandingPage = ({ auth, user }) => {
  const routeDashboard = validateRole(user.role)
  return (
    <>
      {auth.isLogged && <Redirect to={routeDashboard} />}
      <AuthHeader />
      <div className={`section__landing pt-8 ${classes.Background}`}>
        <div className={`container ${classes.LandingTop}`}>
          <div className="row justify-content-center">
            <SubAuthHeader />
            <div className={`col-10 ${classes.SignUpAs}`}>
              <div className="row justify-content-center">
                <div
                  className={`col-4 col-sm-3 col-md-4 ${classes.card__logo}`}
                >
                  <Link to="/student/login">
                    <div />
                    <div />
                    <div />
                    <LogoStudent className="d-block mx-auto img-fluid" />
                    <div />
                    <h4 className="text-center text-blue-dark fw-800 mt-4">
                      <FormattedMessage
                        id="app.landing_page.student"
                        defaultMessage="Student"
                      />
                    </h4>
                  </Link>
                </div>
                <div
                  className={`col-4 col-sm-3 col-md-4 ${classes.card__logo}`}
                >
                  <Link to="/teacher/login">
                    <div />
                    <div />
                    <div />
                    <LogoTeacher className="d-block mx-auto img-fluid" />
                    <div />
                    <h4 className="text-center text-blue-dark fw-800 mt-4">
                      <FormattedMessage
                        id="app.landing_page.teacher"
                        defaultMessage="Teacher"
                      />
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 mt-6">
              <img
                className="d-block mx-auto mt-4 mb-8"
                src={IconLogos}
                alt="Heartbit Logos"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
})

export default connect(mapStateToProps)(LandingPage)
