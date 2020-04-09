import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classes from './TeacherVoicepacks.module.scss'

const TeacherVoicepacks = ({title, fileUrl, time}) => {
  TeacherVoicepacks.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    fileUrl: PropTypes.string.isRequired
  }

  const handleLink = (resourceLink) => {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = resourceLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="col-4">
      <div className={classes.PodcastContainer} onClick={() => handleLink(fileUrl)}>
        <p className={classes.Title}>{title}</p>
        <p className={classes.Duration}>{time} <FormattedMessage id="app.teacher_voicepacks.minutes" defaultMessage="minutes" /></p>
      </div>
    </div>
  );
}

export default TeacherVoicepacks;
