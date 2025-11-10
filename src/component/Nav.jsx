import React, { useState } from "react";
import logo from "../assets/logo_dark.svg";
import { NavLink } from "react-router"; // ✅ use react-router-dom

const Nav = () => {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-amber-400 px-3 py-1 rounded-md text-black font-medium"
      : "hover:text-amber-400 transition";

  return (
<nav className="p-4 bg-gradient-to-r from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-lg border-b border-white/10 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink className={linkClasses} to="/">
            Home
          </NavLink>
          <NavLink className={linkClasses} to="/service">
            Service
          </NavLink>
          <NavLink className={linkClasses} to="/work">
            Our Work
          </NavLink>
          <NavLink className={linkClasses} to="/testimonial">
            Testimonial
          </NavLink>
          {/* Desktop Button */}
          <button className="px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-600 transition flex items-center gap-2">
            Connect <i className="ri-arrow-right-line"></i>
          </button>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          <i className={open ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 bg-gray-700 p-4 rounded-lg">
          <NavLink className={linkClasses} to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink
            className={linkClasses}
            to="/service"
            onClick={() => setOpen(false)}
          >
            Service
          </NavLink>
          <NavLink
            className={linkClasses}
            to="/work"
            onClick={() => setOpen(false)}
          >
            Our Work
          </NavLink>
          <NavLink
            className={linkClasses}
            to="/testimonial"
            onClick={() => setOpen(false)}
          >
            Testimonial
          </NavLink>

          {/* Mobile Button */}
          <button className="px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-600 transition flex items-center gap-2">
            Connect <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
