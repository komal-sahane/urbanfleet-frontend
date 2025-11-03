import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Router>
    <div>
      <Navbar/>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
       <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </div>
    </Router>
    
  );
}

export default App;
