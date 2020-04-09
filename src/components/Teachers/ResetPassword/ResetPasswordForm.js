import React from 'react'
import { Row, Col, Label, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Formik, FastField, Form } from 'formik'
import * as Yup from 'yup'

import { FormInput } from '../../../components/Common/FormInput'
import { isPending } from '../../../lib/state'

import './ResetPassword.scss'

const validationSchema = Yup.object().shape({
  current_password: Yup.string().required('please! Current password?'),
  new_password: Yup.string().required('please! Current password?'),
  confirm_password: Yup.string().oneOf(
    [Yup.ref('new_password'), null],
    'please! Passwords must match'
  )
})

const ResetPasswordForm = props => {
  const state = useSelector(state => state.adminReducer.state)

  return (
    <Row className="justify-content-center">
      <Col lg="4">
        <Row className="mt-3">
          <Col>
            <label className="text-blue-dark" htmlFor="currentPassword">
              Current password
            </label>
            <input
              label="Complete your profile"
              type="password"
              className="form-control"
              name="currentPassword"
              defaultValue={props.current_password}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <label className="text-blue-dark" htmlFor="newPassword">
              New password
            </label>
            <input
              label="Complete your profile"
              type="password"
              className="form-control"
              name="newPassword"
              defaultValue={props.password}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <label className="text-blue-dark" htmlFor="passwordConfirmation">
              Password confirmation
            </label>
            <input
              label="Complete your profile"
              type="password"
              className="form-control"
              name="passwordConfirmation"
              defaultValue={props.password_confirmation}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ResetPasswordForm
