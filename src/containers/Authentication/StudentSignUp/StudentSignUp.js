import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import StudentForm from '../../../components/Authenticate/StudentSignUp/StudentForm'
import AuthHeader from '../../../components/Common/Header/AuthHeader/AuthHeader'
import SubAuthHeader from '../../../components/Common/Header/AuthHeader/SubHeader'
import * as actions from '../../../store/actions/index'

class StudentSignUp extends Component {
  state = {
    terms: true,
    alertMessage: '',
    role: 'Student'
  }

  componentDidMount() {
    this.props.resetErrors()
  }

  handleSubmit = event => {
    event.preventDefault()

    let first_name = event.target[0].value.trim()
    let last_name = event.target[1].value.trim()
    let email = event.target[2].value.trim()
    let age = event.target[3].value.trim()
    let city = event.target[4].value.trim()
    let password = event.target[5].value.trim()
    let confirm_password = event.target[6].value.trim()

    if (password !== confirm_password) {
      return this.setState({
        alertMessage: (
          <p className="text-danger text-uppercase text-center ion-text">
            <FormattedMessage
              id="app.authentication.password_dont_match"
              defaultMessage="Passwords don't match"
            />
          </p>
        )
      })
    }

    const data = {
      data: {
        type: 'users',
        attributes: {
          email: email,
          first_name: first_name,
          last_name: last_name,
          age: age,
          city: city,
          terms_accepted: this.state.terms,
          password: password,
          password_confirmation: confirm_password,
          role: this.state.role
        }
      }
    }

    const tokenData = {
      data: {
        type: 'token',
        attributes: {
          email: email,
          password: password
        }
      }
    }

    this.props.register(data, tokenData)
  }

  render() {
    if (this.props.auth.isLogged) {
      return <Redirect to="/onboarding" />
    }

    return (
      <div style={{ backgroundColor: '#230871' }}>
        <AuthHeader />
        <section className="pt-8">
          <div className="container pt-5">
            <div className="row justify-content-center">
              <SubAuthHeader />
              <div className="w-100"></div>
              <StudentForm
                alertMessage={this.state.alertMessage}
                handleSubmit={this.handleSubmit}
                show={this.props.common.loading}
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
    common: state.common
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (data, tokenData) => dispatch(actions.register(data, tokenData)),
    resetErrors: () => dispatch(actions.resetErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentSignUp)
