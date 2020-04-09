import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { Elements, StripeProvider } from 'react-stripe-elements'
import PropTypes from 'prop-types'
import { CheckoutForm } from '../../components/CheckoutForm'
import { GoProLayout } from '../../layout/GoProLayout'
import whiteLogo from '../../../assets/img/logo_white.svg'
import { charge } from '../../services/checkout'
import { createPaymentProfile } from '../../services/checkout'

import classes from './CheckoutPage.module.scss'

export const CheckoutPage = ({ history }) => {
  const [isFetch, setIsFetch] = useState(false)
  const [error, setError] = useState({ isError: false, message: '' })
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      history.push('/gopro/success')
    }
  }, [isSuccess, history])

  const handleCancel = () => history.goBack()

  const handleSubmit = async token => {
    setError({ isError: false, message: '' })
    setIsFetch(true)

    await createPaymentProfile(token)
    const { status, data } = await charge(token)

    if (status === 201) {
      setIsSuccess(true)
    } else {
      const message = data.message || 'There was an error, try again later'
      setError({ isError: true, message })
    }

    setIsFetch(false)
  }

  const renderErrorMessage = () => (
    <Row>
      <Col className={classes.errorMessage}>
        <FormattedMessage
          id="common.generic.error"
          defaultMessage={error.message}
        />
      </Col>
    </Row>
  )

  return (
    <GoProLayout className={classes.checkout__container}>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
        <Row className="justify-content-md-center h-100 align-self-center">
          <Col xs={5} className="align-self-center">
            <Row>
              <Col xs="4">
                <img className="" src={whiteLogo} alt="hearthbit logo" />
              </Col>
              <Col xs={1} className={`${classes.vertical_line} my-auto`} />
              <Col className="my-auto">
                <FormattedMessage
                  defaultMessage="For teachers"
                  id="common.for.teachers"
                >
                  {txt => <h2 className={classes.title}>{txt}</h2>}
                </FormattedMessage>
              </Col>
            </Row>

            <Row className="mt-5">
              <FormattedMessage
                defaultMessage="PAY WITH CREDIT/DEBIT CARD"
                id="app.plans.pro.paidcard"
              >
                {txt => <h2 className={classes.subtitle}>{txt}</h2>}
              </FormattedMessage>
            </Row>

            {error.isError && renderErrorMessage()}

            <Row className="mt-4">
              <Elements>
                <CheckoutForm
                  handleCancel={handleCancel}
                  handleSubmit={handleSubmit}
                  isFetch={isFetch}
                />
              </Elements>
            </Row>
          </Col>
        </Row>
      </StripeProvider>
    </GoProLayout>
  )
}

CheckoutPage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  })
}
