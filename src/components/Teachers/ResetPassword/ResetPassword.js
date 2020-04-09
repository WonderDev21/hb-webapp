import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Row, Col, Label, Button } from 'reactstrap'

import { Link } from 'react-router-dom'
import ResetPasswordForm from './ResetPasswordForm'
import './ResetPassword.scss'

const ResetPassword = props => {
  const handleSubmit = event => {
    event.preventDefault()

    let current_password = event.target.currentPassword.value.trim()
    let password = event.target.newPassword.value.trim()
    let password_confirmation = event.target.passwordConfirmation.value.trim()

    const data = {
      current_password,
      password,
      password_confirmation
    }

    props.updatePassword(data)
  }
  return (
    <div className="resetpassword">
      <h5>
        <FormattedMessage
          id="app.teacher.editprofile.resetpassword.resetpassword"
          defaultMessage="Reset Password"
        />
      </h5>
      <hr />
      <form onSubmit={handleSubmit}>
        <ResetPasswordForm updatePassword={props.updatePassword} />
        <Row className="justify-content-center text-center mt-5 mb-5">
          <Col>
            <button type="submit" className="btn btn-primary mx-2">
              Save changes
            </button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default ResetPassword
