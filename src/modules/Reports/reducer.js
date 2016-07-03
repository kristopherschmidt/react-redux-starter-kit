import { combineReducers } from 'redux'
import Login from './Login'
import HelloWorldReport from './HelloWorldReport'

export default combineReducers({
  login : Login.reducer,
  helloWorldReport : HelloWorldReport.reducer
})
