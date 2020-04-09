import * as actions from '../actions/actionTypes';

const initialState = {
  loading: false,
  language: '',
  languages: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.BEGIN_LOADING: return setLoadingTrue(state, action);
    case actions.FINISH_LOADING: return setLoadingFalse(state, action);
    case actions.UPDATE_LOCALE_LANGUAGE: return updateLocaleLanguage(state, action);
    case actions.GET_LANGUAGES: return getLanguages(state, action);
    default: return state;
  }
}

const setLoadingTrue = (state, action) => {
  return {
    ...state,
    loading: true
  }
}

const setLoadingFalse = (state, action) => {
  return {
    ...state,
    loading: false
  }
}

const updateLocaleLanguage = (state, action) => {
  return {
    ...state,
    language: action.payload
  }
}

const getLanguages = (state, action) => {
  return {
    ...state,
    languages: action.data
  }
}

export default reducer;