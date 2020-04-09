import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import classes from './LearningPaths.module.scss'

const LearningPaths = ({ imageUrl, title, learningPathId }) => {
  LearningPaths.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    learningPathId: PropTypes.string
  }

  return (
    <>
      <div className="col-4">
        <div className={classes.Container}>
          <img className={classes.Logo} src={imageUrl} alt="Kit" />
          <p className={classes.Title}>{title}</p>
          <p className={classes.Module}>
            0/8{' '}
            <FormattedMessage
              id="app.learning_path.modules"
              defaultMessage="modules"
            />
          </p>
          <Link to={`/student/learn/` + learningPathId}>
            <button className={classes.Button}>
              <FormattedMessage
                id="app.learning_path.explore_track"
                defaultMessage="Explore track"
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LearningPaths
