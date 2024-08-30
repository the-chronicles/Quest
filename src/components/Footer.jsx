import React from 'react'

function Footer() {
  return (
    <footer>
      <div>
        <nav className="flex items-center justify-between px-16 py-4 font-[Inter] text-[15px]">
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
          <div className="flex items-center gap-8 font-semibold text-sm">
            <p>Designed & Developed with 💖 from Nuel & Chronicles</p>
          </div>
        </nav>
      </div>
    </footer>
  );
  
}

export default Footer