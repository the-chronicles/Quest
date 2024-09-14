import React from "react";

function Features() {
  return (
    <section
      id="features"
      className="m-5 mx-4 flex h-full items-center justify-center p-5"
    >
      <div className="flex flex-col items-center gap-6 justify-center font-[Inter]">
        <div className="w-fit items-center justify-center rounded-full border-2 border-[#CFD3EF] bg-[#FAFAFD] px-3 py-2 text-xs uppercase text-[#747999] md:px-4 md:text-sm">
          Quest's Features
        </div>
        <div className="gap-3 text-center">
          <div class="mb-4 mt-5 text-center text-3xl font-bold text-[#06091c] md:text-5xl">
            <span class="block md:hidden">
              Your Trusted Partner In Financial Security
            </span>
            <span class="hidden md:block">
              Your Trusted Partner In <br /> Financial Security
            </span>
          </div>

          <p className="text-sm text-[#72758A] md:text-lg">
            Comprehensive Security Solutions for the Financial Industry.
          </p>
        </div>



      {/* Grid section  */}
        <div className="grid grid-cols-1 gap-5 p-5  text-center font-[Inter] md:grid-cols-4">
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

          <div className="w-fit rounded-md bg-[#f8f9fb] px-5  md:col-span-1">
           

            <img className="h-fit w-fit " src="/padlock.png" />
            
            <h1 className="text-xl font-semibold text-[#060E23]">
              Customized Security Strategies
            </h1>
            <p className="text-[#72758A]">
              Tailored solutions designed to fit the unique needs of your
              financial institution.
            </p>
          </div>

          <div className="flex justify-center rounded-md bg-[#f8f9fb] p-5  md:col-span-3 md:col-start-2">
            <div className="flex items-center">
              <div className="text-left">
                <h1 className="text-xl font-semibold text-[#060E23]">
                  Quest Vault™
                </h1>
                <p className="text-[#72758A]">
                  Industry-leading encryption and data protection solutions to
                  safeguard sensitive information.
                </p>
              </div>

              <div>
                <img src="/Container.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
