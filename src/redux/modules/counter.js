/* @flow */
import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'redux-example/counter/COUNTER_INCREMENT'
export const SET_COUNTER = 'redux-example/counter/SET_COUNTER'

export const actions = {
  increment,
  doubleAsync
}

const initialState = 0


// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export function doubleAsync () {
  return (dispatch, getState) => {
      fetch("http://localhost:3000/api/counter")
        .then(response => response.json())
        .then(json => dispatch({ type: SET_COUNTER, counter: json.counter }));
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
  [SET_COUNTER]: (state, action) => action.counter
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
