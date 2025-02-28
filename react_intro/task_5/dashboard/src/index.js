import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Notifications from './Notifications/Notifications';

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <div className="root">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)