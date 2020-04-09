import * as actions from '../actions/actionTypes'

const initialState = {
  kitAges: [],
  kitIndustries: [],
  kitsData: [],
  sortedKits: [],
  kitData: {},
  activeFilter: '',
  price: '',
  title: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_KIT_AGES_DATA:
      return updateKitAges(state, action)
    case actions.UPDATE_KIT_INDUSTRIES_DATA:
      return updateKitIndustries(state, action)
    case actions.UPDATE_KITS_DATA:
      return updateKits(state, action)
    case actions.UPDATE_SORTED_KITS_DATA:
      return updateSortedKits(state, action)
    case actions.UPDATE_KIT_INFORMATION:
      return updateKit(state, action)
    case actions.UPDATE_ACTIVE_FILTER:
      return updateActiveFilter(state, action)
    case actions.RESET_FILTERS:
      return resetFilters(state, action)
    default:
      return state
  }
}

const updateKitAges = (state, action) => {
  return {
    ...state,
    kitAges: action.data
  }
}

const updateKitIndustries = (state, action) => {
  return {
    ...state,
    kitIndustries: action.data
  }
}

const updateKits = (state, action) => {
  return {
    ...state,
    kitsData: action.data
  }
}

const updateKit = (state, action) => {
  return {
    ...state,
    kitData: action.data,
    price: action.data.price_in_cents,
    title: action.data.name
  }
}

const updateSortedKits = (state, action) => {
  return {
    ...state,
    sortedKits: action.data
  }
}

const updateActiveFilter = (state, action) => {
  return {
    ...state,
    activeFilter: action.data
  }
}

const resetFilters = (state, action) => {
  return {
    ...state,
    activeFilter: ''
  }
}

export default reducer
