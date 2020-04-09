import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import classes from './Terms.module.scss';

const Terms = ({agreeTerms, disagreeTerms, closeModal}) => {
  Terms.propTypes = {
    agreeTerms: PropTypes.func.isRequired,
    disagreeTerms: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
  }

  return (
    <div className={`container ${classes.Bg}`}>
      <div className="row">
        <div className="col-12">
          <button type="button" className={classes.Close} onClick={closeModal}>
            <FormattedMessage id="app.terms.close_button" defaultMessage="Close" />
          </button>
        </div>
        <div className="col-12">
          <h3 className={`text-secondary mt-3 ${classes.Title}`}>
            <FormattedMessage id="app.terms.read_our_terms" defaultMessage="Read our Terms & Conditions to continue" />
          </h3>
        </div>
        <div className="col-12">
          <div className={classes.TextContainer}>
            <p className={`${classes.TermsText} overflow-auto mt-4`}>
              <FormattedMessage id="app.terms.terms_text" defaultMessage="The Children’s Online Privacy Protection Act (“COPPA”) is a federal law that affects Heartbit Inc because it is a “website or online service directed to children,” where “child” is defined as an individual under the age of thirteen. Under COPPA, Heartbit Inc must obtain “verifiable parental consent” before collecting, using, or disclosing any personal information from children. While there are numerous ways to collect verifiable parental consent, each method makes it difficult to gather information from children, no matter how noble or educational the cause. We recommend that Hearbit Inc take a two-step approach: (1) implement an age gate; (2) use the “e-mail plus” method to gain verifiable parental consent for children who do not pass the age gate. Below is an explanation of what “personal information” includes, why it is important to." />
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-3 mb-4">
          <button type="button" className={`btn btn-light ${classes.Button}`} onClick={disagreeTerms}>
            <p className={classes.Label}>
              <FormattedMessage id="app.terms.i_disagree" defaultMessage="I disagree" />
            </p>
          </button>
          <button type="button" className={`btn btn-primary ${classes.Button}`} onClick={agreeTerms}>
            <p className={`${classes.Label} ${classes.Agree}`}>
              <FormattedMessage id="app.terms.i_read_and_agree" defaultMessage="I read and agree" />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
