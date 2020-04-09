import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Row, Col, Nav, NavItem } from 'reactstrap'
import LevelProgress from './LevelProgress'

const LearningNavbar = ({ className, active, onChangeNavItem, data }) => {
  return (
    <div>
      <Row className={className} noGutters>
        <Col>
          <Nav>
            {data.map((item, index) => {
              return (
                <NavItem
                  active={active === item.attributes.grade_number}
                  onClick={() => onChangeNavItem(item.attributes.grade_number)}
                  key={index}
                >
                  {item.attributes.title}
                  {/* <FormattedMessage
                    id="app.student.learntab.preschool"
                    defaultMessage="Preschool"
                  /> */}
                </NavItem>
              )
            })}
          </Nav>
        </Col>
      </Row>
      <Row className="justify-content-end" noGutters>
        <Col lg={3} md={6}>
          <LevelProgress className={`${className}__levelProgress`} />
        </Col>
      </Row>
    </div>
  )
}

export default LearningNavbar
