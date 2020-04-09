import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import GoBack from '../../../../assets/img/go-back.png';
import Line from '../../../../assets/img/line.svg';
import classes from './LearningPathContent.module.scss';

const LearningPathsContent = ({ title, video_url, description }) => {
  LearningPathsContent.propTypes = {
    title: PropTypes.string.isRequired,
    video_url: PropTypes.string,
    description: PropTypes.string
  }

  return (
    <div className={`container ${classes.Container}`}>
      <div className="row justify-content-center">
        <div className={`col-12 ${classes.Breadcrumb}`}>
          <Link to='/student/learn'>
            <img className={classes.GoBack} src={GoBack} alt="<" />
          </Link>
          <p className={classes.Title}>
            <FormattedMessage id="app.learning_paths.learning_paths" defaultMessage="Learning paths" />
          </p>
          <img className={classes.Line} src={Line} alt="<" />
          <p className={classes.SubTitle}>{title}</p>
        </div>
        <div className="col-8 mt-5">
          <div className="embed-responsive embed-responsive-16by9">
            <video className="embed-responsive-item" src={video_url} controls></video>
          </div>
        </div>
        <div className="col-12 text-center">
          <button className={classes.GoBackButton}>Go back</button>
          <button className={classes.StartModule}>Start module</button>
        </div>
        <div className="col-8 mr-auto">
          <p className={classes.TitlePath}>{title}</p>
          <p className={classes.Description}>{description}</p>
        </div>
        <div className="col-8 mr-auto">
          <p className={classes.TitlePath}>Modules</p>
        </div>
      </div>
    </div>
  );
}

export default LearningPathsContent;
