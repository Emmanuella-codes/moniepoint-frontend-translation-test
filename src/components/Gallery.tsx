import React from "react";

const Gallery = () => {
  return (
    <div className="text-white">
      <div className="grid grid-col-3 gap-2">
        <div className="col-span-3 bg-gallery-pic-1">
          <button>Home insurance</button>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2 p-4">
          <h4 className="font-primary-1">Best choice</h4>
          <p>
            Not all insurance are the same. That's why agency knows that your
            insurance should be customized to fit your situation.
          </p>
          <button className="bg-mid-orange px-8 py-1 rounded-full text-black">
            View all services
          </button>
        </div>
      </div>
      {/* same size images */}
      <div className="grid grid-cols-3">
        <div>
          <button>Vehicle damage</button>
        </div>
        <div>
          <button>Mortgage insurance</button>
        </div>
        <div>
          <button>Medical expenses</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
