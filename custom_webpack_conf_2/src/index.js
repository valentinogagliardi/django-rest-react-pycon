import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import { loginMiddleware } from "./features/Login/modules/login";
import { linksMiddleware } from "./features/Links/modules/links";

// temporary workaround for stubbing Fetch with Cypress
import "whatwg-fetch";
//

const store = configureStore([loginMiddleware, linksMiddleware]);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
