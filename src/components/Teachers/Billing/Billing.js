import React from 'react'

import { Row, Col, Table } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import CancelSubscriptionModal from '../CancelSubscriptionModal'
import visacard from '../../../assets/img/visacard.png'
import AddPaymentMethodModal from '../../Common/AddPaymentMethodModal'
import './Billing.scss'

const Billing = props => {
  return (
    <div className="billing">
      <Row className=" justify-content-center">
        <Col lg={5}>
          <h5>
            <FormattedMessage
              id="app.teacher.editprofile.billing.accountusage"
              defaultMessage="Account usage"
            />
          </h5>
          <ul>
            <li>
              <FormattedMessage
                id="app.teacher.editprofile.billing.list1"
                defaultMessage="Access to Creative Power Seal content"
              />
            </li>
            <li>
              <FormattedMessage
                id="app.teacher.editprofile.billing.list2"
                defaultMessage="Unlimited access to Challenges"
              />
            </li>
            <li>
              <FormattedMessage
                id="app.teacher.editprofile.billing.list3"
                defaultMessage="Unlimited access to kits dashboard"
              />
            </li>
          </ul>
        </Col>
        <Col lg={7}>
          <h5>
            <FormattedMessage
              id="app.teacher.editprofile.billing.nextcharge"
              defaultMessage="Next credit charge"
            />
          </h5>
          <Row className="billing__box">
            <Col className="billing__box-left text-center" lg={5}>
              <h4>Dec 1st 2018</h4>
            </Col>
            <Col className="billing__box-right text-center" lg={7}>
              <h4>$9.99 USD</h4>
            </Col>
          </Row>
          <CancelSubscriptionModal
            cancelSubscription={props.cancelSubscription}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg={12}>
          <h5>
            <FormattedMessage
              id="app.teacher.editprofile.creditcard.creditcard"
              defaultMessage="Credit Card"
            />
          </h5>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={4} className="d-inline-flex billing__cardnumber p-3">
          <img src={visacard} alt="visacard" />{' '}
          <h4 className="ml-2">xxxx-1234</h4>
        </Col>
        <Col lg={7}>
          <AddPaymentMethodModal />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <h5>
            <FormattedMessage
              id="app.teacher.editprofile.paymenthistory"
              defaultMessage="payment history"
            />
          </h5>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="p-3">
          <Table striped className="accounts__table">
            <tbody>
              <tr>
                <td>
                  <span className="ml-3 font-weight-bold">
                    Annual subscription to Teachers Training Program
                  </span>
                </td>
                <td className="font-weight-bold">16 dic, 2019</td>
                <td className="font-weight-bold text-right">$9.99 usd</td>
              </tr>
              <tr>
                <td>
                  <span className="ml-3 font-weight-bold">
                    Annual subscription to Teachers Training Program
                  </span>
                </td>
                <td className="font-weight-bold">16 dic, 2019</td>
                <td className="font-weight-bold text-right">$9.99 usd</td>
              </tr>
              <tr>
                <td>
                  <span className="ml-3 font-weight-bold">
                    Annual subscription to Teachers Training Program
                  </span>
                </td>
                <td className="font-weight-bold">16 dic, 2019</td>
                <td className="font-weight-bold text-right">$9.99 usd</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default Billing
