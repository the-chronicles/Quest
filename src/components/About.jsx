import React from "react";

function About() {
  return (
    <section
      id="about"
      className="m-5 mx-4 flex h-full items-center justify-center p-5"
    >
      <div className="flex flex-col gap-4 items-center justify-center font-[Inter]">
        <div className="w-fit items-center justify-center rounded-full border-2 border-[#CFD3EF] bg-[#FAFAFD] px-4 py-2 uppercase text-[#747999]">
          Perks
        </div>
        <div class="w-[816px] text-center font-['Inter'] text-5xl font-bold leading-[72px] text-[#06091c]">
          Why Partner with Us? Exclusive Perks for Your Peace of Mind
        </div>
        <div>
          <a href="#">
            <button className="rounded-full border-2 border-[#1835F2] bg-gradient-to-tr from-[#1835F2] to-blue-500 px-4 py-2 text-white">
              Safeguard now
            </button>
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-4 p-5 text-center md:grid-cols-2">
          <div class="flex h-[350px] flex-col items-center justify-start gap-[33px] rounded-lg border border-[#ebecf5] bg-[#f8f9fb] px-8 py-10">
            <div class="relative ">
              <img src="/customer-service-2-fill.png" alt="" />
            </div>
            <div class="flex h-[72px] flex-col items-center justify-start gap-3 self-stretch">
              <div class="self-stretch text-center text-xl font-bold leading-7 text-[#17171c]">
                Email + Chat Support
              </div>
              <div class="self-stretch text-center font-['Inter'] text-xs font-normal leading-none text-[#828b9c]">
                We’re here to address any requests you might have..
              </div>
            </div>
          </div>

          <div class="flex h-[350px] flex-col items-center justify-start gap-[33px] rounded-lg border border-[#ebecf5] bg-[#f8f9fb] px-8 py-10">
            <div class="relative">
              <img src="/database-fill.png" alt="" />
            </div>
            <div class="flex h-[72px] flex-col items-center justify-start gap-3 self-stretch">
              <div class="self-stretch text-center text-xl font-bold leading-7 text-[#17171c]">
                Over $500,000 in benefits.
              </div>
              <div class="self-stretch text-center font-['Inter'] text-xs font-normal leading-none text-[#828b9c]">
                Obtain discounts on top services to help expand your business.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
