import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index'
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader'
import LearningPathsContent from '../../../components/Students/Learning/LearningPathContent/LearningPathContent'

class LearnDetail extends Component {
  render() {
    return (
      <>
        <StudentHeader active={'learn'} />
        <LearningPathsContent
          title={'Introduction to STEAM'}
          video_url={'https://www.youtube.com/watch?v=5GWhwUN9iaY'}
          description={
            'Take your analysis to the next level with General Assembly. During this workshop, you’ll learn how to fully understand and measure quantitative data, and how to use basic statistics to reach data-driven conclusions.'
          }
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    learningPaths: state.learningPaths
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserLearningPaths: () => dispatch(actions.getUserLearningPaths())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnDetail)
