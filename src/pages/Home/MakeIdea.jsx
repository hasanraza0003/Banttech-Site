import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { FaRightLong } from "react-icons/fa6";

export const MakeIdea = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://assets7.lottiefiles.com/packages/lf20_nco8im2c.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading Lottie animation:", error));
  }, []);

  return (
    <div className="flex items-center justify-between gap-44 px-72 py-20 bg-white">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <p className="text-gray-500 uppercase tracking-[3px] text-sm">
          If not now when?
        </p>
        <h1 className="text-[42px] font-bold mt-2 text-b-1">
          Make Your Idea A <span className="text-secondary">Reality</span>
        </h1>
        <p className="text-gray-600 mt-4">
          We empower businesses with out-of-the-box digital solutions. We
          understand the necessity of a skilled team that recognizes your
          business obstructions and supports you with best-in-class & easy-to-use
          digital solutions.
        </p>
        <p className="text-gray-600 mt-4">
          Setup a free consultation to understand how we can take your ideas
          from concept to reality.
        </p>
        <button className="flex justify-center items-center gap-4 mt-6 px-8 py-3 text-b-1 border-2 border-secondary rounded-full font-semibold hover:bg-secondary hover:text-white transition">
          Shall We? <FaRightLong />
        </button>
      </div>

      {/* Right Side - Lottie Animation */}
      <div className="w-1/2">
      {animationData && <Lottie loop autoplay animationData={animationData} className="w-full p-8" />}
      </div>
    </div>
  );
};
