import React from "react";

function Features() {
  return (
    <section
      id="features"
      className="mx-4 flex h-full items-center justify-center p-5 m-5"
    >
      <div className="flex flex-col items-center justify-center font-[Inter]">
        <div className="w-fit items-center justify-center rounded-full border-2  bg-[#FAFAFD] border-[#CFD3EF] px-4 py-2 text-[#747999]">
          Quest's Features
        </div>
        <div className="text-center">
          <h1 className="mb-4 mt-5 font-semibold text-[#060E23] md:text-5xl">
            Your Trusted Partner in <br /> Financial Security
          </h1>
          <p className="mb-4 text-xs text-[#72758A] md:text-lg">
            Comprehensive Security Solutions for the Financial Industry.
          </p>
        </div>
        <div className="grid-col-1 grid gap-2 px-36 text-center font-[Inter] md:grid-cols-4">
          <div className="rounded-md bg-[#f8f9fb] px-5 pt-5 md:col-span-2">
            <h1 className="text-xl font-semibold text-[#060E23]">
              Secure Data Management
            </h1>
            <p className="text-[#72758A]">
              Industry-leading encryption and data protection solutions to
              safeguard sensitive information.
            </p>
            <img src="/Pattern.png" alt="" className="flex items-baseline" />
          </div>
          <div className="rounded-md bg-[#f8f9fb] px-5 pt-5 md:col-span-2">
            <h1 className="text-xl font-semibold text-[#060E23]">
              Advanced Threat Detection
            </h1>
            <p className="text-[#72758A]">
              Real-time monitoring and rapid response to emerging cyber threats.
            </p>
            <img src="/Figure.png" alt="" className="flex items-baseline" />
          </div>
          <div className="rounded-md bg-[#f8f9fb] md:col-span-1">
            <h1>Customized Security Strategies</h1>
          </div>
          <div className="rounded-md bg-[#f8f9fb] md:col-span-3">
            <h1>Quest Vault™</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
