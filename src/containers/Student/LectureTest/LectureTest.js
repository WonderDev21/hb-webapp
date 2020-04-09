import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames'
import { Row, Col } from 'reactstrap'
import StepWizard from 'react-step-wizard'
import LearningTestContent from '../../../components/Students/Learning/LearningTestContent'

import Prev from '../../../assets/img/prev.png'
import Next from '../../../assets/img/next.png'

import 'animate.css'

import LectureInfo from '../../../components/Students/Learning/LectureInfo'
import kits6 from '../../../assets/img/kits-6.png'
import Locked_fill from '../../../assets/img/Locked_fill.png'
const data = [
  {
    id: 0,
    imgUrl: kits6,
    title: 'Introduction to STEAM',
    max_chapter: 10,
    current_chapter: 0,
    status: 'enable'
  },
  {
    id: 1,
    imgUrl: Locked_fill,
    title: 'Algorithms',
    max_chapter: 10,
    current_chapter: 0,
    status: 'disable'
  },
  {
    id: 2,
    imgUrl: Locked_fill,
    title: 'Our first line of code',
    max_chapter: 10,
    current_chapter: 0,
    status: 'disable'
  },
  {
    id: 3,
    imgUrl: Locked_fill,
    title: 'Deploy to server',
    max_chapter: 10,
    current_chapter: 0,
    status: 'disable'
  },
  {
    id: 4,
    imgUrl: Locked_fill,
    title: 'CSS',
    max_chapter: 10,
    current_chapter: 0,
    status: 'disable'
  },
  {
    id: 5,
    imgUrl: Locked_fill,
    title: 'HTML',
    max_chapter: 10,
    current_chapter: 0,
    status: 'disable'
  },
  {
    id: 6,
    imgUrl: Locked_fill,
    title: 'What is AI?',
    max_chapter: 10,
    current_chapter: 0,
    status: 'disable'
  }
]

const LectureTest = ({ onViewChapter }) => {
  let custom = {
    enterRight: 'animated fadeIn',
    enterLeft: 'animated fadeIn',
    exitRight: 'animated fadeOut',
    exitLeft: 'animated fadeOut'
  }
  const [state, updateState] = useState({})
  const onStepChange = stats => {
    // console.log(stats);
  }

  const setInstance = SW => {
    updateState({
      ...state,
      SW
    })
  }

  const { SW, demo } = state
  const { id } = useParams()

  const info = data[id]
  return (
    <div className={classNames(['lecture__test', 'mt-1'])}>
      <Row className="justify-content-center">
        <Col lg="8">
          <Row className="align-items-center">
            <Col lg="auto">
              <img src={Prev} alt="prev" onClick={() => SW.previousStep()} />
            </Col>
            <Col>
              <StepWizard
                transitions={custom}
                onStepChange={onStepChange}
                instance={setInstance}
              >
                <LearningTestContent className="lecture__test__content" />
                <LearningTestContent className="lecture__test__content" />
                <LearningTestContent className="lecture__test__content" />
              </StepWizard>
            </Col>
            <Col lg="auto">
              <img src={Next} alt="prev" onClick={() => SW.nextStep()} />
            </Col>
          </Row>
        </Col>
      </Row>
      <LectureInfo
        data={info}
        className="lecture__info"
        onViewChapter={onViewChapter}
      />
    </div>
  )
}

export default LectureTest
