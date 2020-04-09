import * as actions from '../actions/actionTypes';

const initialState = {
  learningPaths: [],
  userLearningPaths: [],
  emptyLearningPaths: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_LEARNING_PATHS: return getLearningPaths(state, action);
    case actions.GET_USER_LEARNING_PATHS: return getUserLearningPaths(state, action);
    case actions.EMPTY_USER_LEARNING_PATHS: return emptyLearningPaths(state, action);
    case actions.RESET_LEARNING_PATHS: return resetLearningPaths(state, action);
    default: return state;
  }
}

const getLearningPaths = (state, action) => {
  return {
    ...state,
    learningPaths: action.data
  }
}

const getUserLearningPaths = (state, action) => {
  return {
    ...state,
    userLearningPaths: action.data
  }
}

const emptyLearningPaths = (state, action) => {
  return {
    ...state,
    emptyLearningPaths: true
  }
}

const resetLearningPaths = (state, action) => {
  return {
    ...state,
    learningPaths: [],
    userLearningPaths: [],
    emptyLearningPaths: false
  }
}

export default reducer;