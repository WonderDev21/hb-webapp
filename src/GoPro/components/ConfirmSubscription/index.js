import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import Bitmap_confirm from '../../../assets/img/Bitmap.png'

import classes from './ConfirmSubscription.module.scss'

export const ConfirmSubscription = ({ user }) => (
  <Row className="mt-5">
    <Col sm={4}>
      <img src={Bitmap_confirm} alt="go pro confirm" />
    </Col>
    <Col sm={8} className={classes.congrats_message}>
      <p className={classes.first}>
        <strong>
          <FormattedMessage id="app.subscription.confirm" />
        </strong>
      </p>
      <p className={classes.second}>
        <FormattedMessage id="app.subscription.congrats" values={{ name: user.firstName }}/>
      </p>
    </Col>
  </Row>
)

ConfirmSubscription.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string
  })
}
