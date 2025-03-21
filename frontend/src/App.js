import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import StudentSignUp1 from './pages/StudentSignUp1A';
import RecruiterSignUp1 from './pages/RecruiterSignUp1A';
import Homepage from './pages/HomepageA';
import StudentSignUp2 from './pages/StudentSignUp2A';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/StudentSignUp1" element={<StudentSignUp1/>}/>
          <Route path="/RecruiterSignup1" element={<RecruiterSignUp1/>}/>
          <Route path="/StudentSignUp2" element={<StudentSignUp2/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App
