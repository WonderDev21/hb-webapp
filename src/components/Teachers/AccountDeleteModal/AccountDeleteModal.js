import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'

import CustomModal from '../../Common/CustomModal'
import { FormattedMessage } from 'react-intl'
import emoji_broken from '../../../assets/img/emoji.png'

const AccountDeleteModal = ({ onOkClick, deleteinvitation, userId }) => {
  const [visible, setVisible] = useState(false)

  const onOkClickhandler = () => {
    setVisible(false)
    onOkClick()
  }

  return (
    <CustomModal
      visible={visible}
      button={
        <h4 onClick={() => setVisible(true)}>
          <FormattedMessage
            id="app.teacher.editprofile.deleteuser"
            defaultMessage="Delete User"
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
              id="app.teacher.editprofile.confirmremove.title"
              defaultMessage="Are you sure you want to remove this user?"
            />
          </h4>
        </Col>
      </Row>
      <Row>
        <Col className="text-center text-white mt-1">
          <h5>
            <FormattedMessage
              id="app.teacher.editprofile.confirm.subtitle"
              defaultMessage="This user won’t be able to sign in again!"
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
            onClick={() => deleteinvitation(userId)}
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

export default AccountDeleteModal
