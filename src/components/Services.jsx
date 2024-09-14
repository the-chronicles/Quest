import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="m-5 mx-4 flex h-full items-center justify-center p-5"
    >
      <div className="flex flex-col items-center justify-center font-[Inter]">
        <div className="w-fit items-center justify-center rounded-full border-2 border-[#CFD3EF] bg-[#FAFAFD] px-2 py-1 text-xs uppercase text-[#747999] md:px-4 md:py-2 md:text-sm">
          Here Always
        </div>
        <div className="text-center">
          <div className="mb-4 mt-5 text-center font-[Inter] text-xl font-semibold text-[#060E23] md:text-6xl">
            <span className="block">24/7 support to help you with</span>
            <span className="block">anything</span>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 gap-4 p-5 text-center md:grid-cols-2">
            <div class="flex h-[217px] flex-col items-center justify-start gap-[33px] border-b border-t border-[#f8f9fb] px-8 py-10 md:border-b-0 md:border-l md:border-r md:border-t-0">
              <div class="relative h-8 w-8">
                <img src="/customer-service-fill.png" alt="" />
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

            <div class="flex h-[217px] flex-col items-center justify-start gap-[33px] border-b border-t border-[#f8f9fb] px-8 py-10 md:border-b-0 md:border-l md:border-r md:border-t-0">
              <div class="relative h-8 w-8">
                <img src="/gift-2-fill.png" alt="" />
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
      </div>
    </section>
  );
}

export default Services;
