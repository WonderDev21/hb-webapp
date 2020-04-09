import React from 'react'
import { Row, Col } from 'reactstrap'
import { Progress } from 'reactstrap'
import ReactTooltip from 'react-tooltip'
import monkey from '../../../../../assets/img/monkey.png'

const LevelProgress = ({ className }) => {
  return (
    <div className={className}>
      <Row>
        <Col className="text-center" xs={'auto'}>
          <img src={monkey} alt="monkey" />
          <h6>Level 1</h6>
        </Col>
        <Col className={`${className}__progress mt-4`}>
          <div data-tip="25 pts">
            <Progress color="danger" value="25" size="sm" animated />
          </div>
          <ReactTooltip type={'success'} />
        </Col>
        <Col className="text-center" xs={'auto'}>
          <img src={monkey} alt="monkey" />
          <h6>Level 2</h6>
        </Col>
      </Row>
    </div>
  )
}

export default LevelProgress
