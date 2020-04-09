import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthHeader from '../../../components/Common/Header/AuthHeader/AuthHeader';
import SubAuthHeader from '../../../components/Common/Header/AuthHeader/SubHeader';
import * as actions from '../../../store/actions/index';
import RecoverPasswordForm from '../../../components/Authenticate/PasswordRecovery/RecoverPasswordForm/RecoverPasswordForm';
import LoginHere from '../../../components/Authenticate/PasswordRecovery/LoginHere/LoginHere';

class RecoverPassword extends Component {

  componentDidMount () {
    this.props.resetErrors();
  }

  handleResetPassword = (password, confirm_password) => {
    let phrase = this.props.location.search
    let token = phrase.split('=').pop(-1)
    
    this.props.recoveryPassword(token, password, confirm_password)
  }

  render() {
    return (
      <>
        <AuthHeader />
        <section className="pt-8">
          <div className="container pt-5">
            <div className="row justify-content-center">
              <SubAuthHeader />
              <div className="w-100"></div>
              <RecoverPasswordForm
                passwordsDontMatch={this.props.passwordsDontMatch}
                errorMessage={this.props.auth.authError}
                successMessage={this.props.auth.authSuccess}
                handleResetPassword={this.handleResetPassword}
              />
              <LoginHere />
            </div>
          </div>
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetErrors: () => dispatch(actions.resetErrors()),
    passwordsDontMatch: () => dispatch(actions.passwordsDontMatch()),
    recoveryPassword: (token, password, confirmPassword) => dispatch(actions.recoveryPassword(token, password, confirmPassword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
