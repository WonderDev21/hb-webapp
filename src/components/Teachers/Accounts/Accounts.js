import React from 'react'
import { Table, Button } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { FaPen } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

import IconButton from '../../../components/Common/IconButton'

import image1 from '../../../assets/img/profileDefault.svg'

import './Accounts.scss'

const Accounts = ({
  onSelectUser,
  onClickNewUser,
  invitedUsers,
  deleteinvitation,
  onSelectUserObject
}) => {
  return (
    <div className="accounts">
      <div className="accounts__newuser">
        <Button className="btn-auth" color="auth" onClick={onClickNewUser}>
          <FormattedMessage
            id="app.teacher.editprofile.newuser"
            defaultMessage="New User"
          />
        </Button>
      </div>
      <Table striped className="accounts__table">
        <tbody>
          {invitedUsers &&
            invitedUsers.map((user, index) => {
              return (
                <tr>
                  <td>
                    <img src={image1} />{' '}
                    <span className="ml-3 font-weight-bold">
                      {user.attributes.first_name} {user.attributes.last_name}
                    </span>
                  </td>
                  <td className="accounts__email">{user.attributes.email}</td>
                  {!user.attributes.invitation_accepted_at && (
                    <td>
                      <IconButton
                        icon={
                          <FaPen size="14px" style={{ color: '#FFFFFF' }} />
                        }
                        background="grey"
                        onClick={() => onSelectUserObject(user)}
                      />
                      <IconButton
                        icon={
                          <IoMdClose size="14px" style={{ color: '#FFFFFF' }} />
                        }
                        background="red"
                        className="ml-2"
                        onClick={() => deleteinvitation(user.id)}
                      />
                    </td>
                  )}
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default Accounts
