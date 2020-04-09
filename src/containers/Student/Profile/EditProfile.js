import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from '../../../store/actions/index'
import { getCookie } from '../../../utils/Cookies'
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader'
import EditProfileForm from './EditProfileForm'

class EditProfile extends Component {
  state = {
    current_password: '',
    password: '',
    password_confirmation: ''
  }

  componentDidMount = () => {
    const token = getCookie('hbtoken_30')
    this.props.getUser(token)
  }

  updatePassword = _ => {
    const paquetePass = {
      current_password: '1234567',
      password: '123456',
      password_confirmation: '123456'
    }
    this.props.updatePassword(paquetePass)
  }

  onEditUserProfile = data => {
    console.log({ data: data })
    this.props.editUserProfile({ data: data })
  }

  render() {
    if (this.props.user.editSuccess) {
      return <Redirect to="/student/profile" />
    }
    return (
      <>
        <StudentHeader active={'user'} />
        <EditProfileForm
          userInfo={this.props.user}
          submitData={this.onEditUserProfile}
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
    editUserProfile: userData => dispatch(actions.editUserProfile(userData)),
    updatePassword: data => dispatch(actions.updatePassword(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
