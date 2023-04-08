import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import './index.scss';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

import { Navbar } from './components/navbar/Navbar';

import { BrowserRouter } from 'react-router-dom';

const root: Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Navbar></Navbar>

    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();