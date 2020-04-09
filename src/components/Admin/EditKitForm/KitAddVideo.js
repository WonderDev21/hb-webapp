import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import PlusIcon from '../../../assets/img/icon-plus.png'
import classes from './KitAddVideo.module.scss'

const KitAddVideo = props => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className={`d-flex flex-column ${classes.Container}`}>
        <div
          className={`d-flex flex-column justify-content-center ${classes.AddVideoContainer}`}
        >
          <img className={`mx-auto ${classes.Icon}`} src={PlusIcon} alt="Add" />
          <span className={`fw-600 mx-auto ${classes.Text}`}>Add new</span>
          <span className={`fw-600 mx-auto ${classes.Text}`}>video</span>
        </div>
        <div className="mt-auto">
          <button
            className={`btn btn-block btn-danger ${classes.UploadButton}`}
          >
            Upload here
          </button>
        </div>
      </div>
    </div>
  )
}

export default KitAddVideo
