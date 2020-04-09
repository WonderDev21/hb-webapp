import { handleActions, createAction } from 'redux-actions'
import { REQUEST_STATUS } from '../../config/constants'
import { defineLoopActions, requestLoopHandlers } from '../../lib/state'
import { apiAction } from '../../lib/apiCall'
import { getCookie } from '../../utils/Cookies'

import {
  GETLEARNINGPATHSBYGRADEID,
  GETLEARNINGGRADES,
  SELECTEDCOURSEID,
  SELECTECHAPTER,
  JOINSCHOOLCODE
} from '../actions/learning'

const initialState = {
  learning_paths: {},
  learning_grades: {},
  join_shcool: {},
  selected_course_id: null,
  selected_chapter: 1,
  learning_paths_state: REQUEST_STATUS.INITIAL,
  learning_grades_state: REQUEST_STATUS.INITIAL,
  join_school_state: REQUEST_STATUS.INITIAL,
  state: REQUEST_STATUS.INITIAL,
  error: {}
}

export const {
  start: getLearningGrades,
  success: getLearningGradesSuccess,
  fail: getLearningGradesFail
} = defineLoopActions(GETLEARNINGGRADES)

export const {
  start: getLearningPaths,
  success: getLearningPathsSuccess,
  fail: getLearningPathsFail
} = defineLoopActions(GETLEARNINGPATHSBYGRADEID)

export const {
  start: joinSchoolCode,
  success: joinSchoolCodeSuccess,
  fail: joinSchoolCodeFail,
  reset: joinSchoolCodeReset
} = defineLoopActions(JOINSCHOOLCODE)

export const onSelectedCourse = createAction(SELECTEDCOURSEID)
export const onSelectChapter = createAction(SELECTECHAPTER)

export const fetchLearningPathsByGradeId = grad_id => {
  const apiUrl = `/grades/${grad_id}/learning_paths`
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return apiAction({
    url: apiUrl,
    accessToken: token,
    onStart: getLearningPaths,
    onSuccess: getLearningPathsSuccess,
    onFailure: getLearningPathsFail,
    label: GETLEARNINGPATHSBYGRADEID
  })
}

export const fetchLearningGrades = () => {
  const apiUrl = `/grades`
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return apiAction({
    url: apiUrl,
    accessToken: token,
    onStart: getLearningGrades,
    onSuccess: getLearningGradesSuccess,
    onFailure: getLearningGradesFail,
    label: GETLEARNINGGRADES
  })
}

export const fetchJoinSchoolCode = (userId, data) => {
  const apiUrl = `/users/${userId}/join_school`
  const token = 'Bearer ' + getCookie('hbtoken_30')
  console.log(userId, data)
  return apiAction({
    url: apiUrl,
    method: 'POST',
    data: data,
    accessToken: token,
    onStart: joinSchoolCode,
    onSuccess: joinSchoolCodeSuccess,
    onFailure: joinSchoolCodeFail,
    label: JOINSCHOOLCODE
  })
}

export const learningReducer = handleActions(
  {
    ...requestLoopHandlers({
      action: GETLEARNINGPATHSBYGRADEID,
      onSuccess: (state, payload) => {
        return {
          ...state,
          learning_paths: payload,
          learning_paths_state: REQUEST_STATUS.SUCCESS
        }
      },
      stateField: 'learning_paths_state'
    }),
    ...requestLoopHandlers({
      action: GETLEARNINGGRADES,
      onSuccess: (state, payload) => {
        return {
          ...state,
          learning_grades: payload.data,
          learning_grades_state: REQUEST_STATUS.SUCCESS
        }
      },
      stateField: 'learning_grades_state'
    }),
    ...requestLoopHandlers({
      action: JOINSCHOOLCODE,
      onSuccess: (state, payload) => {
        return {
          ...state,
          join_shcool: payload.data,
          join_school_state: REQUEST_STATUS.SUCCESS
        }
      },
      stateField: 'join_school_state'
    }),
    [SELECTEDCOURSEID]: (state, { payload }) => {
      return {
        ...state,
        selected_course_id: payload
      }
    },
    [SELECTECHAPTER]: (state, { payload }) => {
      return {
        ...state,
        selected_chapter: payload
      }
    }
  },
  initialState
)
