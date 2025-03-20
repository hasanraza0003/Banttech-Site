import { FaRightLong } from "react-icons/fa6";

export const Partnership = () => {
  return (
    <div className="flex items-center justify-between gap-24 px-72 py-24 bg-[#f1efe5] relative space-y-6">

     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-1/4"
        >
          <path
            className="fill-current text-secondary opacity-30"
            d="M0 51.76c36.21-2.25 77.57-3.58 126.42-3.58 320 0 320 57 640 57 271.15 0 312.58-40.91 513.58-53.4V0H0z"
          ></path>
          <path
            className="fill-current text-secondary opacity-50"
            d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V0H0z"
          ></path>
          <path
            className="fill-current text-secondary"
            d="M0 0v3.4C28.2 1.6 59.4.59 94.42.59c320 0 320 84.3 640 84.3 285 0 316.17-66.85 545.58-81.49V0z"
          ></path>
        </svg>
     

      {/* Left Content */}
      <div className="max-w-xl mt-36 pr-16">
        <p className="text-gray-500 uppercase tracking-[3px] text-sm">
          PartnerShip
        </p>
        <h1 className="text-[42px] font-bold mt-2 text-b-1">
          Synergy To <span className="text-secondary font-s">Growth</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Our key assets — skilled, experienced, data-driven developers help us
          stay ahead of the other IT outsourcing companies.
        </p>

        <button className="flex justify-center items-center gap-4 mt-6 px-8 py-3 text-b-1 border-2 border-secondary rounded-full font-semibold hover:bg-secondary hover:text-white transition">
          LET'S CONNECT <FaRightLong />
        </button>
      </div>

      {/* Right Side - Lottie Animation */}
      <div className="w-1/2 mt-36">
        <img src="assets\images\partnership.webp" alt="PartnerShip" />
      </div>
    </div>
  );
};
