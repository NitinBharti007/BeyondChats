import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-app-polyfill/stable"; // Polyfills for stable features
import "react-app-polyfill/ie11"; // Polyfills for IE11 support (optional)
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
