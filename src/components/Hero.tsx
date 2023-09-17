import React from "react";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:px-20 pt-24 pb-5">
      {/* hero elements */}
      <div className="animate__slideInLeft">
        <h1 className="font-primary-1 text-8xl text-white lg:text-[9.4rem] md:leading-[0.9] font-bold">
          Darcy's insurance products
        </h1>
      </div>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2">
        <div className="flex flex-col gap-7 text-white md:w-3/5 animate__slideInLeft">
          <div>
            <div
              className="mb-5 border-t-2 rounded-full bg-white animate-spin
aspect-square w-8 flex justify-center items-center text-very-dark-blue text-2xl"
            >
              *
            </div>
            <p className="text-xl">
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
            <p className="text-xl">
              We offer a choice of low deductions and include no cost
              value-added services.
            </p>
          </div>
          <button className="arrow bg-gradient-to-r from-[#1F283D] via-[#0B0F17] to-[#1F283D] w-1/5 md:w-1/4 py-2 rounded-2xl flex">
            <HiOutlineArrowLongDown size={70} />
          </button>
        </div>
        <div className="mt-5 md:mt-0 md:w-[77%] animate__slideInUp">
          <img
            src="/images/air-balloons.jpg"
            alt="air balloons"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
