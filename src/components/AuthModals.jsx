import React, { useState, useEffect } from "react";

export default function AuthModals({ isOpen, type, onClose, switchType }) {
  const [step, setStep] = useState("phone");
  const [otp, setOtp] = useState(["", "", "", ""]);

  useEffect(() => {
    if (!isOpen) {
      setStep("phone");
      setOtp(["", "", "", ""]);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        const next = document.getElementById(`otp-${index + 1}`);
        if (next) next.focus();
      }
    }
  };

  const handleOtpBackspace = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      if (prev) prev.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal wrapper:
          - small screens: items-end -> modal sits at bottom
          - md+ screens: items-center -> centered vertically */}
      <div
        className={`fixed inset-0 z-50 flex items-end md:items-center justify-center transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Modal container:
            - on mobile: rounded top corners, small side gaps (w ~ 92%)
            - on md+: original rounded corners and layout */}
        <div
          className={`relative bg-white/15 backdrop-blur-2xl border border-white/30 shadow-2xl
                      rounded-t-3xl md:rounded-3xl w-[92%] max-w-4xl text-white
                      p-6 sm:p-8 md:p-10 mb-4 md:mb-0
                      ${
                        type === "login"
                          ? "flex flex-col md:flex-row"
                          : "flex flex-col"
                      }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Logo Circle (keeps its position above the box) */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black backdrop-blur-md rounded-full w-20 h-20 shadow-xl flex items-center justify-center border border-white/30">
            <img
              src="assets/logoo.svg"
              alt="Logo"
              className="h-14 w-14 rounded-full"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* LOGIN */}
          {type === "login" ? (
            <>
              <div className="flex-1 flex flex-col justify-center pr-0 md:pr-10">
                <h2 className="text-2xl font-semibold text-center md:text-left mb-2">
                  Login to Takshila
                </h2>
                <hr className="border-white/30 mb-6" />

                {step === "phone" ? (
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStep("otp");
                    }}
                  >
                    <p className="text-xs text-gray-200 text-center md:text-left">
                      Please enter your registered mobile number to login via
                      OTP
                    </p>

                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full bg-white/30 text-white px-4 py-3 rounded-full placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40"
                    />

                    <p className="text-xs text-gray-300 text-center md:text-left">
                      By continuing, I agree to the{" "}
                      <a href="#" className="underline">
                        Terms of Service
                      </a>{" "}
                      &{" "}
                      <a href="#" className="underline">
                        Privacy Policy
                      </a>
                    </p>

                    <button
                      type="submit"
                      className="w-full text-sm bg-black/80 py-3 rounded-full text-white font-medium hover:bg-black transition"
                    >
                      GET OTP
                    </button>
                  </form>
                ) : (
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("OTP Verified ✅");
                      onClose();
                    }}
                  >
                    <div className="flex justify-center space-x-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          maxLength="1"
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          onKeyDown={(e) => handleOtpBackspace(index, e)}
                          className="otp-input"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                        />
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 py-3 rounded-full text-white font-medium hover:bg-green-700 transition"
                    >
                      Verify OTP
                    </button>
                  </form>
                )}

                <hr className="border-white/30 my-6" />
                <p className="text-center text-sm text-gray-300">
                  Don’t have an account?{" "}
                  <button
                    onClick={() => switchType("signup")}
                    className="text-blue-400 hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              </div>

              {/* Divider for desktop */}
              <div className="hidden md:block w-px bg-white/30 mx-10" />

              {/* Social (right side on desktop) */}
              <div className="flex-1 flex flex-col justify-center items-center space-y-6">
                <button className="flex items-center text-sm space-x-3 bg-white text-gray-800 px-5 py-2 rounded-full shadow-md hover:shadow-lg transition">
                  <img
                    src="assets/google.svg"
                    alt="Google"
                    className="h-5 w-5"
                  />
                  <span>Continue with Google</span>
                </button>

                <button className="flex items-center text-sm space-x-3 bg-[#1877F2] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#0d64d2] transition">
                  <img
                    src="assets/facebook.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </>
          ) : (
            /* SIGNUP - single column */
            <div className="w-full flex flex-col justify-center items-center px-0 md:px-16">
              <h2 className="text-3xl font-semibold text-center mb-2">
                Create Account
              </h2>
              <p className="text-center text-sm text-gray-200 mb-6">
                Join Takshila
              </p>

              <form className="space-y-4 w-full text-xs max-w-2xl">
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input-style"
                  />
                  <input
                    type="text"
                    placeholder="Middle Name"
                    className="input-style"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input-style"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email ID"
                  className="input-style"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-style"
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="input-style"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input-style"
                />

                <button
                  type="submit"
                  className="w-full bg-black/80 py-3 rounded-full text-white font-medium hover:bg-black transition"
                >
                  Sign Up
                </button>
              </form>

              <hr className="border-white/30 my-6 w-full max-w-2xl" />

              <div className="flex flex-col text-sm sm:flex-row justify-center items-center gap-4">
                <button className="flex items-center space-x-3 bg-white text-gray-800 px-5 py-2 rounded-full shadow-md hover:shadow-lg transition">
                  <img
                    src="assets/google.svg"
                    alt="Google"
                    className="h-5 w-5"
                  />
                  <span>Sign up with Google</span>
                </button>

                <button className="flex items-center space-x-3 bg-[#1877F2] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#0d64d2] transition">
                  <img
                    src="assets/facebook.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                  <span>Sign up with Facebook</span>
                </button>
              </div>

              <p className="text-center text-gray-200 text-sm mt-4">
                Already have an account?{" "}
                <button
                  onClick={() => switchType("login")}
                  className="text-blue-400 hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
