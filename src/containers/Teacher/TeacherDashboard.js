import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import { getCookie } from '../../utils/Cookies';
import TeacherHeader from '../../components/Common/Header/TeacherHeader/TeacherHeader';
import TeacherDashboardStructure from '../../components/Teachers/DashboardStructure/DashboardStructure';

class TeacherDashboard extends Component {

  componentDidMount() {
    const token = getCookie('hbtoken_30');
    this.props.getUser(token);
    this.props.getTeacherVideos();
    this.props.getTeacherVoicepacks();
    this.props.getTeacherPrograms();
  }

  render() {
    return (
      <>
        <TeacherHeader />
        <div className="bg-blue-dark bg"></div>
        <TeacherDashboardStructure 
          userName={this.props.user.firstName}
          programs={this.props.training.teacherPrograms}
          videos={this.props.training.teacherVideos}
          voicepacks={this.props.training.teacherAudios}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    training: state.training
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (token) => dispatch(actions.getUser(token)),
    getTeacherVideos: () => dispatch(actions.getTeacherVideos()),
    getTeacherVoicepacks: () => dispatch(actions.getTeacherVoicepacks()),
    getTeacherPrograms: () => dispatch(actions.getTeacherPrograms())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherDashboard);
