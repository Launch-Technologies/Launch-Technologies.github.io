import React from 'react';
import 'antd/dist/antd.min.css';
// import 'antd/dist/antd.css'; // DEBUG
import { UserProvider } from 'context/user';
import ReactDOM from 'react-dom/client';
import App from './App';
import './helper.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
