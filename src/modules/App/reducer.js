import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import Reports from 'modules/Reports'

export default combineReducers({
  reports : Reports.reducer,
  router
})
