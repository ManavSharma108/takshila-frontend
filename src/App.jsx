import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all your pages
import Home from "./pages/Home";
import Community from "./pages/Community";
import Catalogue from "./pages/Catalogue";
import MyActivity from "./pages/MyActivity";
import OurStory from "./pages/OurStory";
import Blogs from "./pages/Blogs";
import axios from "axios"
export default function App() {
  const check=async(e)=>{
    try {
      console.log("in")
      axios.defaults.withCredentials=true
      const {data}=axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/check`);
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="bg-[#111] text-white min-h-screen">
      <button className="cursor-pointer z-100 p-4 bg-blue-500" onClick={check}>CHECK AUTH</button>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/my-activity" element={<MyActivity />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}
