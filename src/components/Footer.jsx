import React from "react";

function Footer() {
  return (
    <footer>
      <div>

        <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center gap-11 rounded-3xl bg-[#07091c] py-16 md:w-11/12">
          <div className="text-center font-[Inter] text-2xl text-[#dadcea] md:text-6xl">
            <span className="block">Join Our Mission. Protect</span>
            <span className="block">your Business</span>
          </div>
          <div className="flex flex-col items-center justify-start gap-6">
            <div className="md:20 h-16 w-16 items-center justify-center md:h-20">
              <img src="/Container.png" alt="" />
            </div>
            <div className="flex items-center justify-center px-1">
              <button className="rounded-full border-2 border-[#1835F2] bg-gradient-to-tr from-[#1835F2] to-blue-500 px-6 py-3 text-white">
                <a href="#">Join Quest</a>
              </button>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="items-center space-y-2 md:space-y-0 justify-between px-8 py-4 font-[Inter] text-[15px] md:flex md:px-16">
          <div className="flex items-center gap-11">
            <div>
              <img src="/logo.png" alt="Quest Logo" className="w-28 md:w-20" />
            </div>
            <ul className="hidden gap-8 text-[#5F6266] md:flex">
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
          <div className="flex text-sm font-semibold">
            Designed & Developed with 💖 from Nuel & Chronicles
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
