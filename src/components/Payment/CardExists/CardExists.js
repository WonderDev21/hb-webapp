import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import classes from './CardExists.module.scss';

const KitCardDoesntExists = ({closeModal, lastFour, brand, editCard, price, title, paymentHandler, paymentError, show }) => {
  KitCardDoesntExists.propTypes = {
    closeModal: PropTypes.func.isRequired,
    lastFour: PropTypes.any,
    brand: PropTypes.string,
    editCard: PropTypes.func.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    paymentError: PropTypes.bool.isRequired,
    paymentHandler: PropTypes.func.isRequired
  }

  return (
    <div className="row">
      <div className='col-12'>
        <p className={classes.CardExists}>
          <FormattedMessage id="app.payment_confirmation.card_on_file" defaultMessage="Card on file" />
        </p>
        <div className={classes.WhiteBorder}>
          <button type="button" className={classes.EditCard} onClick={editCard}><FormattedMessage id="app.credit_card.edit-card" defaultMessage="Edit card" /></button>
          <div className={classes.GreenSelector}>
            <div className={classes.GreenSelectorFiller}></div>
          </div>
          <p className={classes.Brand}>{brand}<span className={classes.LastFour}>xxxx-{lastFour}</span></p>
        </div>
      </div>
      <div className='col-12'>
        <div className={classes.Wrapper}>
          <p className='pt-3'>
            <span className='pr-2 pr-md-4'><FormattedMessage id="app.payment_confirmation.paying" defaultMessage="Paying" /></span>
            <span  className={classes.Price}>${price/100} <FormattedMessage id="app.payment_confirmation.usd" defaultMessage="USD" /></span>
          </p>
          <hr className='w-90' />
          <p className='pb-3'>
            <span className='pr-2 pr-md-4'>
              <FormattedMessage id="app.payment_confirmation.item" defaultMessage="Item" />
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
        {paymentError && (
          <div className="classes.PaymentError">
            <FormattedMessage id="app.payment.error" defaultMessage="Something happen with your payment, please try again later." />
          </div>
        )}
        <div className="d-flex justify-content-center mt-4 mb-5">
          <button className="btn bg-gunmetal text-white fw-600" type="button" onClick={closeModal}>
            <FormattedMessage id="app.pay_for_kit.cancel" defaultMessage="Cancel" />
          </button>
          <button className="btn bg-blue-dark text-white fw-600 ml-3" type="button" onClick={paymentHandler}>
            <FormattedMessage id="app.pay_for_kit.confirm_buy" defaultMessage="Confirm buy" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KitCardDoesntExists;
