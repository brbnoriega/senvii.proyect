import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import Register from './component/Register/Register'
//import SelectOperation from './component/SelectOperation/SelectOperation'
//import WelcomeBot from './component/WelcomeBot/WelcomeBot'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <Register />
      {/* <SelectOperation /> */}
      {/* <WelcomeBot /> */}
    </React.StrictMode>
  </ChakraProvider>
  ,
)
 //chakra installed
 console.log('hola')