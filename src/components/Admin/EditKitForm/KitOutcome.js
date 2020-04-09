import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classes from './KitOutcome.module.scss'
import DefaultIcon from '../../../assets/img/logo-ico.svg'

const KitOutcome = ({ title, imageUrl }) => {
  KitOutcome.propTypes = {
    title: PropTypes.string.isRequired
  }

  return (
    <div className="col-md col-sm-4 mb-4">
      <div className={`${classes.OutcomeContainer}`}>
        <div className="d-flex flex-column justify-content-center">
          <div
            className={`change-image d-flex align-items-center flex-column ${classes.ImageContainer}`}
          >
            <img
              className={`mx-auto my-5 ${classes.OutcomeIcon}`}
              src={imageUrl}
              alt="Image"
            />
            <div className="mt-auto mb-3">
              <button
                className={`btn btn-sm fw-600 bg-white text-blue-dark ${classes.UploadButton}`}
              >
                <span class={`${classes.ButtonTitle}`}>Upload image</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-auto d-flex justify-content-center">
          <span className={`text-white fw-700 mt-2 ${classes.OutcomeTitle}`}>
            <i className="fa fa-pencil mr-2"></i>
            {title}
          </span>
        </div>
      </div>
    </div>
  )
}

export default KitOutcome
