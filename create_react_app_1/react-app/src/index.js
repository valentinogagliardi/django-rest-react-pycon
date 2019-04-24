import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

// temporary workaround for stubbing Fetch with Cypress
import "whatwg-fetch";
//

ReactDOM.render(<App />, document.getElementById("root"));
