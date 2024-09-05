import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        {/* <div className='mx-auto my-[60px] mb-20 h-[90dvh] w-11/12 rounded-2xl bg-[#07091c]'>
        <div className="relative h-full w-full">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 font-[Figtree] text-white">
              <h1 className="text-4xl font-bold font-[Inter]">
                Join Our Mission. Protect your business
              </h1>
              <div className="flex gap-5 text-xl">
                
                  <h1 className="rounded-full bg-red-500 px-5 py-1">
                    More Info
                  </h1>
                
                
                  <h1 className="rounded-full border-2 border-red-500 px-5 py-1">
                    Buy
                  </h1>
                
              </div>
            </div>
          </div>

        </div> */}

        <div className="mx-auto my-[60px] flex h-[90dvh] w-11/12 flex-col items-center justify-center gap-[69px] rounded-3xl bg-[#07091c]">
          {/* <div class="mx-auto my-[60px] h-[575px] px-[279px] py-[127px] bg-[#07091c] rounded-3xl flex-col justify-start items-center gap-[69px] inline-flex"> */}
          <div class="w-[682px] text-center font-['Inter'] text-6xl font-bold leading-[72px] text-[#dadcea]">
            Join Our Mission. Protect your Business
          </div>
          <div class="flex flex-col items-center justify-start gap-6">
            <div class="h-10 w-10 items-center justify-center">
              <img src="/Container.png" alt="" />
            </div>
            <div class="flex items-center justify-center px-1">
              <button className="rounded-full border-2 border-[#1835F2] bg-gradient-to-tr from-[#1835F2] to-blue-500 px-4 py-2 text-white">
                <a href="#">Join Quest</a>
              </button>
            </div>
          </div>
        </div>

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
          <div className="flex items-center gap-8 text-sm font-semibold">
            <p>Designed & Developed with 💖 from Nuel & Chronicles</p>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
