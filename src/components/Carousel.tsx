import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { reviewData } from "./types";

const Carousel = () => {
  return (
    <CCarousel>
      {reviewData.map((review, idx) => (
        <CCarouselItem key={idx}>
          <div className="grid md:grid-cols-3 gap-3 md:gap-20">
            <div className="col-span-1 slide-up">
              <CImage src={review.image} alt={review.alt} />
            </div>
            <div className="col-span-2 slide-right">
              <div className="flex flex-col gap-10">
                <div>
                  <h4 className="text-3xl font-semibold">{review.name}</h4>
                  <p className="font-thin">{review.job}</p>
                </div>
                <div>
                  <p>{review.overview}</p>
                </div>
                <div className="slide-up">
                  <button className="bg-light-blue px-8 py-3 rounded-full text-black">
                    Get a consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};

export default Carousel;
