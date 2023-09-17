import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row text-white md:px-[5rem] gap-20 my-20">
      <div className="">
        <h4 className="font-primary-1 text-[5rem] md:text-7xl leading-[1] w-[70%] md:w-[59%]">
          Support at every <span className="text-[7.8rem]">Step</span>
        </h4>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <div
            className="mb-3 border-t-2 rounded-full bg-white animate-spin
aspect-square w-8 h-8 flex justify-center items-center text-very-dark-blue text-2xl"
          >
            *
          </div>
          <p className="text-sm md:text-lg">
            Participate in the{" "}
            <span className="text-light-blue underline">loyalty program</span>.
            Pay for the service online to get bonuses for our other services. We
            have a lot of bonuses!
          </p>
        </div>
        <div className="pt-3">
          <div
            className="mb-3 border-t-2 rounded-full bg-white animate-spin
aspect-square w-8 h-8 flex justify-center items-center text-very-dark-blue text-2xl"
          >
            *
          </div>
          <p className="text-sm md:text-lg">
            You can help other people: choose a donation fund and share the link
            with your friends!
          </p>
        </div>
        <div className="">
          <button className="w-full rounded-full px-8 border-2 py-3 border-mid-orange text-mid-orange">
            Choose a fund
          </button>
        </div>
      </div>
      <div className="md:w-[25%]">
        <img src="/images/family.jpg" alt="family" className="rounded-full " />
      </div>
    </div>
  );
};

export default Services;
