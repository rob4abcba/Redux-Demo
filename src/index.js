import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";

// // //STORE -> GLOBALIZED STATE

// //ACTION (human description of what I want to do) INCREMENT
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   };
// };

// //REDUCER (computer changes state to accomplish ACTION)
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// let store = createStore(counter);
const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // //Display in console
// myStore.subscribe(() => console.log(myStore.getState()));

// // //DISPATCH
// myStore.dispatch(increment());
// // store.dispatch(decrement());
// // store.dispatch(decrement());

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
