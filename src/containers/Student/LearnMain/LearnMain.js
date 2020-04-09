import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index'
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader'
import LearningPaths from '../../../components/Students/Learning/LearningPaths/LearningPaths'
import FaqMark from '../../../assets/img/faq-mark.png'
import Plus from '../../../assets/img/icon-plus.png'
import classes from './LearnMain.module.scss'

class LearnMain extends Component {
  componentDidMount() {
    this.props.getUserLearningPaths()
  }

  render() {
    const apiLearningPaths = this.props.learningPaths.userLearningPaths
    let renderApiLearningPaths = apiLearningPaths.map(item => {
      return (
        <LearningPaths
          key={item.id}
          imageUrl={item.attributes.image_url}
          title={item.attributes.title}
          learningPathId={item.id}
        />
      )
    })
    return (
      <div style={{ backgroundColor: '#ffffff' }}>
        <StudentHeader active={'learn'} />

        <div className={`container ${classes.Container}`}>
          <div className="row">
            <div className="col-12">
              <div className={classes.TitleContainer}>
                {/* <button className={classes.JoinSchool} type="button">
                  <FormattedMessage id="app.learning_path.join_school" defaultMessage="Join school" />
                </button> */}
                <h1 className={classes.LearningPathTitle}>
                  <FormattedMessage
                    id="app.learning_path.leaning_paths"
                    defaultMessage="Learning paths"
                  />
                </h1>
                <p className={classes.LearningPathSubTitle}>
                  <FormattedMessage
                    id="app.learning_path.edutacion_lifestyle"
                    defaultMessage="Education as a lifestyle"
                  />
                </p>
                <img
                  className={classes.LearningPathIcon}
                  src={FaqMark}
                  alt="FAQ"
                />
              </div>
            </div>
            {renderApiLearningPaths}
            <div className={`col-4 ${classes.Last}`}>
              <div className={classes.LastContainer}>
                <img src={Plus} alt="Plus" />
                <p className={classes.LearnMore}>
                  <FormattedMessage
                    id="app.learning_path.want_to_learn_something_else"
                    defaultMessage="Want to learn something else?"
                  />
                </p>
                <Link to="/student/learning-paths">
                  <button className={classes.MoreTracks}>
                    <FormattedMessage
                      id="app.learning_path.access_more_tracks"
                      defaultMessage="Access more tracks"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LearnMain)
