import React from "react";
import Carousel from "./Carousel";

const Review = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:px-[5rem] my-7 text-white gap-20">
      <div className="order-last md:col-span-2 bg-dark-blue px-14 py-12 rounded-[4rem]">
        <Carousel />
      </div>
      {/* end of card div */}
      <div className="grid-cols-1 md:order-last">
        <div className="flex flex-row gap-6">
          <div
            className="mb-5 border-t-2 rounded-full bg-white animate-spin
aspect-square w-8 h-8 flex justify-center items-center text-very-dark-blue text-2xl"
          >
            *
          </div>
          <div>
            <h4 className="font-primary-1 text-8xl md:text-9xl leading-[0.9]">
              Our experts say
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
