
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import LoginContainer from './Login/LoginContainer'
import HelloWorldReportContainer from './HelloworldReport/components/HelloWorldReport'

export default (store) => {

  const requireLogin = (nextState, replace) => {
    if (!store.getState().reports.login.loggedIn) {
      replace({
        pathname: '/reports/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }

  return (
    <Route path="reports">
      <Route onEnter={requireLogin}>
        <Route path="helloWorld" component={HelloWorldReportContainer}/>
      </Route>
      <Route path="login" component={LoginContainer}/>
    </Route>
  );

};
