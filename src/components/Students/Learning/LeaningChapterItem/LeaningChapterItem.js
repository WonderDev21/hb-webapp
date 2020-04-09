import React from 'react'

import { Row, Col, Button } from 'reactstrap'
import classNames from 'classnames'
import completecircle from '../../../../assets/img/completecircle.png'
import activecircle from '../../../../assets/img/activecircle.png'

const LeaningChapterItem = ({
  data,
  chapterIndex,
  className,
  onViewTest,
  currentChapter
}) => {
  console.log(data.id, currentChapter)
  return (
    <Row className={classNames([className, 'm-3'])}>
      <Col xs="auto">
        <div className={`circle-${data.status}`}>
          {parseInt(data.id) < currentChapter ? (
            <img src={completecircle} alt={data.status} />
          ) : parseInt(data.id) === currentChapter ? (
            <img src={activecircle} alt={data.status} />
          ) : (
            <div className={`${className}--index`}>
              <h6>{data.id}</h6>
            </div>
          )}
        </div>
      </Col>
      <Col>
        <h5>{data.attributes.title}</h5>
      </Col>
      <Col xs="auto">
        {data.time === 'test' ? (
          <Button color="secondary" size="sm" onClick={onViewTest}>
            Take test
          </Button>
        ) : (
          <h6>{data.time}</h6>
        )}
      </Col>
    </Row>
  )
}

export default LeaningChapterItem
