import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import classes from './Kits.module.scss'

const Kits = ({
  kitDifficulty,
  kitId,
  background,
  imageUrl,
  name,
  age,
  industry
}) => {
  Kits.propTypes = {
    kitDifficulty: PropTypes.number.isRequired,
    kitId: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    industry: PropTypes.string.isRequired
  }

  const setDifficulty = () => {
    let times = parseInt(kitDifficulty)
    let difficulty = []
    for (let i = 0; i < times; i++) {
      difficulty.push(<i className="fa fa-circle" key={i}></i>)
    }
    return difficulty
  }

  return (
    <>
      <div className="col-md-4">
        <div className="card card-kit">
          <div
            className="card-header draft"
            style={{ backgroundColor: '#' + background }}
          >
            <img
              className={`img-fluid mx-auto d-block ${classes.ImageSize}`}
              src={imageUrl}
              alt=""
            />
          </div>
          <div className="card-body">
            <div className="w-100">
              <p className="text-blue-dark fw-700 float-left">{name}</p>
              <p className="text-danger fw-700 float-right">
                <FormattedMessage id="app.kit.ages" defaultMessage="Ages " />: +
                {age}
              </p>
            </div>
            <div className="clearfix"></div>
            <div className="w-100">
              <p className=" fw-700 float-left">
                <FormattedMessage
                  id="app.kit.industry"
                  defaultMessage="Industry "
                />
                : {industry}
              </p>
              <p
                className="text-danger fw-700 float-right"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Rocky difficulty level"
              >
                {setDifficulty()}
              </p>
            </div>
            <div className="clearfix"></div>
            <Link to={'/student/kits/' + kitId}>
              <button className="btn btn-sm fw-600 bg-blue-dark text-white mx-auto d-block my-4">
                <FormattedMessage
                  id="app.kit.explore_maker_kit"
                  defaultMessage="Explore maker kit "
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kits
