import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import classes from './ResetPasswordForm.module.scss';

const ResetPasswordForm = ({recoveryEmail, show, errorMessage, successMessage}) => {
  ResetPasswordForm.propTypes = {
    recoveryEmail: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    successMessage: PropTypes.string
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email=event.target.email.value
    recoveryEmail(email);
  }

  return (
    <div className="col-12 col-md-6 text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className={classes.EmailLeft}>
            <label className={classes.Email}>
              <FormattedMessage id="app.sign_up.email" defaultMessage=" Email" />
            </label>
          </div>
          <input type="email" className="form-control" name="email" required/>
        </div>
        {show && (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {errorMessage && (<p className="text-danger"><FormattedMessage id="app.recover_mail.success_message" defaultMessage={errorMessage} /></p>)}
        {successMessage && (<p className="text-success"><FormattedMessage id="app.recover_mail.success_message" defaultMessage={successMessage} /></p>)}
        <button className="btn btn-auth d-block mx-auto px-4 text-uppercase" type="submit">
          <FormattedMessage id="app.recover-password" defaultMessage="Send recovery email" />
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
