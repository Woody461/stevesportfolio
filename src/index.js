import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react'; // Import StrictMode

import App from './App';

const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);