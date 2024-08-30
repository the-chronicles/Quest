import React from "react";

function Hero() {
  return (
    <section className="flex rounded-b-2xl border-b-2 h-full mx-4 items-center justify-center bg-gradient-to-b from-white to-transparent">  {/* h-screen  */}
      <div className=" text-center font-[Inter]">
        <div className="bg-gradient-to-b from-[#060E23] to-[#060e2381] bg-clip-text text-3xl font-bold text-transparent">
          <h1 className="mb-4 mt-5 md:text-5xl">
            Protecting Your <br />
            Financial Future, Today.
          </h1>
          <p className="mb-4 text-xs md:text-lg">
            Protecting Financial Institutions with Tailored, Cutting-Edge
            Security Solutions <br />
            that Safeguard Assets, Ensure Compliance, and Preserve Trust.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-9">
          <div>
            <a href="#">
              <button className="rounded-full border-2 border-[#1835F2] bg-gradient-to-tr from-[#1835F2] to-blue-500 px-4 py-2 text-white">
                Safeguard now
              </button>
            </a>
          </div>
          <div>
            <a href="#">
              <button className="rounded-full border-2 border-[#B5B7BD] px-4 py-2">
                Live Demo
              </button>
            </a>
          </div>
        </div>

        <div>
          <div className="flex items-end justify-center">
            <img src="/Chrome2.png" alt="Icon" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
