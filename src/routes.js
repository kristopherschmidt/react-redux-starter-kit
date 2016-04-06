import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { CoreLayout, HomeView } from 'containers';

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
  </Route>
)
