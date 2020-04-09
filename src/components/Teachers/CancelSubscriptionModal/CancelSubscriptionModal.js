import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'

import CustomModal from '../../Common/CustomModal'
import { FormattedMessage } from 'react-intl'
import emoji_broken from '../../../assets/img/emoji.png'

import './CancelSubscriptionModal.scss'

const CancelSubscriptionModal = props => {
  const [visible, setVisible] = useState(false)

  const onOkClickhandler = () => {
    props.cancelSubscription()
    setVisible(false)
    // onOkClick()
  }

  return (
    <CustomModal
      visible={visible}
      button={
        <h4 onClick={() => setVisible(true)} className="cancelmodal__btn mt-4">
          <FormattedMessage
            id="app.teacher.editprofile.cancelsubscription"
            defaultMessage="Cancel my subscription"
          />
        </h4>
      }
      toggle={() => setVisible(false)}
    >
      <Row>
        <Col className="text-center">
          <img src={emoji_broken} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center text-white mt-2 ">
          <h4 className="font-weight-bold">
            <FormattedMessage
              id="app.teacher.editprofile.confirmcanceltitle"
              defaultMessage="Are you sure you want to cancel?"
            />
          </h4>
        </Col>
      </Row>
      <Row>
        <Col className="text-center text-white mt-1">
          <h5>
            <FormattedMessage
              id="app.teacher.editprofile.confirmcancel.subtitle"
              defaultMessage="Your access will be remove from the courses you take"
            />
          </h5>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button
            type="button"
            className="btn-green text-uppercase float-right "
            color="green"
            size="sm"
            onClick={onOkClickhandler}
          >
            yes... YES!!!
          </Button>
        </Col>
        <Col>
          <Button
            type="button"
            className="btn-danger text-uppercase float-left "
            color="danger"
            size="sm"
            onClick={onOkClickhandler}
          >
            Abort! Abort!
          </Button>
        </Col>
      </Row>
    </CustomModal>
  )
}

export default CancelSubscriptionModal
