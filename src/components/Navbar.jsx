import React from "react";

function Navbar() {
  return (
    <header>
      <div>
        <nav className="flex items-center justify-between px-8 md:px-16 py-7 font-[Inter] text-[15px]">
          <div className="flex items-center gap-11">
            <div>
              <img src="/logo.png" alt="Quest Logo" className="w-20" />
            </div>
            <ul className=" gap-10 text-[#5F6266] hidden md:flex">
              <li>
                <a href="#features" aria-label="Features section">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" aria-label="Services section">
                  Services
                </a>
              </li>
              <li>
                <a href="#industries" aria-label="Industries section">
                  Industries
                </a>
              </li>
              <li>
                <a href="#about" aria-label="About section">
                  About
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex items-center gap-8 font-semibold">
            <li>
              <a href="#login" className="hidden md:flex " aria-label="Log in page">
                Log in
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="rounded-full border-2 border-[#1835F2] bg-gradient-to-tr from-[#1835F2] to-blue-500 px-4 py-2 text-white"
                aria-label="Join Quest now"
              >
                Join Quest now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
