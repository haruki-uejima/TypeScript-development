import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import promiseSample from './asynchronous/promise'
// import asyncAwaitSample from './asynchronous/asyncAwait'
// promiseSample()
// asyncAwaitSample()
