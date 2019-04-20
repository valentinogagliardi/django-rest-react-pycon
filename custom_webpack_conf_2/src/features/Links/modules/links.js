import Api from "../../../common/Api";
import { IS_LOGGING_IN } from "../../Login/modules/login";

const api = new Api();

// Action types and other constants
const DATA_LOADED = "custom_webpack_conf_2/Links/DATA_LOADED";
const API_ERRORED = "custom_webpack_conf_2/Links/API_ERRORED";
const ENDPOINT = "/api/link2/";

const initialState = {
  links: [],
  error: ""
};

// Action creators
function dataLoaded(payload) {
  return {
    type: DATA_LOADED,
    payload
  };
}

function apiErrored() {
  return {
    type: API_ERRORED
  };
}

// Selectors (use reselect at if you want) // not included

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DATA_LOADED:
      return { ...state, links: action.payload };
    case API_ERRORED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// Middlewares
export function linksMiddleware({ getState, dispatch }) {
  return function(next) {
    return async function(action) {
      switch (action.type) {
        case IS_LOGGING_IN:
          try {
            const token = getState().login.token.access;
            const response = await api.get(ENDPOINT, token);
            dispatch(dataLoaded(response));
          } catch (error) {
            dispatch(apiErrored(error.message));
          }
          break;
        default:
          break;
      }
      return next(action);
    };
  };
}
