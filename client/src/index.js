import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
// import { store } from './Redux/store';
// import { Provider } from 'react-redux';
// console.log(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
     <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  
  
);
