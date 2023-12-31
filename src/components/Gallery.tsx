import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <div className="text-white my-16 md:px-[5rem]">
      <div className="grid md:grid-cols-5 gap-12">
        <div className="gallery-1 col-span-2 relative">
          <Fade direction="up">
            <img
              src="/images/living-interior.jpg"
              alt="interior"
              className="rounded-3xl"
            />
            <button className="absolute bottom-10 left-3 bg-black rounded-full px-5 py-2">
              Home insurance
            </button>
          </Fade>
        </div>

        <div className="col-span-1">
          <Slide direction="up">
            <img
              src="/images/lifebuoy.jpg"
              alt="lifebuoy"
              className="rounded-full h-[25vh] md:h-[55vh]"
            />
          </Slide>
        </div>

        <div className="col-span-2 px-7 md:px-14 py-9 bg-dark-blue rounded-[4rem]">
          <div>
            <Fade direction="up">
              <h4 className="font-primary-1 text-[4rem] pb-4">Best choice</h4>
              <p className="pb-10">
                Not all insurance are the same. That's why agency knows that
                your insurance should be customized to fit your situation.
              </p>
            </Fade>
          </div>
          <div className="pt-[5rem] flex px-[1rem] md:px-0">
            <Fade direction="up">
              <button className="bg-mid-orange px-9 py-3 rounded-full text-black">
                View all services
              </button>
            </Fade>
          </div>
        </div>
      </div>
      {/* same size images */}
      <Slide direction="right">
        <div className="grid md:grid-cols-3 gap-4 pt-14">
          <div className="relative">
            <img
              src="/images/car.jpg"
              alt="car"
              className="rounded-2xl md:h-[40vh]"
            />
            <button className="absolute bottom-4 left-3 bg-black rounded-full px-5 py-2">
              Vehicle damage
            </button>
          </div>
          <div className="relative">
            <img
              src="/images/cottage.jpg"
              alt="house"
              className="rounded-2xl md:h-[40vh]"
            />
            <button className="absolute bottom-4 left-3 bg-black rounded-full px-5 py-2">
              Mortgage insurance
            </button>
          </div>
          <div className="relative">
            <img
              src="/images/pills.jpg"
              alt="pills"
              className="rounded-2xl md:h-[40vh]"
            />
            <button className="absolute bottom-4 left-3 bg-black rounded-full px-5 py-2">
              Medical expenses
            </button>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Gallery;
