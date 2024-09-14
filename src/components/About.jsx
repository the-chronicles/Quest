import React from "react";

function About() {
  return (
    <section
      id="about"
      className="m-5 mx-4 flex h-full items-center justify-center p-5"
    >
      <div className="flex flex-col items-center justify-center gap-6 font-[Inter]">
        <div className="w-fit items-center justify-center rounded-full border-2 border-[#CFD3EF] bg-[#FAFAFD] px-3 py-2 text-xs uppercase text-[#747999] md:px-4 md:text-sm">
          Perks
        </div>
        <div class="text-center text-3xl font-bold text-[#06091c] md:text-5xl">
          <span class="block md:hidden">Why Partner with Us?</span>
          <span class="hidden md:block">
            Why Partner with Us? Exclusive <br /> Perks for Your Peace of Mind
          </span>
        </div>

        <a href="#">
          <button className="rounded-full border-2 border-[#1835F2] bg-gradient-to-tr from-[#1835F2] to-blue-500 px-4 py-2 text-white">
            Safeguard now
          </button>
        </a>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-4 p-5 text-center md:grid-cols-2">
          <div class="flex h-fit flex-col items-center gap-8 rounded-lg border border-[#ebecf5] bg-[#f8f9fb] p-5">
            <div class="relative">
              <img src="/customer-service-2-fill.png" alt="" />
            </div>
            <div class="flex flex-col items-center self-stretch">
              <div class="self-stretch text-center text-xl font-bold leading-7 text-[#17171c]">
                Priority Support!
              </div>
              <div class="self-stretch text-center text-base text-[#828b9c] md:text-sm">
                As a valued client, you receive priority access to our support
                team. Whether it’s troubleshooting or expert advice, our
                security specialists are available 24/7 to assist you with any
                concerns or issues.
              </div>
            </div>
          </div>

          <div class="flex h-fit flex-col items-center  gap-8 rounded-lg border border-[#ebecf5] bg-[#f8f9fb] p-5">
            <div class="relative">
              <img src="/database-fill.png" alt="" />
            </div>
            <div class="flex flex-col items-center self-stretch">
              <div class="self-stretch text-center text-xl font-bold leading-7 text-[#17171c]">
                Proactive Threat Intelligence Updates
              </div>
              <div class="self-stretch text-center text-base text-[#828b9c] md:text-sm">
                As a valued client, you receive priority access to our support
                team. Whether it’s troubleshooting or expert advice, our
                security specialists are available 24/7 to assist you with any
                concerns or issues.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
