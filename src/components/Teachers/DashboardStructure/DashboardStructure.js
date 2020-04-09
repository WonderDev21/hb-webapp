import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import Tabs from '../../Common/Tabs/Tabs'
import Logo from '../../../assets/img/logo_white.png'
import TeacherVoicepacks from '../TeacherVoicepacks/TeacherVoicepacks'
import TeacherVideos from '../TeacherVideos/TeacherVideos'
import TeacherProgram from '../TeacherProgram/TeacherProgram'
import classes from './DashboardStructure.module.scss'
import { Link } from 'react-router-dom'

const DashboardStructure = ({ userName, programs, videos, voicepacks }) => {
  DashboardStructure.propsTypes = {
    userName: PropTypes.string.isRequired,
    programs: PropTypes.array,
    videos: PropTypes.array,
    voicepacks: PropTypes.array
  }

  const teacherPrograms = programs.map(el => (
    <TeacherProgram
      key={el.id}
      title={el.attributes.name}
      fileImg={el.attributes.image_url}
      fileUrl={el.attributes.resource_url}
    />
  ))

  const teacherVoicepacks = voicepacks.map(el => (
    <TeacherVoicepacks
      key={el.id}
      title={el.attributes.name}
      fileUrl={el.attributes.resource_url}
      time="5"
    />
  ))

  const teacherVideos = videos.map(el => (
    <TeacherVideos
      key={el.id}
      title={el.attributes.name}
      fileUrl={el.attributes.resource_url}
      time="5"
    />
  ))

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className={`text-white fw-400 ${classes.Workspace}`}>
              {userName}’s workspace
            </p>
          </div>
        </div>
      </div>
      <div className={classes.Container}>
        <div className="row">
          <div className={`col-3 ${classes.Options}`}>
            <img
              className={`${classes.Active} d-inline`}
              src={Logo}
              alt="Here"
            />
            <p className={`text-white d-inline ${classes.ActiveOption}`}>
              <FormattedMessage
                id="app.teacher.training"
                defaultMessage="Training"
              />
            </p>
          </div>
          <div className={`col-9 ${classes.Resources}`}>
            <div className={classes.Bg}>
              <h3 className={classes.Title}>
                <FormattedMessage
                  id="app.teacher.upgrade_your_steam_skills"
                  defaultMessage="Upgrade your STEAM skills"
                />
              </h3>
              <Tabs>
                <div
                  label="Program"
                  name={
                    <FormattedMessage
                      id="app.teacher.program"
                      defaultMessage="Program"
                    />
                  }
                >
                  <div className={classes.ProgramContainer}>
                    <div className="row justify-content-center">
                      {teacherPrograms}
                    </div>
                  </div>
                </div>
                <div
                  label="Voicepacks"
                  name={
                    <FormattedMessage
                      id="app.teacher.voicepacks"
                      defaultMessage="Voicepacks"
                    />
                  }
                >
                  <div className={classes.ProgramContainer}>
                    <div className="row justify-content-center">
                      {teacherVoicepacks}
                    </div>
                  </div>
                </div>
                <div
                  label="Video"
                  name={
                    <FormattedMessage
                      id="app.teacher.video"
                      defaultMessage="Video"
                    />
                  }
                >
                  <div className={classes.ProgramContainer}>
                    <div className="row justify-content-center">
                      {teacherVideos}
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
            <div className="row mt-5 ml-1">
              <Link to="/teacher/school-code">
                <button
                  className={`col-sm-12 pt-3 pb-3 text-uppercase text-white ${classes.btn_custom}`}
                >
                  Got a school code?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardStructure
