import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import colors from './color-data.json';
import './index.css';

export const ColorContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorContext.Provider value={{ colors }}>
      <App />
    </ColorContext.Provider>
  </React.StrictMode>,
)
