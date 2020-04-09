import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import VideoIcon from '../../../assets/img/video_icon.png';
import classes from './TeacherVideos.module.scss'

const TeacherVideos = ({title, fileUrl, time}) => {
  TeacherVideos.propTypes = {
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
      <div className={classes.VideoContainer} onClick={() => handleLink(fileUrl)}>
        <img className={classes.Icon} src={VideoIcon} alt="Video" />
        <p className={classes.Title}>{title}</p>
        <p className={classes.Duration}>{time} <FormattedMessage id="app.teacher_voicepacks.minutes" defaultMessage="minutes" /></p>
      </div>
    </div>
  );
}

export default TeacherVideos;
