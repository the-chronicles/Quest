import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="m-5 mx-4 flex h-full items-center justify-center p-5"
    >
      <div className="flex flex-col items-center justify-center font-[Inter]">
        <div className="w-fit items-center justify-center rounded-full border-2 border-[#CFD3EF] bg-[#FAFAFD] px-4 py-2 uppercase text-[#747999]">
          Here Always
        </div>
        <div className="text-center">
          <h1 className="mb-4 mt-5 font-semibold text-[#060E23] md:text-5xl">
            24/7 support to help you with <br />
            anything
          </h1>
          <div className="mt-11 grid grid-cols-1 gap-2 md:grid-cols-4">
            <div className="flex h-56 items-center justify-center rounded-md bg-[#f8f9fb] px-5 py-5 md:col-span-2">
              <div className=" flex flex-col items-center justify-center">
                <div className="h-10 w-10 items-center justify-center">
                  <img src="/customer-service-fill.png" alt="" />
                </div>
                <div>
                  <h1 className=" text-lg font-[Inter] text-[#17171c]">Email + Chat Support </h1>
                  <p className=" text-xs font-[Inter] text-[#828b9c]">We’re here to address any requests you might have.</p>
                </div>
              </div>
            </div>
            <div className="flex h-56 items-center justify-center rounded-md bg-[#f8f9fb] px-5  py-5 md:col-span-2">
              <div className=" flex flex-col items-center justify-center">
                <div className="h-10 w-10 items-center justify-center">
                  <img src="/gift-2-fill.png" alt="" />
                </div>
                <div>
                  <h1 className="text-lg font-[Inter] text-[#17171c]">Over $500,000 in benefits.</h1>
                  <p className="text-xs font-[Inter] text-[#828b9c]">Obtain discounts on top services to help expand your business.</p>
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
