import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './index.css';

import App from './App';
import RecipesContextProvider from './context/recipesContext';

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
