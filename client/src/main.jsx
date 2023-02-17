
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./component/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
//import Register from './component/Register/Register'
//import SelectOperation from './component/SelectOperation/SelectOperation'
import WelcomeBot from './component/WelcomeBot/WelcomeBot'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>


        <Route path="/login" element={<Login />} />  
         
      
   
</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
    {/*<Register />*/}
    {/* <SelectOperation /> */}
    <WelcomeBot />
  </React.StrictMode>,
)
