import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
const reportKey = "HelloWorldReport"
export const SUCCESS = reportKey + '/SUCCESS'
export const ERROR = reportKey + '/ERROR'

const initialState = {
  results: null,
  error: null
}

// ------------------------------------
// Actions
// ------------------------------------
export function runReport() {
  return (dispatch, getState) => {
    dispatch({ type: SUCCESS, results: { value: 'ABCDEFG' } });
    /**
    fetch('URL', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      dispatch({ type: SUCCESS, results: data });
    }).catch(function(error) {
      dispatch({ type: ERROR, message: error.message });
    });
    */
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
     return {
        ...state,
        results: action.results,
        error: false
      };
    case ERROR:
      return {
        ...state,
        results: null,
        error: action.message
      };
    break;
    default:
      return state;
  }
}
