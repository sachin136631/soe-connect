import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import StudentSignUp1 from './pages/StudentSignUp1';
import RecruiterSignUp1 from './pages/RecruiterSignUp1';
import Homepage from './pages/Homepage';
import StudentSignUp2 from './pages/StudentSignUp2';
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
