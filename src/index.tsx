import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RecipiesContextProvider from './contexts/recipiesContext';

// global context
// onLoadComponent -> get data from localStorage and save to global context
// app
// layout
// routes
// route components
// UI -> modal

ReactDOM.render(
  <React.StrictMode>
    <RecipiesContextProvider>
      <App />
    </RecipiesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
