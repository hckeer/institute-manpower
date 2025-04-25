import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-md fixed w-full top-0 z-10">
      <a href="/" className="text-xl font-bold text-blue-600">Amar Mavi</a>
      <ul className="hidden md:flex space-x-6 font-medium">
        <li><a href="#home" className="hover:text-blue-600">HOME</a></li>
        <li><a href="#about" className="hover:text-blue-600">ABOUT</a></li>
        <li><a href="#course" className="hover:text-blue-600">COURSE</a></li>
        <li><a href="#blog" className="hover:text-blue-600">BLOG</a></li>
        <li><a href="#contact" className="hover:text-blue-600">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
