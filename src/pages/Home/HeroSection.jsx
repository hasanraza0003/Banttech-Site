import React from "react";
import { FaHand } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <>
      <div className="w-full h-[80vh] flex flex-col md:flex-row justify-center px-72 pt-32 ">
        <div className="space-y-6">
          <button className="text-[12px] text-third font-semibold rounded-3xl border border-third  px-2 py-1">
            Enabling Digital Revolution
          </button>
          <p className="text-[35px] text-b-1 font-bold">
            WE ARE <span className="font-betterSaturday">NEW SCHOOL</span> MARKETERS, <br /> DESIGNERS, WRITERS
            AND DEVLOPERS
          </p>
          <h2 className="w-fit text-2xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500  bg-clip-text text-transparent">
            SHAPED BY TECH
          </h2>
          <button className="flex gap-2 justify-center items-center bg-b-2 rounded-full px-16 py-6  text-[16px] font-bold text-w-1">
            DISCUSS A PROJECT <FaHand className="text-xl text-secondary" />
          </button>
        </div>
        <div>
          <img
            src="assets\images\Bant-Tags.webp"
            alt="BANT_TAGS"
            className="w-[85%]"
          />
        </div>
      </div>

      {/* Shape Divider */}
      <div className="relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full rotate-180"
        >
          <path
            className="fill-secondary"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>
    </>
  );
};
