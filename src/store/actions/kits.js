import axios from '../axios-instance'

import { getCookie } from '../../utils/Cookies'
import * as actions from './actionTypes'

export const getKits = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
      .get('/kits', {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        const kitsData = response.data.data
        const ages = kitsData.map(x => x.attributes.age).sort((a, b) => a - b)
        const uniqueAges = Array.from(new Set(ages))
        const industries = kitsData.map(x => x.attributes.industry).sort()
        const uniqueIndustries = Array.from(new Set(industries))
        dispatch(updateSortedKits(kitsData))
        dispatch(updateKits(kitsData))
        dispatch(updateKitAges(uniqueAges))
        dispatch(updateKitIndustries(uniqueIndustries))
      })
      .catch(function(error) {})
  }
}

export const getKit = kitId => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
      .get('/kits/' + kitId, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        const kitInfo = response.data
        dispatch(updateKitInformation(kitInfo))
        dispatch({})
      })
      .catch(function(error) {})
  }
}

export const sortKits = () => {
  return (dispatch, getState) => {
    const sortByName = getState().kits.kitsData.sort((a, b) =>
      a.attributes.name > b.attributes.name
        ? 1
        : b.attributes.name > a.attributes.name
        ? -1
        : 0
    )
    dispatch(updateSortedKits(sortByName))
    dispatch(updateActiveFilter('abc'))
  }
}

export const sortByDifficulty = num => {
  return (dispatch, getState) => {
    if (num === 5) {
      const sortByDifficulty = getState().kits.kitsData.filter(
        kit => kit.attributes.difficulty >= num
      )
      dispatch(updateSortedKits(sortByDifficulty))
      dispatch(updateActiveFilter(num))
    } else {
      const sortByDifficulty = getState().kits.kitsData.filter(
        kit => kit.attributes.difficulty === num
      )
      dispatch(updateSortedKits(sortByDifficulty))
      dispatch(updateActiveFilter(num))
    }
  }
}

export const sortByAge = num => {
  return (dispatch, getState) => {
    const sortByAge = getState().kits.kitsData.filter(
      kit => kit.attributes.age === num
    )
    dispatch(updateSortedKits(sortByAge))
    dispatch(updateActiveFilter(num))
  }
}

export const sortByIndustry = name => {
  return (dispatch, getState) => {
    const sortByIndustry = getState().kits.kitsData.filter(
      kit => kit.attributes.industry === name
    )
    dispatch(updateSortedKits(sortByIndustry))
    dispatch(updateActiveFilter(name))
  }
}

const updateKitAges = kitData => {
  return {
    type: actions.UPDATE_KIT_AGES_DATA,
    data: kitData
  }
}

const updateKitIndustries = kitData => {
  return {
    type: actions.UPDATE_KIT_INDUSTRIES_DATA,
    data: kitData
  }
}

const updateKits = kitData => {
  return {
    type: actions.UPDATE_KITS_DATA,
    data: kitData
  }
}

const updateSortedKits = kitData => {
  return {
    type: actions.UPDATE_SORTED_KITS_DATA,
    data: kitData
  }
}

const updateKitInformation = kitData => {
  return {
    type: actions.UPDATE_KIT_INFORMATION,
    data: kitData
  }
}

const updateActiveFilter = filterName => {
  return {
    type: actions.UPDATE_ACTIVE_FILTER,
    data: filterName
  }
}

export const resetFilters = () => {
  return {
    type: actions.RESET_FILTERS
  }
}
