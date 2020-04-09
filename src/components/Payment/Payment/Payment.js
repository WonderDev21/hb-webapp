import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import StripeForm from '../StripeForm/StripeForm';

const STRIPE_API_KEY = process.env.REACT_APP_STRIPE_KEY

class Payment extends Component {
  constructor() {
    super();
    this.state = {stripe: null};
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    cardErrorMessage: PropTypes.string,
    cardSuccessMessage: PropTypes.string
  }

  componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe(STRIPE_API_KEY)});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe(STRIPE_API_KEY)});
      });
    }
    this.props.resetMessages();
  }

  render() {
    const { cardErrorMessage, cardSuccessMessage, children } = this.props;
    return (
      <>
        {cardErrorMessage && <div className='text-center text-alert'><FormattedMessage id="app.payment.payment-error" defaultMessage={cardErrorMessage} /></div>}
        {cardSuccessMessage && <div className='text-center text-success'><FormattedMessage id="app.payment.payment-success" defaultMessage={cardSuccessMessage} /></div>}
        <StripeProvider stripe={this.state.stripe}>
          <Elements>
            <StripeForm>
              {children}
            </StripeForm>
          </Elements>
        </StripeProvider>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetMessages: () => dispatch(actions.resetMessages())
  }
}

export default connect(null, mapDispatchToProps) (Payment);