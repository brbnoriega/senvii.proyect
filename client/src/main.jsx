import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
//import rootReducer from "../src/reducer/reducer";
//import {createStore} from "redux";

//const store = createStore(rootReducer)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



