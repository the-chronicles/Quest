import React from "react";

function Hero() {
  return (
    <section className="mx-4 flex h-full items-center justify-center md:rounded-b-2xl md:border-b-2 bg-gradient-to-b from-white to-transparent">
      {/* h-screen  */}
      <div className=" font-[Inter]">
        <div className="text-3xl text-left md:text-center">
          <h1 className="mb-4 mt-5 font-semibold  text-[#060E23] md:text-5xl">
            Protecting Your <br />
            Financial Future, Today.
          </h1>
          <p className="mb-4 text-xs text-[#72758A] md:text-lg">
            Protecting Financial Institutions with Tailored, Cutting-Edge
            Security Solutions <br />
            that Safeguard Assets, Ensure Compliance, and Preserve Trust.
          </p>
        </div>

        <div className="mb-9 flex justify-center gap-4">
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
          <div className="hidden md:flex items-end justify-center">
            <img src="/Chrome2.png" alt="Icon" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
