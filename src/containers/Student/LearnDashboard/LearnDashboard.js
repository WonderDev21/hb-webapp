import React from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import LearningCard from '../../../components/Students/Learning/LearningCard'
import LearningBreadcrumbs from '../../../components/Students/Learning/LearningBreadcrumbs'

import kits6 from '../../../assets/img/kits-6.png'
import Locked_fill from '../../../assets/img/Locked_fill.png'

import './LearnDashboard.scss'

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

const LearnDashboard = ({ history, learningPaths, selectCourse }) => {
  const onEnterLecture = (id, status) => {
    selectCourse(id - 1)
    history.push(`/student/learn/lecture`)
  }

  return (
    <>
      <LearningBreadcrumbs
        className="learntab__breadcrumbs"
        pageName="Education as a lifestyle"
        showSchoolCode={true}
      />
      <Row className="mt-4">
        {learningPaths.data.map((item, index) => {
          return (
            <Col lg={3} md={6} key={index}>
              <LearningCard
                className="learndashboard__card"
                data={item}
                onEnterLecture={onEnterLecture}
              />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default withRouter(LearnDashboard)
