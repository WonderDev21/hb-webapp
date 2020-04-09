import React from 'react'

import { FormattedMessage } from 'react-intl'
import EditAccountForm from './EditAccountForm'
import './EditAccount.scss'

const EditAccount = ({
  goBack,
  deleteinvitation,
  selectedUserObject,
  updateinvitation,
  user
}) => {
  return (
    <div className="editaccount">
      <h5>
        <FormattedMessage
          id="app.teacher.editprofile.title"
          defaultMessage="Edit User"
        />
      </h5>
      <hr />
      <EditAccountForm
        goBack={goBack}
        deleteinvitation={deleteinvitation}
        selectedUserObject={selectedUserObject}
        updateinvitation={updateinvitation}
        user={user}
      />
    </div>
  )
}

export default EditAccount
