import { createStore, compose } from "redux";
import rootReducer from "./reducers";


const store = (() => {
  return createStore(
    rootReducer,
    undefined,
    compose(
    //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
    )
  );
})();

export default store;
