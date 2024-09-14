import React from "react";

function Industry() {
  return (
    <section
      id="industry"
      className="m-5 mx-4 flex h-full items-center justify-center p-5"
    >
      <div className="flex flex-col items-center justify-center font-[Inter]">
        <div className="w-fit items-center justify-center rounded-full border-2 border-[#CFD3EF] bg-[#FAFAFD] px-4 py-2 text-[#747999]">
          INDUSTRIES WE SERVE
        </div>
        <div className="text-center">
          <h1 className="mb-4 mt-5 text-5xl font-semibold text-[#060E23]">
            Security Solutions for Every <br />
            Corner of the Financial Industry
          </h1>
          <p className="mb-4 text-xs text-[#72758A] md:text-lg">
            Specialized Expertise, Unparalleled Protection.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 text-center ">
          <div class="flex h-[217px] flex-col items-center justify-start  gap-[33px] border-l border-r border-[#f8f9fb] px-8 py-10">
            <div class="relative h-8 w-8">
              <img src="/bank-fill.png" alt="" />
            </div>
            <div class="flex h-[72px] flex-col items-center justify-start gap-3 self-stretch">
              <div class="self-stretch text-center text-xl font-bold leading-7 text-[#17171c]">
                Banking
              </div>
              <div class="self-stretch text-center font-['Inter'] text-xs font-normal leading-none text-[#828b9c]">
                Safeguarding your bank’s assets and customer trust.
              </div>
            </div>
          </div>

          <div class="flex h-[217px] flex-col items-center justify-start gap-[33px] border-l border-r border-[#f8f9fb] px-8 py-10">
            <div class="relative h-8 w-8">
              <img src="/coins-fill.png" alt="" />
            </div>
            <div class="flex h-[72px] flex-col items-center justify-start gap-3 self-stretch">
              <div class="self-stretch text-center text-xl font-bold leading-7 text-[#17171c]">
                Investment Firms
              </div>
              <div class="self-stretch text-center font-['Inter'] text-xs font-normal leading-none text-[#828b9c]">
              Protecting your investments and your reputation..
              </div>
            </div>
          </div>

          <div class="flex h-[217px] flex-col items-center justify-start gap-[33px] border-l border-r border-[#f8f9fb] px-8 py-10">
            <div class="relative h-8 w-8">
              <img src="/account-pin-box-fill.png" alt="" />
            </div>
            <div class="flex h-[72px] flex-col items-center justify-start gap-3 self-stretch">
              <div class="self-stretch text-center text-xl font-bold leading-7 text-[#17171c]">
              Insurance Companies
              </div>
              <div class="self-stretch text-center font-['Inter'] text-xs font-normal leading-none text-[#828b9c]">
              Securing sensitive data in a complex industry.
              </div>
            </div>
          </div>

          <div class="flex h-[217px] flex-col items-center justify-start gap-[33px] border-l border-r border-[#f8f9fb] px-8 py-10">
            <div class="relative h-8 w-8">
              <img src="/building-fill.png" alt="" />
            </div>
            <div class="flex h-[72px] flex-col items-center justify-start gap-3 self-stretch">
              <div class="self-stretch text-center text-xl font-bold leading-7 text-[#17171c]">
              Fintech Startups
              </div>
              <div class="self-stretch text-center font-['Inter'] text-xs font-normal leading-none text-[#828b9c]">
              Empowering innovation with robust security.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industry;
