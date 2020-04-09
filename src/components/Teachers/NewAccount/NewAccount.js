import React from 'react'

import { FormattedMessage } from 'react-intl'
import NewAccountForm from './NewAccountForm'
import './NewAccount.scss'

const NewAccount = ({ goBack, handleSubmit }) => {
  return (
    <div className="mewaccount">
      <h5>
        <FormattedMessage
          id="app.teacher.newuser.title"
          defaultMessage="Edit User"
        />
      </h5>
      <hr />
      <NewAccountForm goBack={goBack} handleSubmit={handleSubmit} />
    </div>
  )
}

export default NewAccount
