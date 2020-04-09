import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import VideoIcon from '../../../assets/img/video_icon.png'
import classes from './KitVideo.module.scss'

const KitVideo = ({ title, fileUrl, time }) => {
  KitVideo.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    fileUrl: PropTypes.string.isRequired
  }

  const handleLink = resourceLink => {
    const link = document.createElement('a')
    link.target = '_blank'
    link.href = resourceLink
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className={`d-flex flex-column ${classes.VideoContainer}`}>
        <div className="d-flex justify-content-end">
          <i
            className={`fa fa-pencil text-white fw-300 ${classes.EditIcon}`}
          ></i>
        </div>
        <img
          className={`mx-auto ${classes.Icon}`}
          src={VideoIcon}
          alt="Video"
          onClick={() => handleLink(fileUrl)}
        />
        <p className={classes.Title}>{title}</p>
        <p className={classes.Duration}>
          {time}{' '}
          <FormattedMessage
            id="app.teacher_voicepacks.minutes"
            defaultMessage="minutes"
          />
        </p>
      </div>
    </div>
  )
}

export default KitVideo
