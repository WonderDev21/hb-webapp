import * as actions from '../actions/actionTypes';

const initialState = {
  teacherPrograms: [],
  teacherAudios: [],
  teacherVideos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_TEACHER_PROGRAMS: return getTeacherPrograms(state, action);
    case actions.GET_TEACHER_AUDIOS: return getTeacherAudios(state, action);
    case actions.GET_TEACHER_VIDEOS: return getTeacherVideos(state, action);
    default: return state;
  }
}

const getTeacherPrograms = (state, action) => {
  return {
    ...state,
    teacherPrograms: action.data
  }
}

const getTeacherAudios = (state, action) => {
  return {
    ...state,
    teacherAudios: action.data
  }
}

const getTeacherVideos = (state, action) => {
  return {
    ...state,
    teacherVideos: action.data
  }
}

export default reducer;