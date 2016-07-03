import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Reports from 'modules/Reports'
import Home from 'modules/Home'
import CoreLayout from './components/CoreLayout'

export default (store) => {

  return (
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={Home.Home} />
      { Reports.makeRoutes(store) }
    </Route>
  );

};
