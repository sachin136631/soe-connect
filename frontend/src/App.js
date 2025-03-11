import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import StudentSignUp1 from './pages/StudentSignUp1';
import RecruiterSignUp1 from './pages/RecruiterSignUp1';
import Homepage from './pages/Homepage';
import StudentSignUp2 from './pages/StudentSignUp2';
import RecruiterSignUp2 from './pages/RecruiterSignUp2';
import RecruiterHomepg from './pages/RecruiterHomepg';
import StudentHomepg from './pages/StudentHomepg';
import Navbar from './components/Navbar';
import Post from './pages/Share';
import QuickPost from './pages/QuickPost'
import MyPost from './pages/MyPost';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/StudentSignUp1" element={<StudentSignUp1/>}/>
          <Route path="/RecruiterSignup1" element={<RecruiterSignUp1/>}/>
          <Route path="/StudentSignUp2" element={<StudentSignUp2/>}/>
          <Route path="/RecruiterSignup2" element={<RecruiterSignUp2/>}/>
          <Route path="/RecruiterHomepg" element={<RecruiterHomepg/>}/>
          <Route path="/StudentHomepg" element={<StudentHomepg/>}/> 
          <Route path="/Navbar" element={<Navbar/>}/>
          <Route path="/Post" element={<Post/>}/>
          <Route path="/QuickPost" element={<QuickPost/>}/>
          <Route path="/MyPost" element={<MyPost/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App
