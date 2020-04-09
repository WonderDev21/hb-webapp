import { combineReducers } from 'redux'

import auth from './auth'
import common from './common'
import user from './user'
import kits from './kits'
import learningPaths from './learningPaths'
import training from './training'
import { adminReducer } from './admin'
import tickets from './tickets'
import { learningReducer } from './learning'

export default combineReducers({
  auth,
  common,
  user,
  kits,
  learningPaths,
  training,
  adminReducer,
  tickets,
  learningReducer
})
