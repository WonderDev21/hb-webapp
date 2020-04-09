import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { GoProLayout } from '../../layout/GoProLayout'
import { ProSloganHeader } from '../../components/ProSloganHeader'
import classes from './SubscriptionConfirmedPage.module.scss'
import { ConfirmSubscription } from '../../components/ConfirmSubscription'
import { userContext } from '../../../lib/contexts/userContext'

export const SubscriptionConfirmedPage = () => {
  return (
    <GoProLayout className={classes.subscription_confirmed__container}>
      <Row className="d-flex flex-column justify-content-center h-100">
        <Col xs={10} sm={12} md={8} lg={6} className="mx-auto">
          <ProSloganHeader />

          <userContext.Consumer>
            {user => <ConfirmSubscription user={user} />}
          </userContext.Consumer>

          <Row className="mt-5">
            <Col className="text-center">
              <Link to="/teacher/dashboard">
                <Button
                  type="button"
                  className="btn-secondary my-5 mx-5 px-5 ml-auto"
                  color="secondary"
                >
                  <FormattedMessage
                    id="app.subscription.back"
                    defaultMessage="Back to Dashboard"
                  />
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </GoProLayout>
  )
}
