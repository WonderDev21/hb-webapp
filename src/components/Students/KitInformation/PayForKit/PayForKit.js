import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import KitCardDoesntExists from '../../../Payment/CardDoesntExists/CardDoesntExists'
import KitCardExists from '../../../Payment/CardExists/CardExists'
import CheckGreen from '../../../../assets/img/check-green.png'
import classes from './PayForKit.module.scss'

const PayForKit = ({
  closeModal,
  image,
  cardSuccessMessage,
  cardErrorMessage,
  paymentProfile,
  lastFour,
  brand,
  editCard,
  title,
  price,
  paymentHandler,
  paymentError,
  paymentSuccess,
  show
}) => {
  PayForKit.propTypes = {
    closeModal: PropTypes.func.isRequired,
    image: PropTypes.string,
    cardSuccessMessage: PropTypes.string,
    cardErrorMessage: PropTypes.string,
    paymentProfile: PropTypes.bool.isRequired,
    lastFour: PropTypes.any,
    brand: PropTypes.string,
    editCard: PropTypes.func.isRequired,
    paymentHandler: PropTypes.func.isRequired,
    paymentError: PropTypes.bool.isRequired,
    paymentSuccess: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
  }

  PayForKit.defaultProps = {
    title: ''
  }

  return (
    <>
      {paymentSuccess && (
        <div className={`container ${classes.Bg}`}>
          <div className="row">
            <div className="col-12 text-center">
              <img
                className={`img-fluid d-block mx-auto ${classes.KitSuccess}`}
                src={CheckGreen}
                alt=""
              />
              <p className={classes.SuccessMessage}>
                <FormattedMessage
                  id="app.buy_success.successful_purchase"
                  defaultMessage="Successful purchase!"
                />
              </p>
              <img
                className={`img-fluid d-block mx-auto ${classes.PaySuccess}`}
                src={image}
                alt=""
              />
              <p className={classes.SuccessTitle}>{title}</p>
            </div>
            <div className="col-12 d-flex justify-content-center mt-4 mb-5">
              <button
                className="btn bg-blue-dark text-white fw-600 ml-3"
                onClick={closeModal}
                type="button"
              >
                <FormattedMessage
                  id="app.buy_kit.code_verified_continue"
                  defaultMessage="Continue"
                />
              </button>
            </div>
          </div>
        </div>
      )}
      {!paymentSuccess && (
        <div className={`container ${classes.Bg}`}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img
                className={`img-fluid d-block mx-auto ${classes.KitImg}`}
                src={image}
                alt=""
              />
              <h4 className="text-gunmetal text-center fw-500 mt-3">
                <FormattedMessage
                  id="app.pay_for_kit.do_you_want_to_pay"
                  defaultMessage="Do you want to pay for"
                />{' '}
                <br />
                <FormattedMessage
                  id="app.pay_for_kit.this_maker_kit"
                  defaultMessage="this maker kit?"
                />
              </h4>
            </div>
            <div className="col-md-8">
              {paymentProfile && (
                <KitCardDoesntExists
                  closeModal={closeModal}
                  cardErrorMessage={cardErrorMessage}
                  cardSuccessMessage={cardSuccessMessage}
                  price={price}
                  title={title}
                  show={show}
                />
              )}
              {!paymentProfile && (
                <KitCardExists
                  closeModal={closeModal}
                  lastFour={lastFour}
                  brand={brand}
                  editCard={editCard}
                  price={price.toString()}
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
  )
}

export default PayForKit
