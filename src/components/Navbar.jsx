import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import AuthModals from "./AuthModals";

export default function Navbar() {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login");

  // 🔹 Refs for outside click detection
  const profileRef = useRef(null);
  const searchRef = useRef(null);
  const aboutRef = useRef(null);

  const handleOpenModal = (type) => {
    setModalType(type);
    setModalOpen(true);
    setShowProfileMenu(false);
    setIsMobileMenuOpen(false);
  };

  const handleCloseModal = () => setModalOpen(false);

  // 🔹 Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target))
        setShowAboutMenu(false);
      if (profileRef.current && !profileRef.current.contains(event.target))
        setShowProfileMenu(false);
      if (searchRef.current && !searchRef.current.contains(event.target))
        setShowSearch(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 Auto-close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileItems = [
    { name: "Home", path: "/" },
    { name: "Community", path: "/community" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "My Activity", path: "/my-activity" },
    { name: "Our Story", path: "/our-story" },
    { name: "Blogs", path: "/blogs" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-center px-8 py-4 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-6xl space-x-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500">
          {/* 🔹 Logo */}
          <div>
            <img src="assets/logo.png" alt="Logo" className="h-8" />
          </div>

          {/* 🔹 Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-white">
            {[
              { name: "Home", path: "/" },
              { name: "Community", path: "/community" },
              { name: "Catalogue", path: "/catalogue" },
              { name: "My Activity", path: "/my-activity" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all ${
                  isActive(item.path)
                    ? "text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* 🔹 About Us Dropdown */}
            <div ref={aboutRef} className="relative about-dropdown">
              <button
                onClick={() => setShowAboutMenu(!showAboutMenu)}
                className={`flex items-center transition ${
                  location.pathname.includes("/our-story") ||
                  location.pathname.includes("/blogs")
                    ? "text-white font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                About Us ▾
              </button>

              <div
                className={`absolute left-0 mt-2 w-44 rounded-lg border border-white/20 backdrop-blur-xl bg-white/90 text-gray-800 shadow-lg z-50 transition-all duration-300 ease-in-out transform origin-top ${
                  showAboutMenu
                    ? "opacity-100 scale-y-100 translate-y-0"
                    : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <Link
                  to="/our-story"
                  className={`block px-4 py-2 rounded-t-lg transition ${
                    isActive("/our-story")
                      ? "bg-gray-100 text-black font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setShowAboutMenu(false)}
                >
                  Our Story
                </Link>
                <Link
                  to="/blogs"
                  className={`block px-4 py-2 transition ${
                    isActive("/blogs")
                      ? "bg-gray-100 text-black font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setShowAboutMenu(false)}
                >
                  Blogs
                </Link>
              </div>
            </div>
          </nav>

          {/* 🔹 Desktop Buttons & Search/Profile */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-full backdrop-blur-md transition text-sm">
              Ai Designer
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-full backdrop-blur-md transition text-sm">
              + Your Design
            </button>

            {/* 🔍 Search Popup (Glassy Style) */}
            <div ref={searchRef} className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <img
                  src="assets/search.svg"
                  alt="Search"
                  className="h-5 w-5 invert"
                />
              </button>

              {showSearch && (
                <div
                  className="absolute right-0 mt-3 flex items-center gap-2 p-2 
                             backdrop-blur-xl bg-white/10 border border-white/20
                             rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                             animate-fadeIn"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className="w-64 bg-transparent text-white placeholder-gray-300 
                               px-4 py-2 rounded-full focus:outline-none"
                  />
                  <button
                    className="p-2 bg-white/20 hover:bg-white/30 border border-white/30 
                               text-white rounded-full transition shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            {/* 🛒 Cart */}
            <button className="relative">
              <img
                src="assets/cart.svg"
                alt="Cart"
                className="h-5 w-5 invert"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
                0
              </span>
            </button>

            {/* 👤 Profile */}
            <div ref={profileRef} className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <img
                  src="assets/profile.svg"
                  alt="Profile"
                  className="h-5 w-5 invert"
                />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-4 flex flex-col items-center space-y-3 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleOpenModal("login")}
                    className="relative w-[130px] text-white font-medium py-2 rounded-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 hover:from-white/20 hover:to-white/10 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleOpenModal("signup")}
                    className="relative w-[130px] text-white font-medium py-2 rounded-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:from-white/20 hover:to-white/10 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 🔹 Auth Modals */}
      <AuthModals
        isOpen={modalOpen}
        type={modalType}
        onClose={handleCloseModal}
        switchType={(type) => setModalType(type)}
      />
    </>
  );
}
