import fetch from 'isomorphic-fetch'

/* @flow */
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
export function increment (value: number = 1): Action {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export const doubleAsync = (): Function => {
  return (dispatch: Function, getState: Function): Promise => {
      fetch("http://localhost:3000/api/counter")
        .then(dispatch({ type: COUNTER_DOUBLE, payload: 1447 }));
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state: number, action: {payload: number}): number => state + action.payload,
  [COUNTER_DOUBLE]: (state: number, action: {payload: number}): number => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

/*
export default function reducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + action.payload * 2;
    case COUNTER_DOUBLE:
      return state * 2;
    default: return state;
  }
  */
