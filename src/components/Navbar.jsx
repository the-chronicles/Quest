import React from "react";

function Navbar() {
  return (
    <header>
      <div>
        <nav className="flex items-center justify-between px-16 py-7 font-[Inter] text-[15px]">
          <div className="flex items-center gap-11">
            <div>
              <img src="/logo.png" alt="Quest Logo" className="w-20" />
            </div>
            <ul className="flex gap-8 text-[#5F6266]">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Industries</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <ul className="flex items-center gap-7 font-semibold">
            <li>
              <a href="#">Log in </a>
            </li>
            <li>
              <button className="rounded-full border-2 border-[#1835F2] bg-gradient-to-tr from-[#1835F2] to-blue-500 px-4 py-2 text-white">
                <a href="#">Join Quest now</a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
