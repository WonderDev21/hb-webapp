import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import classes from './RecoverPasswordForm.module.scss';

const ResetPasswordForm = ({passwordsDontMatch, errorMessage, successMessage, handleResetPassword}) => {
  ResetPasswordForm.propTypes = {
    passwordsDontMatch: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    successMessage: PropTypes.string,
    handleResetPassword: PropTypes.func.isRequired
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const password = event.target.new_password.value
    const confirm_password = event.target.confirm_password.value

    if (password !== confirm_password) {
      passwordsDontMatch();
    }
    
    handleResetPassword(password, confirm_password);

  }

  return (
    <div className="col-12 col-md-6 text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className={classes.EmailLeft}>
            <label className={`${classes.Password} text-blue-dark"`}>
              <FormattedMessage id="app.sign_up.password" defaultMessage="New Password:" />
            </label>
          </div>
          <input type="password" className="form-control" name="new_password" minLength="6" required/>
        </div>
        <div className="form-group">
          <div className={classes.EmailLeft}>
            <label className={`${classes.ConfirmPassword} text-blue-dark"`}>
              <FormattedMessage id="app.sign_up.confirm_password" defaultMessage="Confirm Password:" />
            </label>
          </div>
          <input type="password" className="form-control" name="confirm_password" minLength="6" required/>
        </div>
        <p className="text-danger">{errorMessage}</p>
        <p className="text-success">{successMessage}</p>
        <button className={classes.EmailButton} type="submit">
          <FormattedMessage id="app.recover_password.save_new_password" defaultMessage="Save new password" />
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
