import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// imported react files and app.js for rendering

// assign root to the root dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* call the app class to html body */}
    <App />
  </React.StrictMode>,
);
