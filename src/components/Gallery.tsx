import React, { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".slide-up, .slide-right, .slide-left"
    );
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("slide-up")) {
            entry.target.classList.add("animate__slideInUp");
          }
          if (entry.target.classList.contains("slide-right")) {
            entry.target.classList.add("animate__slideInRight");
          }
          if (entry.target.classList.contains("slide-left")) {
            entry.target.classList.add("animate__slideInLeft");
          }
        }
      });
    }, options);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white my-16 md:px-[5rem]">
      <div className="grid md:grid-cols-5 gap-12">
        <div className="gallery-1 col-span-2 relative slide-left">
          <img
            src="/images/living-interior.jpg"
            alt="interior"
            className="rounded-3xl"
          />
          <button className="absolute bottom-10 left-3 bg-black rounded-full px-5 py-2">
            Home insurance
          </button>
        </div>
        <div className="col-span-1 slide-left">
          <img
            src="/images/lifebuoy.jpg"
            alt="lifebuoy"
            className="rounded-full h-[25vh] md:h-[55vh]"
          />
        </div>
        <div className="col-span-2 px-7 md:px-14 py-9 bg-dark-blue rounded-[4rem] slide-up">
          <div>
            <h4 className="font-primary-1 text-[4rem] pb-4 slide-right">
              Best choice
            </h4>
            <p className="pb-10 slide-right">
              Not all insurance are the same. That's why agency knows that your
              insurance should be customized to fit your situation.
            </p>
          </div>
          <div className="pt-[5rem] ">
            <button className="bg-mid-orange px-9 py-3 rounded-full text-black slide-right">
              View all services
            </button>
          </div>
        </div>
      </div>
      {/* same size images */}
      <div className="grid md:grid-cols-3 gap-4 pt-14 slide-left">
        <div className="relative">
          <img
            src="/images/car.jpg"
            alt="car"
            className="rounded-2xl h-[40vh]"
          />
          <button className="absolute bottom-4 left-3 bg-black rounded-full px-5 py-2">
            Vehicle damage
          </button>
        </div>
        <div className="relative">
          <img
            src="/images/cottage.jpg"
            alt="house"
            className="rounded-2xl h-[40vh]"
          />
          <button className="absolute bottom-4 left-3 bg-black rounded-full px-5 py-2">
            Mortgage insurance
          </button>
        </div>
        <div className="relative">
          <img
            src="/images/pills.jpg"
            alt="pills"
            className="rounded-2xl h-[40vh]"
          />
          <button className="absolute bottom-4 left-3 bg-black rounded-full px-5 py-2">
            Medical expenses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
