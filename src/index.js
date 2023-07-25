import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);