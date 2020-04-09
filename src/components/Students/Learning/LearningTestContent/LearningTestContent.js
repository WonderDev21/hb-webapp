import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import classNames from 'classnames'

const LearningTestContent = ({ index, className }) => {
  return (
    <div className={classNames([className, 'mt-1'])}>
      <Row>
        <Col>
          <h5>Test #1</h5>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="text-center">
          <h5>How do you write the HEAD tag correctly ?</h5>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg="6">
          <Row className="mt-3">
            <Col lg="6" className="p-2">
              <Button color="success" block>
                head
              </Button>
            </Col>
            <Col lg="6" className="p-2">
              <Button color="success" block>
                head
              </Button>
            </Col>
            <Col lg="6" className="p-2">
              <Button color="success" block>
                head
              </Button>
            </Col>
            <Col lg="6" className="p-2">
              <Button color="success" block>
                head
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default LearningTestContent
