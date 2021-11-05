import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SecondPage from './routes/secondpage'

/*
 * This is the file where you will either render all your routes (as seen below),
 * or only render your <App />
 */
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='secondpage' element={<SecondPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
