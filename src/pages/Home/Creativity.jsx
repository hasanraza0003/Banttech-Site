import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const qualities = [
  { title: "60", subtitile: "+NPS(net promoter score)." },
  { title: "15", subtitile: "+ years of experience." },
  { title: "83", subtitile: "% of projects successfully launched." },
  { title: "99", subtitile: "% satisfied customers." },
];

export const Creativity = () => {
  return (
    <div className="w-full h-full bg-secondary">
      {/* top sec  */}
      <div className="px-72 text-center">
        <h2 className="text-[42px] p-8 font-s text-b-1">
          Creativity + Tech + Human Emotions
        </h2>
        <p className="text-4xl text-b-1 font-serif font-semibold">
          <span>Because top-notch brands are crafted on multiple fronts.</span> <br />
          <span>This rare combo means less shopping around for our</span><br /> <span>clients and more ways to get </span>
          <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text">creative</span> for us.
        </p>
        <p className="m-8">
          Get in touch with our team of experts at 
          <button className="mx-2 text-sm p-1 px-2 bg-b-1/90 text-white font-semibold rounded-md "> +91 8791162233</button> or send an email to
          <button className="mx-2 text-sm p-1 px-2 bg-b-1/90 text-white font-semibold rounded-md uppercase "> poke@banttech.com</button>
        </p>
      </div>

      {/* image sec 2 */}
      <div className="relative w-full h-full bg-[url(assets/images/me.jpg)] bg-center bg-cover flex justify-center items-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/10"></div>

        {/* Content Wrapper */}
        <div className="relative w-full h-full px-72 mb-40 py-24 text-white space-y-10">
          <h2 className="text-3xl font-semibold">Why Do We EXIST ?</h2>
          <p className="w-full">
            To ensure a complete balance between technology and marketing. We
            are committed to developing digital solutions that convert OUTCOMES
            for our clients. Either your product does not convert customers or
            your company is struggling to find an automated, easy-to-use system
            that minimizes business efforts, in both cases, you can count on us.
          </p>
          <p>
            Our expectations are extremely high and we hold ourselves
            accountable. We all do the dirty work. No one in the company sees
            themselves above any task.
          </p>
          <h2 className="text-[42px] font-s">Prashant Saxena</h2>
          <span className="font-bold">Found - Banttech.com</span> <br />
          <span className="text-sm p-1 px-2 bg-b-1/80 text-yellow-300/80 font-semibold">Wearing Several Hats</span>
        </div>

        {/* Buttons Section */}
        <div className="relative w-full h-full flex gap-4">
          <button className="text-lg text-w-1 bg-secondary rounded-full px-12 py-3 font-bold">
            {" "}
            <span style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>
              WHY CHOOSE US ?
            </span>
          </button>
          <button className="text-lg font-bold flex justify-center items-center text-secondary rounded-full px-12 py-3 border-2 border-secondary ">
            HOW WE WORK ? <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Shape Section  */}
      <div>
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

        <ul className="flex justify-between items-center px-72 pb-20">
          {qualities.map((prev, idx) => (
            <li key={idx} className="flex">
              <h2 className="text-[80px] text-b-1 font-bold">{prev.title}</h2>
              <p>{prev.subtitile}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
