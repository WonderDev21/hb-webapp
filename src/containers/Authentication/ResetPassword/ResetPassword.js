import React, { Component } from 'react'
import { connect } from 'react-redux'

import AuthHeader from '../../../components/Common/Header/AuthHeader/AuthHeader'
import SubAuthHeader from '../../../components/Common/Header/AuthHeader/SubHeader'
import * as actions from '../../../store/actions/index'
import ResetPasswordForm from '../../../components/Authenticate/PasswordRecovery/ResetPasswordForm/ResetPasswordForm'
import LoginHere from '../../../components/Authenticate/PasswordRecovery/LoginHere/LoginHere'

class ResetPassword extends Component {
  componentDidMount() {
    this.props.resetErrors()
  }

  render() {
    return (
      <div style={{ backgroundColor: '#230871', minHeight: '100%' }}>
        <AuthHeader />
        <section className="pt-8">
          <div className="container pt-5">
            <div className="row justify-content-center">
              <SubAuthHeader />
              <div className="w-100"></div>
              <ResetPasswordForm
                recoveryEmail={this.props.recoveryEmail}
                show={this.props.common.loading}
                errorMessage={this.props.auth.authError}
                successMessage={this.props.auth.authSuccess}
              />
              <LoginHere />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    common: state.common
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetErrors: () => dispatch(actions.resetErrors()),
    recoveryEmail: email => dispatch(actions.recoveryEmail(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
