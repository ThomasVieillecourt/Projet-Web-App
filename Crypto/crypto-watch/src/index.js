import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: rootReducer,
  // middleware: composeWithDevTools(applyMiddleware(thunk)),
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
