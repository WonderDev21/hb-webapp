import React from 'react'
import classNames from 'classnames'
import { Row, Col, Button } from 'reactstrap'

import FAQMark from '../../../Common/FAQMark'
import ChapterInfo from './ChapterInfo'
import Icon0 from '../../../../assets/img/icon0.png'
import Icon1 from '../../../../assets/img/icon1.png'
import Icon2 from '../../../../assets/img/icon2.png'
import Icon3 from '../../../../assets/img/icon3.png'
import Icon4 from '../../../../assets/img/icon4.png'
import Icon5 from '../../../../assets/img/icon5.png'
import Icon6 from '../../../../assets/img/icon6.png'

const LectureInfo = ({ className, onViewChapter, data, currentChapter }) => {
  return (
    <div className={classNames([className])}>
      <Row className="justify-content-center mt-4">
        <Col lg={6} className="d-inline-flex align-items-center">
          <h6>Sustainable Development Goals you could help solve.</h6>
          <FAQMark />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={'auto'}>
          <ChapterInfo
            className={`${className}__chapterInfo`}
            data={data}
            currentChapter={currentChapter}
          />
        </Col>
        <Col>
          <Row className="justify-content-center">
            <Col lg={12}>
              <Row className="justify-content-center">
                <Col className="text-center">
                  <img src={Icon0} alt="icon" />
                </Col>
                <Col className="text-center">
                  <img src={Icon1} alt="icon" />
                </Col>
                <Col className="text-center">
                  <img src={Icon2} alt="icon" />
                </Col>
                <Col className="text-center">
                  <img src={Icon3} alt="icon" />
                </Col>
                <Col className="text-center">
                  <img src={Icon4} alt="icon" />
                </Col>
                <Col className="text-center">
                  <img src={Icon5} alt="icon" />
                </Col>
                <Col className="text-center">
                  <img src={Icon6} alt="icon" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={'auto'}>
          <Button color="primary" onClick={onViewChapter}>
            View Chapters
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default LectureInfo
