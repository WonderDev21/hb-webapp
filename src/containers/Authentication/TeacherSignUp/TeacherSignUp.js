import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TeacherForm from '../../../components/Authenticate/TeacherSignUp/TeacherForm';
import AuthHeader from '../../../components/Common/Header/AuthHeader/AuthHeader';
import SubAuthHeader from '../../../components/Common/Header/AuthHeader/SubHeader';
import * as actions from '../../../store/actions/index';
import classes from './TeacherSignUp.module.scss';

const MIN_AGE = 21;
class TeacherSignUp extends Component {
  state = {
    terms: true,
    role: 'Teacher',
    alertMessage: ''
  }

  componentDidMount () {
    this.props.resetErrors();
  }

  passwordValidation (password, confirm_password) {
    this.setState({ alertMessage: 'password_dont_match' })
    return (password !== confirm_password ? this.setState({ alertMessage: 'password_dont_match' }) : true);
  }

  
  sendData (form) {
    const { terms , role } = this.state;
    const attributes = {
      first_name: form["first_name"].value.trim(),
      last_name: form["last_name"].value.trim(),
      email: form["email"].value.trim(),
      age: form["age"].value.trim(),
      city: form["city"].value.trim(),
      password: form["password"].value.trim(),
      password_confirmation: form["confirm_password"].value.trim(),
      terms_accepted: terms,
      role: role
    };

    const data = {
      data: {
        type: 'users',
        attributes
      }
    };

    const tokenData = {
      data: {
        type: 'token',
        attributes: {
          email: attributes.email,
          password: attributes.password,
        }
      }
    }
    this.props.register(data, tokenData);
  }
  
  formValidations (form) {
    const validation = {
      age: form["age"].value.trim() < MIN_AGE,
      pass: form["password"].value.trim() !== form["confirm_password"].value.trim()
    };
    const { age, pass } = validation;
    if (age) return this.setState({ alertMessage: 'age_is_not_allowed' }); 
    if (pass) return this.setState({ alertMessage: 'password_dont_match' });
    this.setState({ alertMessage: '' });
    return true;
  }

  handleSubmit = (form) => {
    if (!this.formValidations(form)) return null;
    this.sendData(form);
  }

  renderFormTeacher = _ => (
    <div className={classes.ContainerTeacher}>
      <AuthHeader />
      <section className="pt-8">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <SubAuthHeader />
            <div className="w-100"></div>
            <TeacherForm
              alertMessage={this.state.alertMessage}
              show={this.props.common.loading}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </section>
    </div>
  )

  render() {
    const { auth: { isLogged } } = this.props;
    return (
      isLogged ? <Redirect to='/teacher/dashboard' /> : this.renderFormTeacher()
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    common: state.common
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: (data, tokenData) => dispatch(actions.register(data, tokenData)),
    resetErrors: () => dispatch(actions.resetErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherSignUp);
