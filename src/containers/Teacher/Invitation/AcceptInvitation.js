import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import AuthHeader from '../../../components/Common/Header/AuthHeader/AuthHeader'
import SubAuthHeader from '../../../components/Common/Header/AuthHeader/SubHeader'
import TeacherInvitationForm from '../../../components/Teachers/Invitation/InvitationForm.js'

class AcceptInvitation extends Component {
  constructor(props) {
    super(props)
    const path = props.location.pathname
    const token = path.split('/').pop(-1)
    this.state = {
      token: token,
      visible: false
    }
  }

  closeAlertLater = _ => {
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false })
      }, 10000)
    })
  }

  onSubmit = event => {
    event.preventDefault()
    let age = event.target.age.value.trim()
    let city = event.target.city.value.trim()
    let password = event.target.password.value.trim()
    let confirm_password = event.target.confirm_password.value.trim()
    const data = {
      age: age,
      city: city,
      password: password,
      password_confirmation: confirm_password,
      invitation_token: this.state.token
    }
    this.props.acceptInvitation(data)
    this.closeAlertLater()
  }

  render() {
    return (
      <>
        <div style={{ backgroundColor: '#230871' }}>
          <AuthHeader />
          <section className="pt-8">
            <div className="container pt-5">
              <div className="row justify-content-center">
                <SubAuthHeader />
                <div className="w-100"></div>
                <TeacherInvitationForm
                  handleSubmit={this.onSubmit}
                  successMessage={this.props.auth.invitation_success}
                  alertMessage={this.props.auth.invitation_failure}
                  visible={this.state.visible}
                />
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    acceptInvitation: userData => dispatch(actions.acceptInvitation(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptInvitation)
