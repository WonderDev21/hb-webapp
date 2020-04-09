import axios from '../axios-instance';

import { getCookie } from '../../utils/Cookies';
import * as actions from "./actionTypes";

export const beginLoading = () => {
  return {
    type: actions.BEGIN_LOADING
  }
}

export const finishLoading = () => {
  return {
    type: actions.FINISH_LOADING
  }
}

export const updateLocaleLanguage = (data) => {
  return {
    type: actions.UPDATE_LOCALE_LANGUAGE,
    payload: data
  }
}

export const getLanguages = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
    .get('/languages', {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      const languages = response.data.data
      dispatch(updateKitIndustries(languages));
    })
    .catch(function (error) {
    });
  }
}

const updateKitIndustries = (data) => {
  return {
    type: actions.GET_LANGUAGES,
    data: data
  }
}
