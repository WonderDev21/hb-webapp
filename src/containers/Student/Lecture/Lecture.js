import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Redirect, Switch } from 'react-router-dom'
import Stepper from 'react-stepper-horizontal'
import PrivateRoute from '../../../components/App/PrivateRoute'
import LearningBreadcrumbs from '../../../components/Students/Learning/LearningBreadcrumbs'
import LectureChapter from '../LectureChapter'
import LectureCourse from '../LectureCourse'
import LectureTest from '../LectureTest'
import { onSelectChapter } from '../../../store/reducers/learning'

import './Lecture.scss'

const Lecture = ({ match, history }) => {
  const dispatch = useDispatch()

  const learning_paths = useSelector(
    state => state.learningReducer.learning_paths
  )
  const selected_course_id = useSelector(
    state => state.learningReducer.selected_course_id
  )

  const selected_chapter = useSelector(
    state => state.learningReducer.selected_chapter
  )

  const onViewChapter = () => {
    history.push(`${match.url}/chapter`)
  }

  const onViewTest = () => {
    history.push(`${match.url}/test`)
  }

  const onSelectedChapter = id => {
    dispatch(onSelectChapter(id))
  }

  return (
    <div className="lecture">
      <LearningBreadcrumbs
        className="learntab__breadcrumbs"
        pageName={''}
        link="/student/learn/dashboard"
      />
      <Switch>
        <Redirect exact from={`${match.url}`} to={`${match.url}/course`} />
        <PrivateRoute
          exact
          path={`${match.url}/course`}
          component={props => (
            <LectureCourse
              {...props}
              onViewChapter={onViewChapter}
              data={learning_paths.included}
              onSelectChapter={onSelectedChapter}
              currentChapter={selected_chapter}
            />
          )}
        />
        <PrivateRoute
          exact
          path={`${match.url}/chapter`}
          component={props => (
            <LectureChapter
              {...props}
              onViewTest={onViewTest}
              data={learning_paths.included}
              currentChapter={selected_chapter}
            />
          )}
        />
        <PrivateRoute
          exact
          path={`${match.url}/test`}
          component={props => (
            <LectureTest
              {...props}
              onViewChapter={onViewChapter}
              data={learning_paths.data[selected_course_id]}
            />
          )}
        />
      </Switch>
      <div className="stepper-container">
        <Stepper
          steps={
            learning_paths.included &&
            learning_paths.included.map(item => ({
              title: item.attributes.title
            }))
          }
          defaultTitleOpacity={'0'}
          completeTitleOpacity="0"
          activeTitleOpacity="0"
          completeColor="#24dc92"
          defaultColor="#ff4438"
          activeColor="#50e3c2"
          circleFontSize={28}
          completeBarColor="#24dc92"
          defaultBarColor="#ff4438"
          size={45}
          activeStep={selected_chapter - 1}
        />
      </div>
    </div>
  )
}

export default Lecture
