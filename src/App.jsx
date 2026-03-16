
import Nav from "./Components/Nav";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./Components/Layout";
import Features from "./pages/Features";
import Login from "./pages/Login";
import Room from "./pages/Room";

const App =() => {
  return (
    <div className="bg-green-500">
   git add .
git commit -m "fix deployment"
git push   <Router>
        <Routes>
            <Route element={<Layout />} >
            <Route path="/"element={<Home />} />
            <Route path="/about"element={<About />} />
            <Route path="/contact"element={<Contact />} />
            <Route path="/features"element={<Features />} />
            <Route path="/room"element={<Room />} />
            <Route path="/login"element={<Login />} />
          </Route>          
        </Routes>
      </Router>
    </div>
  );
};

export default App;