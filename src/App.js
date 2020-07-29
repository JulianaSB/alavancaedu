import React from 'react';
import './global.css';
import Routes from './routes';
import  { BrowserRouter } from 'react-router-dom';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
