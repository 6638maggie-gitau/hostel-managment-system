
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Room from "./pages/Room";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./Admin/Dashboard";
import StudentDashboard from "./pages/StudentDashboard";

const App = () => {
  return (
    <Router>

      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/student-rooms" element={<Room />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
           <Route path="/admin" element={<Dashboard />} />  
           <Route path="/student-dashboard" element={<StudentDashboard />} />     
        </Route>
      </Routes>

    </Router>
  );
};

export default App;