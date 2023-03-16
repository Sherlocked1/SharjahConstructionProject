import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './features/app/App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './providers/AuthProvider';
import { BrowserRouter as Router } from "react-router-dom";
import DialogProvider from './providers/dialog_provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
    <DialogProvider>
      <AuthProvider>
          <App />
      </AuthProvider>
      </DialogProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
