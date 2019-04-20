import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";

export default function configureStore(middlewares = []) {
  const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}
