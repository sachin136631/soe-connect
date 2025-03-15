import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/HomepageR"
import Postpage from './pages/Postpage/PostpageR'
import User from "./pages/Userprofile/UserR";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/postpage" element={<Postpage />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </Router>
  )
}

export default App

