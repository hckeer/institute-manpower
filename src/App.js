import React from "react";
import "./index.css";
import "./Contact.jsx"
import Home from "./Home.jsx";
import Aboutus from "./Aboutus.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from "./Blog.jsx"
import aiii from "./Images/aiiii.jpg"
import back from "./Images/color.jpg"
import Courses from "./Courses.jsx";






import Contact from "./Contact.jsx";


export default function App() {
  return (
    <div className="min-h-screen relative"
    style={{
      background: 'linear-gradient(to right, #f8f9fa, #e0e0e0)',
      
    }}>
      <Router>
        
      
      
      

    
      <div className="font-sans p-4">
 
        <main className="space-y-8">
        <Routes>

   
        <Route path="/" element={<Home />} />
        
          <Route path="/about" element={<Aboutus />} />
   
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          </Routes>
   
   
   
   
        </main>
      </div>
 
</Router>

    </div>
    
    
  
    
    
    
  );
}
