import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';
import AuthHeader from '../../../components/Common/Header/AuthHeader/AuthHeader';
import NatiBot from '../../../assets/img/Bitmap.png';
import Languages from '../../../components/Students/Onboarding/Languages';
import classes from './SelectLanguage.module.scss';

class SelectLanguage extends Component {
  state={
    language: "",
    alertMessage: ""
  }

  componentDidMount() {
    this.props.getLanguages();
  }

  handleValue = event => {
    this.setState({ language: event.target.value })
  }

  handleSubmit = () => {
    if (!this.state.language) {
      return this.setState({ alertMessage: <div className='text-center text-danger mt-3'><FormattedMessage id="app.select-language.select-language-warning" defaultMessage="Select a language to continue."/></div>})
    }
    this.setState({ alertMessage: '' });
    this.props.setLanguage(this.state.language);
  }

  render() {
    
    if(this.props.user.langSet) {
      return <Redirect to='/student/kits' />
    }

    return (
      <>
        <AuthHeader />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={classes.StepsContainer}>
                <div className={classes.StepCounter}>
                  <p className={classes.StepNumber}>1</p>
                </div>
              </div>
              <div className={classes.StepBody}>
                <p className={classes.StepTitle}>
                  <FormattedMessage id="app.language.select-your" defaultMessage="Select your" /><br/><FormattedMessage id="app.language.language" defaultMessage="language" />
                </p>
                <img className={classes.Natibot} src={NatiBot} alt="" />
                <div className={classes.ChatBox}>
                  <p className={classes.NatibotChat}>
                  <FormattedMessage id="app.language.select-your" defaultMessage="Select your" /><br/><FormattedMessage id="app.language.language" defaultMessage="language" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className={`row justify-content-center text-center ${classes.LanguagesItems}`}>
                <Languages 
                  languages={this.props.common.languages}
                  handleValue={this.handleValue}
                />
              </div>
            </div>
            <div className="col-12">
              {this.state.alertMessage}
              <button type="button" className="btn btn-primary d-block mx-auto mt-5" onClick={this.handleSubmit}>
                <FormattedMessage id="app.language.continue" defaultMessage="Continue" />
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    common: state.common,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLanguages: () => dispatch(actions.getLanguages()),
    setLanguage: (langId) => dispatch(actions.setLanguage(langId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage);
