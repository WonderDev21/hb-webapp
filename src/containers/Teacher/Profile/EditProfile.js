import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import * as actions from '../../../store/actions/index'
import { getCookie } from '../../../utils/Cookies'
import TeacherHeader from '../../../components/Common/Header/TeacherHeader/TeacherHeader'
import ProfileForm from '../../../components/Teachers/ProfileForm/ProfileForm'
import Accounts from '../../../components/Teachers/Accounts'
import EditAccount from '../../../components/Teachers/EditAccount'
import NewAccount from '../../../components/Teachers/NewAccount'
import Billing from '../../../components/Teachers/Billing'
import ResetPassword from '../../../components/Teachers/ResetPassword'
import classes from './EditProfile.module.scss'

import Tabs from '../../../components/Common/TabsWithKey/Tabs'

const EditProfile = ({
  user,
  invited_users,
  getUser,
  editUserProfile,
  updatePassword,
  cancelSubscription,
  inviteTeacher,
  getInvitedUsers,
  deleteInvitation,
  updateInvitation,
  auth
}) => {
  const [selectedUserObject, setSelectedUserObject] = useState(null)
  const [newUserStatus, setNewUserStatus] = useState(false)

  useEffect(() => {
    const token = getCookie('hbtoken_30')
    getUser(token)
    getInvitedUsers(token)
  }, [])

  const onSelectUserObject = user => {
    setSelectedUserObject(user)
  }

  const ondeleteUser = id => {
    deleteInvitation(id)
  }

  if (user.editSuccess) {
    user.editSuccess = false
    return <Redirect to="/teacher/profile" />
  }

  if (auth.invitationsend) {
    auth.invitationsend = false
    return <Redirect to="/teacher/profile" />
  }

  return (
    <>
      <TeacherHeader />
      <div
        className={classes.section__profile}
        style={{ padding: '20px', paddingLeft: '50px', paddingRight: '50px' }}
      >
        <Tabs defaultTabIndex={3}>
          <div
            label={
              <FormattedMessage
                id="app.teacher.user-information"
                defaultMessage="User information"
              />
            }
            key={'user-information-tab'}
          >
            <ProfileForm
              first_name={user.firstName}
              last_name={user.lastName}
              address={user.address}
              city={user.city}
              age={user.age}
              user={user}
              editUserProfile={editUserProfile}
            />
          </div>
          <div
            label={
              <FormattedMessage
                id="app.teacher.account-access"
                defaultMessage="Account access"
              />
            }
            key={'account-access-tab'}
          >
            {selectedUserObject === null && !newUserStatus ? (
              <Accounts
                onClickNewUser={() => setNewUserStatus(true)}
                invitedUsers={invited_users}
                deleteinvitation={deleteInvitation}
                onSelectUserObject={onSelectUserObject}
              />
            ) : (
              selectedUserObject !== null &&
              !newUserStatus && (
                <EditAccount
                  goBack={() => setSelectedUserObject(null)}
                  deleteinvitation={deleteInvitation}
                  selectedUserObject={selectedUserObject}
                  updateinvitation={updateInvitation}
                  user={user}
                />
              )
            )}
            {newUserStatus && (
              <NewAccount
                goBack={() => setNewUserStatus(false)}
                handleSubmit={inviteTeacher}
              />
            )}
          </div>
          <div
            label={
              <FormattedMessage
                id="app.teacher.billing-information"
                defaultMessage="Billing information"
              />
            }
            key={'third-tab'}
          >
            <Billing cancelSubscription={cancelSubscription} />
          </div>
          <div
            label={
              <FormattedMessage
                id="app.teacher.reset-password"
                defaultMessage="Reset password"
              />
            }
            key={'reset-password-tab'}
          >
            <ResetPassword updatePassword={updatePassword} />
          </div>
        </Tabs>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    invited_users: state.user.invitedUsers,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: token => dispatch(actions.getUser(token)),
    editUserProfile: userData => dispatch(actions.editUserProfile(userData)),
    updatePassword: data => dispatch(actions.updatePassword(data)),
    cancelSubscription: _ => dispatch(actions.cancelSubscription()),
    inviteTeacher: user => dispatch(actions.inviteTeacher(user)),
    getInvitedUsers: token => dispatch(actions.getInvitedUsers(token)),
    deleteInvitation: id => dispatch(actions.deleteInvitation(id)),
    updateInvitation: (id, data) => dispatch(actions.updateInvitation(id, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
