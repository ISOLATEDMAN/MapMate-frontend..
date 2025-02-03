import React, { useState, useEffect } from "react";
import { FaRegMap } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
        setScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full h-16 z-50 transition-all duration-300 transform flex items-center ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white/60 backdrop-blur-sm"}`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="/" title="MapMate" className="flex items-center group transition-transform duration-300 hover:scale-105">
          <FaRegMap size={32} className="text-blue-600" />
          <h1 className="ml-3 text-2xl sm:text-3xl font-bold text-blue-700">MapMate</h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <button 
            onClick={() => scrollToSection("whatisMapMate")}
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            Features
          </button>
          <a href="#" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            Pricing
          </a>
          <a href="/login" className="ml-4 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200">
            Try Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 rounded-md text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40">
          <nav className="flex flex-col items-center py-5 space-y-5">
            <button
              onClick={() => scrollToSection("whatisMapMate")}
              className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Features
            </button>
            <a href="#" className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="#" className="px-4 py-2 bg-blue-600 text-white text-xl font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200" onClick={() => setMenuOpen(false)}>
              Try Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;