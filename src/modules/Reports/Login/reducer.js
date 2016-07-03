import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_SUCCESS = 'Login/SUCCESS'
export const LOGIN_FAILURE = 'Login/FAILURE'

const initialState = {
  loggedIn : false,
  loginResponse : null,
  loginError: false,
  loginErrorMessage: null,
  loginToken: null
}

// ------------------------------------
// Actions
// ------------------------------------
export function logIn(username, password) {
  return (dispatch, getState) => {
    //replace this with isomorphic-fetch call to server
    if (username === "admin" && password === "admin") {
      dispatch({ type: LOGIN_SUCCESS, data: { loginToken: "ABCDEFG" }});
    } else {
      dispatch({ type: LOGIN_FAILURE, message: "Only admin/admin is allowed to log in." });
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
     return {
        ...state,
        loggedIn: true,
        loginResponse: action.data,
        loginError: false,
        loginErrorMessage: null,
        loginToken: action.data.loginToken
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        loginResponse: null,
        loginError: true,
        loginErrorMessage: action.message,
        loginToken: null
      };
    break;
    default:
      return state;
  }
}
