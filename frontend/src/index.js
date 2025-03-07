import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SignupProvider } from './context/SignupContext';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SignupProvider>
  <App/>
</SignupProvider>
);
