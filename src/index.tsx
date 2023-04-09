import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

import { Navbar } from './components/navbar/Navbar';

import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Navbar/>

    <BrowserRouter>
      <App/>
    </BrowserRouter>

    <Footer/>
  </React.StrictMode>
);

reportWebVitals();