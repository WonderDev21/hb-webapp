import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Check from '../../../../assets/img/checkmark.svg';
import classes from './LearningPathsMarket.module.scss';

const LearningPaths = ({ imageUrl, title, learningPathId, price, openModal, checked, pathId }) => {
  LearningPaths.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    learningPathId: PropTypes.string,
    price: PropTypes.any,
    openModal: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    pathId: PropTypes.string
  }

  return (
    <>
      <div className="col-12 col-md-4">
        <div className={`${classes.Container} ${checked ? classes.Active : classes.Inactive}`}>
          <span className={checked ? classes.Arrow : ""}/>
          <img className={checked ? classes.Check : classes.Uncheck} src={Check} alt="Check"/>
          <img className={classes.Logo} src={imageUrl} alt="Kit" />
          <p className={classes.Title}>{title}</p>
          <p className={classes.Modules}>8 <FormattedMessage id="app.learning_path.modules" defaultMessage="modules" /></p>
          {checked && (
            <Link to={"/student/learn/" + pathId}>
              <button className={classes.Button} type="button">
                <FormattedMessage id="app.learning_path.explore_track" defaultMessage="Explore track" />
              </button>
            </Link>
          )}
          {!checked && (
            <button className={classes.Button} type="button" onClick={() => openModal(imageUrl, price, title, learningPathId)}>
              <FormattedMessage id="app.learning_path.request_to_buy" defaultMessage="Request to buy" />
            </button>
          )}
          <p className={classes.Price}>$ {price/100} USD</p>
        </div>
      </div>
    </>
  );
}

export default LearningPaths;
