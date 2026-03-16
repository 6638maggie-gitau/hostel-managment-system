
import {Link } from "react-router-dom"
import React, { useState } from "react"
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <nav className="bg-amber-400 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hostel MS</h1>
        <div className="space-x-8 text-lg">
      <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/about" className="hover:text-gray-300 transition"> About</Link>
        <Link to="/features" className="hover:text-gray-300 transition"> Features</Link>
        <Link to="/room" className="hover:text-gray-300 transition">Room</Link>
        <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
        <Link to="/login" className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">Login</Link>
        </div>
        </div>
        </nav>
    
   
    </>
  )
}

export default Nav