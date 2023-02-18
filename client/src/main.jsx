import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./component/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

//import Register from './component/Register/Register'
//import SelectOperation from './component/SelectOperation/SelectOperation'
//import WelcomeBot from "./component/WelcomeBot/WelcomeBot";
// import theme from "./theme";



ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);
{
  /*<Register />*/
}
{
  /* <SelectOperation /> */
}
//   <WelcomeBot />
// </React.StrictMode>,
