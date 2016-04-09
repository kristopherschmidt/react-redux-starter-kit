import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'redux-example/counter/COUNTER_INCREMENT'
export const COUNTER_DOUBLE = 'redux-example/counter/COUNTER_DOUBLE'

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
        .then(dispatch({ type: COUNTER_DOUBLE, payload: 1447 }));
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
  [COUNTER_DOUBLE]: (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
