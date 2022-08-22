import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/Global/App';
import { Global } from './style';


const root = ReactDOM.createRoot(document.getElementById('caraes'));
root.render(
  <>
    <App />
    <Global/>
  </>
);

