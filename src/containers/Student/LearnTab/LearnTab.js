import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Switch } from 'react-router-dom'
import PrivateRoute from '../../../components/App/PrivateRoute'
import { css } from '@emotion/core'
import { isLoading } from '../../../lib/state'
import ClockLoader from 'react-spinners/ClockLoader'
import LearningNavbar from '../../../components/Students/Learning/LearningNavbar'
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader'
import LearnDashboard from '../LearnDashboard'
import LearnVerification from '../LearnVerification'
import Lecture from '../Lecture'
import {
  fetchLearningPathsByGradeId,
  fetchLearningGrades,
  onSelectedCourse
} from '../../../store/reducers/learning'

import './LearnTab.scss'

const LearnTab = ({ match }) => {
  const [activeNavItem, setNavItem] = useState(0)

  const grades = useSelector(state => state.learningReducer.learning_grades)
  const learning_paths = useSelector(
    state => state.learningReducer.learning_paths
  )
  const learning_paths_state = useSelector(
    state => state.learningReducer.learning_paths_state
  )

  const learning_grades_state = useSelector(
    state => state.learningReducer.learning_grades_state
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLearningPathsByGradeId(0))
    dispatch(fetchLearningGrades())
  }, [])

  const onChangeNavItem = itemIndex => {
    console.log(itemIndex)
    setNavItem(itemIndex)
    dispatch(fetchLearningPathsByGradeId(itemIndex))
  }

  const onSelectCourse = courseId => {
    dispatch(onSelectedCourse(courseId))
  }

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `

  return (
    <div className="learntab">
      <StudentHeader active={'learn'} />

      {isLoading(learning_paths_state) || isLoading(learning_grades_state) ? (
        <div className="learntab__spinner">
          <ClockLoader
            css={override}
            size="50"
            loading={true}
            color="#230871"
          />
        </div>
      ) : (
        <>
          <LearningNavbar
            className="learntab__nav"
            active={activeNavItem}
            data={grades}
            onChangeNavItem={onChangeNavItem}
          />
          <div className="learntab__tabContainer">
            <Switch>
              <Redirect
                exact
                from={`${match.url}`}
                to={`${match.url}/dashboard`}
              />
              <PrivateRoute
                exact
                path={`${match.url}/verification`}
                component={LearnVerification}
              />

              <PrivateRoute
                exact
                path={`${match.url}/dashboard`}
                component={() => (
                  <LearnDashboard
                    learningPaths={learning_paths}
                    selectCourse={onSelectCourse}
                  />
                )}
              />
              <PrivateRoute path={`${match.url}/lecture`} component={Lecture} />
            </Switch>
          </div>
        </>
      )}
    </div>
  )
}

export default LearnTab
