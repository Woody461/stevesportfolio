import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client

import App from './App';

const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);