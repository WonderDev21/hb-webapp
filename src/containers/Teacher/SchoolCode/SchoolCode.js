import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import TeacherHeader from '../../../components/Common/Header/TeacherHeader/TeacherHeader'
import SchoolCodeForm from '../../../components/Teachers/TeacherSchoolCode/SchoolCodeForm'
import { getCookie } from '../../../utils/Cookies'
import { Redirect } from 'react-router-dom'

class SchoolCode extends Component {
  componentDidMount() {
    const token = getCookie('hbtoken_30')
    this.props.getUser(token)
  }

  handleSubmit = code => {
    this.props.verifySchoolCode(code, this.props.user.userId)
  }

  handleResendCode = email => {
    this.props.requestCode(email, this.props.user.userId)
    //this.props.history.push('/teacher/school-code-notifier')
  }

  render() {
    if (
      this.props.user.codeVerified ||
      this.props.user.codefailed ||
      this.props.user.schoolCodeVerify
    ) {
      this.props.user.codeVerified = false
      this.props.user.codefailed = false
      return <Redirect to="/teacher/school-code-notifier" />
    }
    return (
      <>
        <TeacherHeader />
        <SchoolCodeForm
          handleSubmit={this.handleSubmit}
          handleResendCode={this.handleResendCode}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: token => dispatch(actions.getUser(token)),
    verifySchoolCode: (data, userId) =>
      dispatch(actions.verifySchoolCode(data, userId)),
    requestCode: (formDate, userId) =>
      dispatch(actions.requestCode(formDate, userId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SchoolCode)
