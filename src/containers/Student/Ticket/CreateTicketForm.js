import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Label,
  Button,
  FormGroup
} from 'reactstrap'
import { Formik, FastField, Form } from 'formik'
import * as Yup from 'yup'

import { FormInput } from '../../../components/Common/FormInput'
import FormSelect from '../../../components/Common/FormSelect'
import BasicRadio from '../../../components/Common/BasicRadio'
import LogoIcon from '../../../assets/img/logo-ico.png'

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('please! first_name?'),
  last_name: Yup.string().required('please! Password?'),
  address: Yup.string()
    .required('please! Password?')
    .email("Welp, that's not an address"),
  city: Yup.string().required('please! City?'),
  current_password: Yup.string()
    .required('please! Current Password?')
    .min(6, "That can't be very secure"),
  password: Yup.string()
    .required('please! New Password?')
    .min(6, "That can't be very secure"),
  password_confirmation: Yup.string()
    .required('please! Confirm Password?')
    .min(6, "That can't be very secure")
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const options = [
  { value: 'Makter kits content', label: 'Makter kits content' },
  { value: 'Others', label: 'Others' }
]

const CreateTicketForm = ({ userInfo, submitData }) => {
  const [radioItem, setRadioItem] = useState('')

  const onSubmit = (values, { setSubmitting, setErrors }) => {
    submitData(values)
    setSubmitting(false)
  }

  const handleRadioChange = event => {
    setRadioItem(event.target.name)
  }

  return (
    <Row className="justify-content-center mt-3">
      <Col>
        <Formik
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          render={({ handleSubmit, isValid }) => (
            <Form onSubmit={handleSubmit} name="LoginForm">
              <FormGroup>
                <Row className="align-items-center">
                  <Col md={4}>
                    <Label
                      className="text-white font-weight-bold"
                      htmlFor="issue"
                    >
                      What’s your issue about?
                    </Label>
                  </Col>
                  <Col md={4}>
                    <FastField
                      name="issue"
                      type="text"
                      component={FormSelect}
                      options={options}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row className="align-items-center">
                  <Col md={4}>
                    <Label
                      className="text-white font-weight-bold"
                      htmlFor="contact_type"
                    >
                      How would you like to be contacted?
                    </Label>
                  </Col>
                  <Col sm={2}>
                    <BasicRadio
                      name={'phone'}
                      type={'radio'}
                      label={'phone'}
                      checked={radioItem === 'phone'}
                      onChange={handleRadioChange}
                    />
                  </Col>
                  <Col sm={2}>
                    <BasicRadio
                      name={'email'}
                      type={'radio'}
                      label={'email'}
                      checked={radioItem === 'email'}
                      onChange={handleRadioChange}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row className="align-items-center mt-3">
                  <Col md={3}>
                    <Label
                      className="text-white font-weight-bold"
                      htmlFor="email"
                    >
                      Email
                    </Label>
                  </Col>
                  <Col md={8}>
                    <FastField
                      name="email"
                      type="email"
                      component={FormInput}
                      placeholder={'wonder.dev21@gmail.com'}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row className="align-items-center mt-3">
                  <Col md={3}>
                    <Label
                      className="text-white font-weight-bold"
                      htmlFor="subject"
                    >
                      Please, add a subject
                    </Label>
                  </Col>
                  <Col md={8}>
                    <FastField
                      name="subject"
                      type="text"
                      component={FormInput}
                      placeholder={'subject'}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup>
                <Row className="align-items-center mt-3">
                  <Col md={3}>
                    <Label
                      className="text-white font-weight-bold"
                      htmlFor="content"
                    >
                      Describe your problem
                    </Label>
                  </Col>
                  <Col md={8}>
                    <FastField
                      name="content"
                      type="textarea"
                      component={FormInput}
                      placeholder={'subject'}
                    />
                  </Col>
                </Row>
              </FormGroup>

              {/* <FormGroup>
                <Row className="align-items-center">
                  <Col xs={4}>
                    <Label className="text-white font-weight-bold">
                      Need to add a screenshot?
                    </Label>
                  </Col>
                  <Col xs={8}></Col>
                </Row>
              </FormGroup> */}

              <Row className="mt-4">
                <Col className="text-center">
                  <Link to="/student/tickets">
                    <Button className="mx-2" color="light">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" color="green" className="mx-2">
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        />
      </Col>
    </Row>
  )
}

export default CreateTicketForm
