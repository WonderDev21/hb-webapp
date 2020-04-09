import React from 'react'
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

const EditProfileForm = ({ userInfo, submitData }) => {
  const onSubmit = (values, { setSubmitting, setErrors }) => {
    submitData(values)
    setSubmitting(false)
  }
  return (
    <Row className="justify-content-center mt-5">
      <Col lg={8}>
        <Card className="card-profile">
          <CardHeader className="bg-blue-dark py-3">
            <h4 className="text-white text-center">
              <strong>Edit my profile</strong>
            </h4>
          </CardHeader>
          <CardBody className="bg-blue-dark-transparent no-border pb-5">
            <Formik
              initialValues={{
                first_name: userInfo.firstName,
                last_name: userInfo.lastName,
                age: userInfo.age,
                address: userInfo.email,
                city: userInfo.city,
                current_password: '',
                password: '',
                password_confirmation: ''
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              render={({ handleSubmit, isValid }) => (
                <Form onSubmit={handleSubmit} name="LoginForm">
                  <Row>
                    <Col sm={4} className="text-center mt-3">
                      <img src={LogoIcon} alt="User" />
                    </Col>
                    <Col sm={8}>
                      <Row>
                        <Col sm="4">
                          <FormGroup>
                            <Label
                              className="text-blue-dark font-weight-bold"
                              htmlFor="first_name"
                            >
                              First Name
                            </Label>
                            <FastField
                              name="first_name"
                              type="text"
                              component={FormInput}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label
                              className="text-blue-dark font-weight-bold"
                              htmlFor="last_name"
                            >
                              Last Name
                            </Label>
                            <FastField
                              name="last_name"
                              type="text"
                              component={FormInput}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label
                              className="text-blue-dark font-weight-bold"
                              htmlFor="age"
                            >
                              Age
                            </Label>
                            <FastField
                              name="age"
                              type="text"
                              component={FormInput}
                              disabled
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="8">
                          <FormGroup>
                            <Label
                              className="text-blue-dark font-weight-bold"
                              htmlFor="address"
                            >
                              address
                            </Label>
                            <FastField
                              name="address"
                              type="email"
                              component={FormInput}
                            />
                          </FormGroup>
                        </Col>
                        <Col sm="4">
                          <FormGroup>
                            <Label
                              className="text-blue-dark font-weight-bold"
                              htmlFor="city"
                            >
                              City
                            </Label>
                            <FastField
                              name="city"
                              type="text"
                              component={FormInput}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="mt-5">
                        <Col>
                          <FormGroup>
                            <Label
                              for="current_password"
                              className="text-blue-dark"
                            >
                              Current Password
                            </Label>
                            <FastField
                              name="current_password"
                              type={'password'}
                              component={FormInput}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="password" className="text-blue-dark">
                              New Password
                            </Label>
                            <FastField
                              name="password"
                              type={'password'}
                              component={FormInput}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label
                              for="password_confirmation"
                              className="text-blue-dark"
                            >
                              Password Confirm
                            </Label>
                            <FastField
                              name="password_confirmation"
                              type={'password'}
                              component={FormInput}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="text-center">
                      <Link to="/student/profile">
                        <Button className="btn-light mx-2">Cancel</Button>
                      </Link>
                      <Button type="submit" color="primary" className="mx-2">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default EditProfileForm
