import React from "react";

function Navbar() {
  return (
    <header>
      <div>
        <nav className="flex items-center justify-between bg-white px-11 py-2.5">
          <div className="flex items-center gap-4 text-black">
            <div>
              <img src="/logo.png" alt="Quest-logo" className="" />

              <ul className="flex items-center gap-4 text-black">
              <li className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group">
                <a href="#">Features</a>
              </li>
              <li className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group">
                <a href="#">Services</a>
              </li>
              <li className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group">
                <a href="#">Industries</a>
              </li>
              <li className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group">
                <a href="#">About</a>
              </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex items-center gap-4 text-black">
              
              <li className="text-decoration-none hover:text-decoration-underline hover:text-decoration-2 group">
                <a href="#"></a>
              </li>
              <li className="rounded-full bg-red-500 px-2 py-1 text-white">
                <a href="#">Join Quest now</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
