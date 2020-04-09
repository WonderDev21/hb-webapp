import React from 'react'
import { Row, Col, Card, CardHeader, CardBody, Label, Button } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { Formik, FastField, Form } from 'formik';
import { FormInput } from '../../../../components/Common/FormInput'
import { isPending } from '../../../../lib/state'

import * as Yup from 'yup'

import './Login.scss'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('please! Email?')
        .email("Welp, that's not an email"),
    password: Yup.string()
        .required('please! Password?')
        .min(6, "That can't be very secure")
})

const LoginForm = ({ submit, state }) => {
    const onSubmit = (values, { setSubmitting, setErrors }) => {
        submit(values);
        setSubmitting(false);
    };

    return (
        <div>
            <Row className="loginForm justify-content-center mt-5">
                <Col lg="7">
                    <Card>
                        <CardHeader>
                            <h4>
                                <FormattedMessage id="app.login.login" default="Login" />
                            </h4>
                            <div className="loginForm__underbar"></div>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center">
                                <Col lg="8">
                                    <Formik
                                        initialValues={{
                                            email: '',
                                            password: '',
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={onSubmit}
                                        render={({ handleSubmit, isValid }) => (
                                            <Form onSubmit={handleSubmit} name="LoginForm">
                                                <div className="text-left mt-3">
                                                    <Label for="email" className="text-left">
                                                        <FormattedMessage id="app.sign_up.email" defaultMessage="Email" />
                                                    </Label>
                                                    <FastField name="email" type="email" component={FormInput} />
                                                </div>
                                                <div className="text-left mt-3">
                                                    <Label for="password" className="text-left">
                                                        <FormattedMessage id="app.sign_up.password" defaultMessage="Password" />
                                                    </Label>
                                                    <FastField name="password" type={'password'} component={FormInput} />
                                                </div>
                                                <div className="float-right mt-1 ">
                                                    <h6><FormattedMessage id="app.login.forgot_password" defaultMessage="Forgot your password?" /></h6>
                                                </div>

                                                <div className="float-right text-center mt-5 mb-5">
                                                    <Button type="submit" className="btn-primary text-uppercase" color="primary" disabled={!isValid || isPending(state)}>
                                                        {isPending(state) ? <div className="d-flex justify-content-center">
                                                            <div className="spinner-grow text-primary" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                        </div> : 'Login'}
                                                    </Button>
                                                </div>
                                            </Form>
                                        )}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card >
                </Col >
            </Row >
        </div >
    )
}

export default LoginForm
