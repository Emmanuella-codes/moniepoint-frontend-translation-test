import React from "react";

const Review = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:px-[5rem] my-7 text-white gap-20">
      <div className="order-last md:col-span-2 bg-dark-blue px-14 py-12 rounded-[4rem]">
        <div className="grid md:grid-cols-3 gap-3 md:gap-20">
          <div className="col-span-1">
            <img
              src="/images/review-1.jpg"
              className="rounded-full"
              alt="founder"
            />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-10">
              <div>
                <h4 className="text-3xl font-semibold">Georgia Darcy</h4>
                <p className="font-thin">The agency founder</p>
              </div>
              <div>
                <p>
                  With over twenty years of industry experience. Darcy's
                  insurance products' has learned a lot. The one thing we know
                  for sure is that we're all about you. If you find searching
                  for insurance frustrating, we are here to help.
                </p>
              </div>
              <div>
                <button className="bg-light-blue px-8 py-3 rounded-full text-black">
                  Get a consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of card div */}
      <div className="grid-cols-1">
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
