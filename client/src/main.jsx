import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./component/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Register from './component/Register/Register'
//import SelectOperation from './component/SelectOperation/SelectOperation'
import WelcomeBot from "./component/WelcomeBot/WelcomeBot";


import React from "react";
import ReactDOM from "react-dom/client";
// import theme from "./theme";
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
{
  /*<Register />*/
}
{
  /* <SelectOperation /> */
}
//   <WelcomeBot />
// </React.StrictMode>,
