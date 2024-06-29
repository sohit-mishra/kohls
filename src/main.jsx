import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>   
      <AuthContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthContextProvider>
    </ChakraProvider>
  </BrowserRouter>
);