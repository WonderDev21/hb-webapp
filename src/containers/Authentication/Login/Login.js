import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import AuthHeader from '../../../components/Common/Header/AuthHeader/AuthHeader'
import SubAuthHeader from '../../../components/Common/Header/AuthHeader/SubHeader'
import UserLogin from '../../../components/Authenticate/UserLogin/UserLogin'
import * as actions from '../../../store/actions/index'

class Login extends Component {
  state = {
    isLogged: false,
    role: ''
  }

  componentDidMount() {
    this.props.resetErrors()
  }

  handleSubmit = event => {
    event.preventDefault()

    let email = event.target[0].value.trim()
    let password = event.target[1].value.trim()

    const tokenData = {
      data: {
        type: 'token',
        attributes: {
          email: email,
          password: password
        }
      }
    }
    this.props.login(tokenData)
  }

  render() {
    const path = this.props.location.pathname
    const userType = path.split('/')[1]

    if (this.props.user.role === 'Teacher') {
      return <Redirect to="/teacher/dashboard" />
    } else if (this.props.user.role === 'Admin') {
      return <Redirect to="/admin/dashboard" />
    } else if (this.props.user.role === 'Student') {
      return <Redirect to="/student/kits" />
    }

    return (
      <div style={{ backgroundColor: '#230871', minHeight: '100%' }}>
        <AuthHeader />
        <section className="pt-8">
          <div className="container pt-5">
            <div className="row justify-content-center">
              <SubAuthHeader />
              <div className="w-100"></div>
              <UserLogin
                handleSubmit={this.handleSubmit}
                alertMessage={this.props.auth.authError}
                show={this.props.common.loading}
                userType={userType}
              />
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
    common: state.common,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetErrors: () => dispatch(actions.resetErrors()),
    login: tokenData => dispatch(actions.login(tokenData)),
    getUser: () => dispatch(actions.getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
