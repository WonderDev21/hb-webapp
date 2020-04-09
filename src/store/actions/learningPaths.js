import axios from '../axios-instance';

import { getCookie } from '../../utils/Cookies';
import * as actions from "./actionTypes";

export const getLearningPaths = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
    .get('/learning_paths', {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      const learningPathsData = response.data.data
      dispatch(updateLearningPaths(learningPathsData));
    })
    .catch(function (error) {
    });
  }
}

const updateLearningPaths = (learningPathsData) => {
  return {
    type: actions.GET_LEARNING_PATHS,
    data: learningPathsData
  }
}

export const getUserLearningPaths = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
    .get('/user_learning_paths', {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      const learningPathsData = response.data.included
      dispatch(updateUserLearningPaths(learningPathsData));
    })
    .catch(function (error) {
      dispatch(emptyUserLearningPath());
    });
  }
}

const updateUserLearningPaths = (learningPathsData) => {
  return {
    type: actions.GET_USER_LEARNING_PATHS,
    data: learningPathsData
  }
}

const emptyUserLearningPath = () => {
  return {
    type: actions.EMPTY_USER_LEARNING_PATHS
  }
}

export const resetLearningPaths = () => {
  return {
    type: actions.RESET_LEARNING_PATHS
  }
}