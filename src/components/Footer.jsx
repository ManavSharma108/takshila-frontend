import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Footer({ theme: propTheme }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // 🧠 Auto-detect dark theme only on Catalogue page
  const autoTheme =
    location.pathname.toLowerCase().includes("catalogue") ||
    location.pathname.toLowerCase().includes("/catalogue")
      ? "dark"
      : "light";

  const theme = propTheme || autoTheme;
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Outer Background */}
      <div
        className={`${
          isDark ? "bg-black" : "bg-[#e5e2df]"
        } pb-6 flex justify-center px-6 transition-colors duration-500`}
      >
        {/* Frosted Container */}
        <footer
          className={`relative w-full max-w-[1400px] rounded-3xl ${
            isDark
              ? "bg-black/80 border-white/20 text-gray-200"
              : "bg-white/40 border-gray-200 text-gray-800"
          } backdrop-blur-3xl shadow-2xl py-14 px-8 md:px-20 overflow-hidden transition-all duration-500`}
        >
          {/* Glossy Shine Overlay */}
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-b from-white/10 via-transparent to-transparent"
                : "bg-gradient-to-b from-white/60 via-transparent to-transparent"
            } pointer-events-none`}
          ></div>
          <div
            className={`absolute top-0 left-0 right-0 h-[2px] ${
              isDark ? "bg-white/30" : "bg-gray-300"
            } blur-sm opacity-70`}
          ></div>

          {/* Content Grid */}
          <div className="relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
            {/* Logo + Info */}
            <div className="space-y-6">
              <img
                src="assets/logoo.svg"
                alt="Takshila Logo"
                className="h-14 w-14"
              />
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Takshila is a company focused on creating decentralized shared
                P2P economic systems to enable freedom in digital business
                environments for all stakeholders.
              </p>

              <div className="flex space-x-4 pt-2">
                {["facebook.svg", "instagram.svg", "linkedin.svg"].map(
                  (icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                        isDark
                          ? "border-white/20 bg-white/5 hover:bg-white/20"
                          : "border-gray-300 bg-white/50 hover:bg-gray-200"
                      } transition backdrop-blur-md`}
                    >
                      <img
                        src={`assets/${icon}`}
                        alt={icon}
                        className={`h-4 w-4 ${
                          isDark ? "invert" : "opacity-80"
                        }`}
                      />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Customer Services */}
            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                CUSTOMER SERVICES
              </h3>
              <ul
                className={`space-y-2 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {["Our Story", "FAQ's", "Contact us", "Blogs"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`hover:underline ${
                        isDark ? "hover:text-white" : "hover:text-black"
                      } transition`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy & Legal */}
            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Privacy & Legal
              </h3>
              <ul
                className={`space-y-2 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Refund Policy",
                  "Shipping Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`hover:underline ${
                        isDark ? "hover:text-white" : "hover:text-black"
                      } transition`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Subscribe Newsletter
              </h3>
              <p
                className={`text-sm mb-4 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Sign up for the latest offers and exclusives.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className={`w-full px-4 py-3 rounded-l-lg ${
                    isDark
                      ? "bg-white/10 text-white placeholder-gray-400"
                      : "bg-white text-gray-800 placeholder-gray-500"
                  } focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-md`}
                />
                <button
                  className={`px-4 rounded-r-lg transition ${
                    isDark
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  <img
                    src="assets/mail.svg"
                    alt="Send"
                    className={`h-5 w-5 ${
                      isDark ? "" : "invert brightness-200"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className={`mt-12 text-center text-xs border-t pt-6 ${
              isDark
                ? "border-white/10 text-gray-400"
                : "border-gray-300 text-gray-600"
            }`}
          >
            Copyright © 2025 Takshila. All Rights Reserved.
          </div>
        </footer>
      </div>

      {/* Scroll Progress Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full ${
          isDark ? "bg-black/40" : "bg-white/60"
        } backdrop-blur-md border border-white/30 shadow-lg hover:shadow-white/20 flex items-center justify-center transition-all duration-300`}
      >
        <svg
          className="absolute w-12 h-12 transform -rotate-90"
          viewBox="0 0 36 36"
        >
          <path
            stroke={isDark ? "white" : "black"}
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset={100 - scrollProgress}
            d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32z"
            style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 z-10 ${isDark ? "text-white" : "text-black"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}
