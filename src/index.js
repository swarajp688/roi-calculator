import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RoiProvider } from './Provider/RoiProvider'
ReactDOM.render(
  <React.StrictMode>
   
    <RoiProvider>
      <App />
    </RoiProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

