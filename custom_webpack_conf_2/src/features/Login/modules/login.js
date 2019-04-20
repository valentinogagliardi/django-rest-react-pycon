import Api from "../../../common/Api";
const api = new Api();

// Action types and other constants
const INITIATED_LOGIN = "custom_webpack_conf_2/Login/INITIATED_LOGIN";
export const IS_LOGGING_IN = "custom_webpack_conf_2/Login/IS_LOGGING_IN";
const IS_INVALID_LOGIN = "custom_webpack_conf_2/Login/IS_INVALID_LOGIN";
const IS_VALID_TOKEN = "custom_webpack_conf_2/Login/IS_VALID_TOKEN";
const ERROR_CLEANED = "custom_webpack_conf_2/Login/ERROR_CLEANED";
const YES = "yes";
const ENDPOINT = "/api/user/token/";

const initialState = {
  isLoggingIn: "",
  token: {},
  loginError: ""
};

// Action creators
export function initiatedLogin(payload) {
  return {
    type: INITIATED_LOGIN,
    payload
  };
}

export function isLoggingIn() {
  return {
    type: IS_LOGGING_IN
  };
}

function isValidToken(payload) {
  return {
    type: IS_VALID_TOKEN,
    payload
  };
}

function isInvalidLogin(payload) {
  return {
    type: IS_INVALID_LOGIN,
    payload
  };
}

export function cleanError() {
  return {
    type: ERROR_CLEANED
  };
}

// Selectors (use reselect at if you want) // not included

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case IS_INVALID_LOGIN:
      return { ...state, loginError: action.payload };
    case ERROR_CLEANED:
      return { ...state, loginError: "" };
    case IS_VALID_TOKEN:
      return { ...state, token: action.payload };
    case IS_LOGGING_IN:
      return { ...state, isLoggingIn: YES };
    default:
      return state;
  }
}

// Middlewares
export function loginMiddleware({ dispatch }) {
  return function(next) {
    return async function(action) {
      switch (action.type) {
        case INITIATED_LOGIN:
          try {
            const response = await api.post(ENDPOINT, action.payload);
            dispatch(isValidToken(response));
            setTimeout(() => dispatch(isLoggingIn()), 3000);
          } catch (error) {
            dispatch(isInvalidLogin(error.message));
          }
          break;
        default:
          break;
      }
      return next(action);
    };
  };
}
