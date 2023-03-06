import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TechCrunchContextProvider } from './context/TechCrunchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TechCrunchContextProvider>
      <App />
    </TechCrunchContextProvider>
  </React.StrictMode>
);


