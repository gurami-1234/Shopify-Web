import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContextComponent from 'contexts/ThemeContext/ThemeContext';
import AuthModalContextComponent from 'contexts/AuthModalContext/AuthModalContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeContextComponent>
        <AuthModalContextComponent>
          <App />
        </AuthModalContextComponent>
      </ThemeContextComponent>
    
    </Router>
    
  </React.StrictMode>
);