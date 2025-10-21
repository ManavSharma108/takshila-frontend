import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

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
      {/* ✅ Outer Background (Matched to Homepage #e5e2df) */}
      <div className="bg-[#e5e2df] pb-6 flex justify-center px-6 transition-colors duration-500">
        {/* 🌿 Glossy Green Footer Container */}
        <footer
          className="relative w-full max-w-[1400px] rounded-3xl 
          bg-gradient-to-br from-[#2E4B45]/95 via-[#2E4B45]/90 to-[#1f332e]/90 
          border border-white text-gray-200 
          backdrop-blur-3xl shadow-2xl py-14 px-8 md:px-20 
          overflow-hidden transition-all duration-500"
        >
          {/* Glossy Shine Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20 blur-sm opacity-70"></div>

          {/* Content Grid */}
          <div className="relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
            {/* Logo + Info */}
            <div className="space-y-6">
              <img
                src="assets/logoo.svg"
                alt="Takshila Logo"
                className="h-14 w-14 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              />
              <p className="text-sm leading-relaxed text-gray-200">
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
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition backdrop-blur-md shadow-sm hover:shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                    >
                      <img
                        src={`assets/${icon}`}
                        alt={icon}
                        className="h-4 w-4 invert"
                      />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Customer Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
                CUSTOMER SERVICES
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                {["Our Story", "FAQ's", "Contact us", "Blogs"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:underline hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy & Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
                Privacy & Legal
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                {[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Refund Policy",
                  "Shipping Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:underline hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
                Subscribe Newsletter
              </h3>
              <p className="text-sm mb-4 text-gray-300">
                Sign up for the latest offers and exclusives.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-l-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-md"
                />
                <button className="px-4 rounded-r-lg bg-white/20 hover:bg-white/30 transition">
                  <img
                    src="assets/mail.svg"
                    alt="Send"
                    className="h-5 w-5 invert"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Gloss Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          {/* Copyright */}
          <div className="relative mt-12 text-center text-xs border-t pt-6 border-white/10 text-gray-300">
            Copyright © 2025 Takshila. All Rights Reserved.
          </div>
        </footer>
      </div>

      {/* Scroll Progress Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#2E4B45]/90 to-[#243a35]/90 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] flex items-center justify-center transition-all duration-300"
      >
        <svg
          className="absolute w-12 h-12 transform -rotate-90"
          viewBox="0 0 36 36"
        >
          <path
            stroke="#b3dbd0"
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
          className="h-6 w-6 z-10 text-[#b3dbd0]"
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
