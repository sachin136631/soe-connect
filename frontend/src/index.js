import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SignupProvider } from './context/SignupContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<SignupProvider>
  <App/>
</SignupProvider>
);
