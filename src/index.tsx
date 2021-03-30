import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import RecipesContextProvider from './contexts/recipesContext';

// global context
// onLoadComponent -> get data from localStorage and save to global context
// app
// layout
// routes
// route components
// UI -> modal

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RecipesContextProvider>
        <App />
      </RecipesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
