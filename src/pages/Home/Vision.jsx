import { FaRightLong } from "react-icons/fa6";

export const Vision = () => {
  return (
    <div className="flex items-center justify-between gap-52 px-72 py-20 bg-w-2">
      {/* Left Content */}
      <div className="w-1/2">
        <img src="assets/images/vision.webp" className="w-full p-8" />
      </div>

      {/* Right Side  */}
      <div className="max-w-xl space-y-6">
        <p className="text-gray-500 uppercase tracking-[3px] text-sm">
        VISION
        </p>
        <h1 className="text-[38px] font-bold mt-2 text-b-1">
        Incorporate high <span className="text-secondary">Technology</span> for every business owner
        </h1>
        <p className="text-gray-600 mt-4">
        To be the company that best understands and satisfies consumers with the high-quality, low-cost, easy-to-use products/services and self-fulfilment needs of the entire team — globally.
        </p>
        <button className="flex justify-center items-center gap-4 mt-6 px-8 py-3 text-b-1 border-2 border-secondary rounded-full font-semibold hover:bg-secondary hover:text-white transition">
          Know More About Us <FaRightLong />
        </button>
      </div>
    </div>
  );
};
