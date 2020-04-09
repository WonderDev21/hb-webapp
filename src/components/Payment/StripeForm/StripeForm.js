import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { CardNumberElement, CardExpiryElement, CardCvcElement, injectStripe } from 'react-stripe-elements';

import * as actions from '../../../store/actions/index';
import classes from './StripeForm.module.scss';

class CheckoutForm extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => {
          this.props.handleStripeResponse(payload);
        });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    const style = {
      base: {
        fontSize: '18px',
        '::placeholder': {
          color: '#ccc',
        },
      },
    };

    return (
      <form className="mt-4" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="col-12 text-blue-dark">
            <FormattedMessage id="app.pay_for_kit.card_number" defaultMessage="CARD NUMBER" />
            <i className="fa fa-credit-card-alt text-blue-dark ml-3" aria-hidden="true"></i>
            <div className={classes.Border}>
              <CardNumberElement style={style} />
            </div>
          </label>
          <label className="col-6 text-blue-dark">
            <FormattedMessage id="app.pay_for_kit.expires" defaultMessage="EXPIRES" />
            <i className="fa fa-calendar text-blue-dark ml-3" aria-hidden="true"></i>
            <div className={classes.Border}>
              <CardExpiryElement style={style} />
            </div>
          </label>
          <label className="col-6 text-blue-dark">
            <FormattedMessage id="app.pay_for_kit.security_code" defaultMessage="SECURITY CODE" />
            <i style={{fontSize:'1.9em', top:'46px'}} className="fa fa-lock text-blue-dark ml-3" aria-hidden="true"></i>
            <div className={classes.Border}>
              <CardCvcElement style={style} />
            </div>
          </label>
        </div>
        {this.props.children}
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleStripeResponse: (data) => dispatch(actions.handleStripeResponse(data))
  }
}

export default connect(null, mapDispatchToProps) (injectStripe(CheckoutForm));
