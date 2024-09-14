import React from "react";

function Hero() {
  return (
    <section className="mx-4 flex h-full items-center justify-center bg-gradient-to-b from-white to-transparent p-3 md:rounded-b-2xl md:border-b-2 md:p-0">
      {/* h-screen  */}
      <div className="font-[Inter]">
        <div className="text-left text-3xl md:text-center">
          <div className="mb-4 mt-5 font-semibold text-[#060E23] md:text-5xl">
            <span class="block md:hidden">
              Protecting Your Financial Future, Today.
            </span>
            <span class="hidden md:block">
              Protecting Your Financial <br />
              Future, Today.
            </span>
          </div>

          <div class="mb-4 text-sm text-[#72758A] md:text-lg">
            <span class="block md:hidden">
              Protecting Financial Institutions with Tailored, Cutting-Edge
              Security Solutions that Safeguard Assets, Ensure Compliance, and
              Preserve Trust.
            </span>
            <span class="hidden md:block">
              Protecting Financial Institutions with Tailored, Cutting-Edge
              Security Solutions <br />
              that Safeguard Assets, Ensure Compliance, and Preserve Trust.
            </span>
          </div>
        </div>

        <div className="mb-9 flex gap-4 md:justify-center">
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
          <div className="hidden items-end justify-center md:flex">
            <img src="/Chrome.png" alt="Icon" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
