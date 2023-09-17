import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { infoItems, services } from "./types";

const InfoSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
    <>
      <div className="grid md:grid-cols-2 text-white md:px-[5rem] gap-9 my-16">
        <div className="w-[80%] slide-left">
          <div className="flex flex-col gap-9">
            <div className="">
              <h4 className="font-primary-1 text-5xl">Need numbers?</h4>
            </div>
            <div className="flex flex-row flex-wrap gap-4">
              {infoItems.map((item, idx) => (
                <button
                  key={idx}
                  className="bg-dark-blue rounded-full px-5 py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-3">
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
            </div>
            <div>
              <button className="w-full md:w-[87%] rounded-full px-8 py-3 bg-mid-orange text-white">
                Calculate
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16 slide-right">
          <div className="">
            <h5>Insurance services</h5>
            <div className="flex flex-row flex-wrap gap-4">
              {services.slice(0, 5).map((item, idx) => (
                <button key={idx} className="text-slate-500">
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h5>Company</h5>
            <div className="flex flex-row flex-wrap gap-4">
              {services.slice(5, 10).map((item, idx) => (
                <button key={idx} className="text-slate-500">
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h5>Bonus</h5>
            <div className="flex flex-row flex-wrap gap-4">
              {services.slice(10, 13).map((item, idx) => (
                <button key={idx} className="text-slate-500">
                  {item}
                </button>
              ))}
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
        <div className="flex-shrink-0 items-center">
          <img src="/logo-white.png" alt="logo" className="h-9 w-auto" />
        </div>
        <div>
          <p>Darcy's insurance product</p>
        </div>
      </div>

      <div>
        <p className="underline">Privacy policy</p>
      </div>
    </div>
  );
};

export default InfoSection;
