import React from 'react'
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
const UserContext = createContext();

const ProtectedRoutes = () => {
  const [user, setUser] = useState("usuario"); //adentro iria la data
console.log(user, "hola user")
  return (
    <div>
          <UserContext.Provider value={user}/>
          <h1>{`Hello ${user}!`}</h1>
    </div>
  )
}

export default ProtectedRoutes
