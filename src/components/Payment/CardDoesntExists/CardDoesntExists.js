import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Payment from '../Payment/Payment'
import classes from './CardDoesntExists.module.scss'

const CardDoesntExists = ({
  closeModal,
  cardSuccessMessage,
  cardErrorMessage,
  price,
  title,
  show
}) => {
  CardDoesntExists.propTypes = {
    closeModal: PropTypes.func.isRequired,
    cardSuccessMessage: PropTypes.string,
    cardErrorMessage: PropTypes.string,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
  }

  return (
    <>
      <Payment
        cardSuccessMessage={cardSuccessMessage}
        cardErrorMessage={cardErrorMessage}
      >
        <div className="col-12">
          <div className={classes.Wrapper}>
            <p className="pt-3">
              <span className="pr-2 pr-md-4">
                <FormattedMessage
                  id="app.payment_confirmation.paying"
                  defaultMessage="Paying"
                />
              </span>
              <span className={classes.Price}>
                ${price / 100}{' '}
                <FormattedMessage
                  id="app.payment_confirmation.usd"
                  defaultMessage="USD"
                />
              </span>
            </p>
            <hr className="w-90" />
            <p className="pb-3">
              <span className="pr-2 pr-md-4">
                <FormattedMessage
                  id="app.payment_confirmation.item"
                  defaultMessage="Item"
                />
              </span>
              <span className={classes.Title}>{title}</span>
            </p>
          </div>
          {show && (
            <div className="d-flex justify-content-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          <div className="d-flex justify-content-center mt-4 mb-5">
            <button
              className="btn bg-gunmetal text-white fw-600"
              type="button"
              onClick={closeModal}
            >
              <FormattedMessage
                id="app.pay_for_kit.cancel"
                defaultMessage="Cancel"
              />
            </button>
            <button
              className="btn bg-blue-dark text-white fw-600 ml-3"
              type="submit"
            >
              <FormattedMessage
                id="app.pay_for_kit.add_card"
                defaultMessage="Add Card"
              />
            </button>
          </div>
        </div>
      </Payment>
    </>
  )
}

export default CardDoesntExists
