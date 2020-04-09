import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCookie } from '../../../utils/Cookies'
import * as actions from '../../../store/actions/index';
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader';
import Profile from '../../../components/Students/Profile/Profile';

class GetProfile extends Component {

  componentDidMount = () => {
    const token = getCookie('hbtoken_30')
    this.props.getUser(token);
  }
  
  render() {
    return (
      <>
        <StudentHeader 
          active={'user'}
        />
        <Profile 
          first_name={this.props.user.firstName}
          last_name={this.props.user.lastName}
          address={this.props.user.address}
          city={this.props.user.city}
          role={this.props.user.role}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (token) => dispatch(actions.getUser(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetProfile);