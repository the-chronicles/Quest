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
          {/* <div class="mx-auto my-[60px] h-[575px] px-[279px] py-[127px] bg-[#07091c] rounded-3xl flex-col justify-start items-center gap-[69px] inline-flex"> */}

        {/* <div className="mx-auto flex h-full w-10/12 flex-col items-center justify-center gap-[69px] rounded-3xl bg-[#07091c] py-16">
          <div class="w-[682px] text-center font-[Inter] text-3xl font-bold text-[#dadcea] md:text-6xl">
            Join Our Mission. Protect <br /> your Business
          </div>
          <div class="flex flex-col items-center justify-start gap-6">
            <div class="h-20 w-20 items-center justify-center">
              <img src="/Container.png" alt="" />
            </div>
            <div class="flex items-center justify-center px-1">
              <button className="rounded-full border-2 border-[#1835F2] bg-gradient-to-tr from-[#1835F2] to-blue-500 px-4 py-2 text-white">
                <a href="#">Join Quest</a>
              </button>
            </div>
          </div>
        </div> */}





<div className="mx-auto flex h-full w-11/12 md:w-11/12 flex-col items-center justify-center gap-11 rounded-3xl bg-[#07091c] py-16"> 
  <div className="text-center font-[Inter] text-2xl   text-[#dadcea] md:text-6xl">
    <span className="block">Join Our Mission. Protect</span> 
    <span className="block">your Business</span>
  </div>
  <div className="flex flex-col items-center justify-start gap-6">
    <div className="h-16 w-16 md:h-20 md:20 items-center justify-center">
      <img src="/Container.png" alt="" />
    </div>
    <div className="flex items-center justify-center px-1">
      <button className="rounded-full border-2 border-[#1835F2] bg-gradient-to-tr from-[#1835F2] to-blue-500 px-6 py-3 text-white">
        <a href="#">Join Quest )]</a>
      </button>
    </div>
  </div>
</div>



          {/* Navbar */}
        <nav className="items-center justify-between px-8 py-4 font-[Inter] text-[15px] md:flex md:px-16">
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
