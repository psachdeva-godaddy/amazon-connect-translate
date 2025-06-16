import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "amazon-connect-streams"; // This will make the `connect` available in the current context.
import "amazon-connect-chatjs";

// Amplify imports for base install
//import { Amplify } from "aws-amplify";
//import awsExports from "./aws-exports";
//Amplify.configure(awsExports);
// 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
