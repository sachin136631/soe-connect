import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SignupProvider } from './context/SignupContext';
import { RecruiterSignUpProvider } from './context/RecruiterSignUpContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RecruiterSignUpProvider>
<SignupProvider>
  <App/>
</SignupProvider>
</RecruiterSignUpProvider>
);
