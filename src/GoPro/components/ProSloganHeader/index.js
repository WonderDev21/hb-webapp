import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import orangeLogo from '../../../assets/img/logo-ico.svg'
import classes from './ProSloganHeader.module.scss'

export const ProSloganHeader = () => (
  <Row>
    <Col xs="4">
      <img className="" src={orangeLogo} alt="hearthbit logo" />
    </Col>
    <Col xs={1} className={`${classes.vertical_line} my-auto`} />
    <Col className="my-auto">
      <FormattedMessage
        defaultMessage="For teachers"
        id="common.for.teachers"
      >
        {
          (txt) => <h2 className={classes.title}>{txt}</h2>
        }
      </FormattedMessage>
    </Col>
  </Row>
)
