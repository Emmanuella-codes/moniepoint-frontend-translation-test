import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { classNames, infoItems, services } from "./types";
import { Slide, Fade } from "react-awesome-reveal";

const InfoSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 text-white md:px-[5rem] gap-9 my-16">
        <div className="w-[80%]">
          <div className="flex flex-col gap-9">
            <div className="">
              <Slide direction="left">
                <h4 className="font-primary-1 text-5xl animate__el">
                  Need numbers?
                </h4>
              </Slide>
            </div>
            <div className="flex flex-row flex-wrap gap-4">
              <Slide direction="left">
                {" "}
                {infoItems.map((item, idx) => (
                  <button
                    key={idx}
                    className={classNames(
                      item.current
                        ? "bg-gray-300 text-gray-800 flex items-center"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-full px-5 py-2 bg-dark-blue"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </Slide>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-3">
              <Fade direction="up">
                {" "}
                <label className="">
                  <span className=" block text-sm font-medium text-slate-300">
                    Enter the country
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 px-5 py-2 bg-dark-blue border shadow-sm border-slate-300 text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1"
                    placeholder="Australia"
                  />
                </label>
                <label className="">
                  <span className="block text-sm font-medium text-slate-300">
                    Choose travel dates
                  </span>
                  <DatePicker
                    portalId="root-portal"
                    showIcon
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(dates) => {
                      const [start, end] = dates;
                      setStartDate(start);
                      setEndDate(end);
                    }}
                    selectsRange
                    dateFormat="dd MMM"
                    placeholderText="11 Apr - 20 Apr"
                    className="text-slate-400 mt-1 px-5 py-2 bg-dark-blue border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1"
                  />
                </label>
              </Fade>
            </div>
            <div>
              <Fade direction="up">
                <button className="w-full rounded-full px-8 py-3 bg-mid-orange text-white">
                  Calculate
                </button>
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          <div className="">
            <h5>Insurance services</h5>
            <div className="flex flex-row flex-wrap gap-4">
              <Fade direction="up">
                {services.slice(0, 5).map((item, idx) => (
                  <button key={idx} className="text-slate-500">
                    {item}
                  </button>
                ))}
              </Fade>
            </div>
          </div>
          <div>
            <h5>Company</h5>
            <div className="flex flex-row flex-wrap gap-4">
              <Fade direction="up">
                {services.slice(5, 10).map((item, idx) => (
                  <button key={idx} className="text-slate-500">
                    {item}
                  </button>
                ))}
              </Fade>
            </div>
          </div>
          <div>
            <h5>Bonus</h5>
            <div className="flex flex-row flex-wrap gap-4">
              <Fade direction="up">
                {services.slice(10, 13).map((item, idx) => (
                  <button key={idx} className="text-slate-500">
                    {item}
                  </button>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center text-white md:px-16 pb-1">
      <div className="flex flex-row items-center">
        <Slide direction="left">
          <div className="flex-shrink-0 items-center">
            <img src="/logo-white.png" alt="logo" className="h-9 w-auto" />
          </div>

          <div>
            <p>Darcy's insurance product</p>
          </div>
        </Slide>
      </div>

      <div>
        <Slide direction="right">
          <p className="underline">Privacy policy</p>
        </Slide>
      </div>
    </div>
  );
};

export default InfoSection;
