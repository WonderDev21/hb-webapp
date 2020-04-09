import axios from '../axios-instance';

import { getCookie } from '../../utils/Cookies';
import * as actions from "./actionTypes";

export const getTeacherPrograms = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
    .get('/teacher_programs', {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      const teacher_programs = response.data.data
      dispatch(updateTeacherPrograms(teacher_programs));
    })
    .catch(function (error) {
    });
  }
}

export const getTeacherVideos = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
    .get('/teacher_videos', {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      const teacher_videos = response.data.data
      dispatch(updateTeacherVideos(teacher_videos));
    })
    .catch(function (error) {
    });
  }
}

export const getTeacherVoicepacks = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
    .get('/teacher_voicepacks', {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      const teacher_voicepacks = response.data.data
      dispatch(updateTeacherVoicepacks(teacher_voicepacks));
    })
    .catch(function (error) {
    });
  }
}

const updateTeacherPrograms = (data) => {
  return {
    type: actions.GET_TEACHER_PROGRAMS,
    data: data
  }
}

const updateTeacherVoicepacks = (data) => {
  return {
    type: actions.GET_TEACHER_AUDIOS,
    data: data
  }
}

const updateTeacherVideos = (data) => {
  return {
    type: actions.GET_TEACHER_VIDEOS,
    data: data
  }
}
