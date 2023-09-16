import React from "react";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-2 px-20 py-5">
      {/* hero elements */}
      <div>
        <h1 className="font-primary-1 text-white text-[9.4rem] leading-[0.9] font-bold">
          Darcy's insurance products
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-7 text-white w-3/5">
          <div>
            <div
              className="mb-5 border-t-2 rounded-full bg-white animate-spin
aspect-square w-8 flex justify-center items-center text-very-dark-blue text-2xl"
            >
              *
            </div>
            <p>
              Our <span className="text-light-blue underline">plans</span> are
              saving policyholders 30% - 60% on premiums
            </p>
          </div>
          <div>
            <div
              className="mb-5 border-t-2 rounded-full bg-white animate-spin
aspect-square w-8 flex justify-center items-center text-very-dark-blue text-2xl"
            >
              *
            </div>
            <p>
              We offer a choice of low deductions and include no cost
              value-added services.
            </p>
          </div>
          <button className="arrow bg-gradient-to-r from-[#1F283D] via-[#0B0F17] to-[#1F283D] w-1/4 py-2 rounded-2xl flex">
            <HiOutlineArrowLongDown size={70} />
          </button>
        </div>
        <div className="w-[77%]">
          <img
            src="/images/air-balloons.jpg"
            alt="air balloons"
            className="rounded-full  border-4 border-white border-opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
