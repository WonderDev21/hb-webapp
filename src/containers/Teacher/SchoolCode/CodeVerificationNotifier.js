import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import TeacherHeader from '../../../components/Common/Header/TeacherHeader/TeacherHeader'
import Notifier from '../../../components/Teachers/TeacherSchoolCode/Notifier.js'
import { getCookie } from '../../../utils/Cookies'

class CodeVerificationNotifier extends Component {
  componentDidMount() {
    const token = getCookie('hbtoken_30')
    this.props.getUser(token)
  }

  render() {
    const user = this.props.user
    return (
      <>
        <TeacherHeader />
        {user && <Notifier user={user} />}
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
    getUser: token => dispatch(actions.getUser(token))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeVerificationNotifier)
