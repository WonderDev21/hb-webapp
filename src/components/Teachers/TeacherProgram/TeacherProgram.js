import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classes from './TeacherProgram.module.scss'

const TeacherProgram = ({ title, fileImg, fileUrl }) => {
  TeacherProgram.propTypes = {
    title: PropTypes.string.isRequired,
    fileImg: PropTypes.string.isRequired,
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
    <div className={`col-4 ${classes.teacherProgramContainer}`}>
      <p className={classes.Title}>{title}</p>
      <img className={classes.File} src={fileImg} alt="Source" />
      <button
        className={classes.Button}
        type="button"
        onClick={() => handleLink(fileUrl)}
      >
        <FormattedMessage
          id="app.teacher_program.download"
          defaultMessage="Download"
        />
      </button>
    </div>
  )
}

export default TeacherProgram
