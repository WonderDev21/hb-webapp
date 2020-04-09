import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';

import CardDoesntExists from '../../../Payment/CardDoesntExists/CardDoesntExists';
import CardExists from '../../../Payment/CardExists/CardExists';
import CheckGreen from '../../../../assets/img/check-green.png';
import classes from './PayForLearningPath.module.scss';

const PayForLearningPath = ({ closeModal, image, cardSuccessMessage, cardErrorMessage, paymentProfile, lastFour, brand, editCard, title, price, paymentHandler, paymentError, paymentSuccess, show }) => {
  PayForLearningPath.propTypes = {
    closeModal: PropTypes.func.isRequired,
    image: PropTypes.string,
    cardSuccessMessage: PropTypes.string,
    cardErrorMessage: PropTypes.string,
    paymentProfile: PropTypes.bool.isRequired,
    lastFour: PropTypes.any,
    brand: PropTypes.string,
    editCard: PropTypes.func.isRequired,
    price: PropTypes.any.isRequired,
    paymentHandler: PropTypes.func.isRequired,
    paymentError: PropTypes.bool.isRequired,
    paymentSuccess: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
  }

  const continuePaymentSuccess = () => {
    closeModal();
    return <Redirect to="/student/learn" />
  }

  return (
    <>
      {paymentSuccess && (
        <div className={`container ${classes.Bg}`}>
          <div className='row'>
            <div className="col-12 text-center">
              <img className={`img-fluid d-block mx-auto ${classes.KitSuccess}`} src={CheckGreen} alt="" />
              <p className={classes.SuccessMessage}><FormattedMessage id="app.buy_success.successful_purchase" defaultMessage="Successful purchase!" /></p>
              <img className={`img-fluid d-block mx-auto ${classes.PaySuccess}`} src={image} alt="" />
              <p className={classes.SuccessTitle}>{title}</p>
            </div>
            <div className='col-12 d-flex justify-content-center mt-4 mb-5'>
              <button className="btn bg-blue-dark text-white fw-600 ml-3" onClick={continuePaymentSuccess} type="button">
                <FormattedMessage id="app.buy_kit.code_verified_continue" defaultMessage="Continue" />
              </button>
            </div>
          </div>
        </div>
      )}
      {!paymentSuccess && (
        <div className={`container ${classes.Bg}`}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img className={`img-fluid d-block mx-auto ${classes.KitImg}`} src={image} alt="" />
              <h4 className="text-gunmetal text-center fw-500 mt-3">
                <FormattedMessage id="app.pay_for_kit.do_you_want_to_pay" defaultMessage="Do you want to pay for" /> <br/><FormattedMessage id="app.pay_for_kit.this_learning_path" defaultMessage="this learning path?" />
              </h4>
            </div>
            <div className="col-md-8">
              {paymentProfile && (
                <CardDoesntExists
                  closeModal={closeModal}
                  cardErrorMessage={cardErrorMessage}
                  cardSuccessMessage={cardSuccessMessage}
                  price={price}
                  title={title}
                  show={show}
                />
              )}
              {!paymentProfile && (
                <CardExists
                  closeModal={closeModal}
                  lastFour={lastFour}
                  brand={brand}
                  editCard={editCard}
                  price={price}
                  title={title}
                  paymentHandler={paymentHandler}
                  paymentError={paymentError}
                  paymentSuccess={paymentSuccess}
                  show={show}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PayForLearningPath;
