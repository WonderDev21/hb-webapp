import React from 'react'
import classNames from 'classnames'
import { Row, Col } from 'reactstrap'
import next from '../../../../assets/img/next.png'
import prev from '../../../../assets/img/prev.png'

const LearningVideo = ({
  className,
  data,
  onSelectChapter,
  currentChapter
}) => {
  const { attributes, id } = data[currentChapter - 1]

  const onClickNext = () => {
    if (currentChapter < data.length) {
      onSelectChapter(currentChapter + 1)
    }
  }
  const onClickPrev = () => {
    if (currentChapter > 1) {
      onSelectChapter(currentChapter - 1)
    }
  }
  return (
    <div className={classNames([className, 'mt-5'])}>
      <Row className="justify-content-center align-items-center">
        <Col lg={1}>
          {currentChapter !== 1 && (
            <img src={prev} alt="prev" onClick={onClickPrev} />
          )}
        </Col>
        <Col lg={6}>
          <h4 className="font-weight-bold">{attributes.title}</h4>
          <div className={`${className}__playerContainer`}>
            <video
              style={{ width: '100%' }}
              src={attributes.video_url}
              controls
              controlsList="nodownload"
              onContextMenu={e => {
                e.preventDefault()
                return false
              }}
            ></video>
            <Row>
              <Col xs="auto">
                <h6 className="mt-3">
                  Chapter {id}: {attributes.title}
                </h6>
              </Col>
              <Col>
                <h6 className="mt-3 text-center text-secondary font-weight-normal">
                  1/{data.length}
                </h6>
              </Col>
              <Col xs="auto">
                <h6 className="mt-3 text-danger">Download material</h6>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={1}>
          {currentChapter !== data.length && (
            <img src={next} alt="next" onClick={onClickNext} />
          )}
        </Col>
      </Row>
    </div>
  )
}

export default LearningVideo
