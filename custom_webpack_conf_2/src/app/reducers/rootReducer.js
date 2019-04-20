import { combineReducers } from "redux";
import login from "../../features/Login/modules/login";
import links from "../../features/Links/modules/links";

const rootReducer = combineReducers({
  login,
  links
});

export default rootReducer;
