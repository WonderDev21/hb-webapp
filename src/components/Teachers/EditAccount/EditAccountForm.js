import React from 'react'
import { Row, Col, Label, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Formik, FastField, Form } from 'formik'
import * as Yup from 'yup'

import { FormInput } from '../../../components/Common/FormInput'
import { isPending } from '../../../lib/state'
import AccountDeleteModal from '../AccountDeleteModal'

import './EditAccount.scss'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('please! Email?')
    .email("Welp, that's not an email"),
  first_name: Yup.string()
    .required('please! First Name?')
    .min(3, "That can't be very secure"),
  last_name: Yup.string()
    .required('please! Last Name?')
    .min(4, "That can't be very secure")
})

const EditAccountForm = ({
  goBack,
  deleteinvitation,
  selectedUserObject,
  updateinvitation,
  user
}) => {
  const state = useSelector(state => state.adminReducer.state)

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    updateinvitation(values, user.userId)
    setSubmitting(false)
  }

  return (
    <div>
      <Row className="justify-content-center">
        <Col lg="8">
          <Formik
            initialValues={{
              invitation_id: selectedUserObject.id,
              first_name: selectedUserObject.attributes.first_name,
              last_name: selectedUserObject.attributes.last_name,
              email: selectedUserObject.attributes.email
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            render={({ handleSubmit, isValid }) => (
              <Form onSubmit={handleSubmit} name="LoginForm">
                <Row>
                  <Col>
                    <Label for="first_name" className="text-left">
                      <FormattedMessage
                        id="app.sign_up.first_name"
                        defaultMessage="Email"
                      />
                    </Label>
                    <FastField
                      name="first_name"
                      type="text"
                      component={FormInput}
                    />
                  </Col>
                  <Col>
                    <Label for="first_name" className="text-left">
                      <FormattedMessage
                        id="app.sign_up.last_name"
                        defaultMessage="Email"
                      />
                    </Label>
                    <FastField
                      name="last_name"
                      type="text"
                      component={FormInput}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Label for="first_name" className="text-left">
                      <FormattedMessage
                        id="app.sign_up.email"
                        defaultMessage="Email"
                      />
                    </Label>
                    <FastField
                      name="email"
                      type="email"
                      component={FormInput}
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <AccountDeleteModal
                      onOkClick={goBack}
                      deleteinvitation={deleteinvitation}
                      userId={selectedUserObject.id}
                    />
                  </Col>
                </Row>

                <Row className="text-center mt-5 mb-5">
                  <Col>
                    <Button
                      type="button"
                      className="btn-secondary text-uppercase float-right "
                      color="secondary"
                      size="sm"
                      onClick={goBack}
                    >
                      Back to dashboard
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="submit"
                      className="btn-primary text-uppercase float-left"
                      color="primary"
                      size="sm"
                      disabled={!isValid || isPending(state)}
                    >
                      {isPending(state) ? (
                        <div className="d-flex justify-content-center">
                          <div
                            className="spinner-grow text-primary"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      ) : (
                        'Save changes'
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          />
        </Col>
      </Row>
    </div>
  )
}

export default EditAccountForm
