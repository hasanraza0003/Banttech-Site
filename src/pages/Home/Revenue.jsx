export const Revenue = () => {
  return (
    <div className="w-full flex justify-center bg-white py-12 px-6 md:px-16 lg:px-72">
      <div className="w-full bg-blue-900 text-white flex items-center justify-between pr-44 px-8 py-8 rounded-lg shadow-lg">
        
        {/* Left Section - Icon and Text */}
        <div className="flex items-center gap-4">
          <img src="assets/images/revenue.gif" alt="Revenue" className="w-24" />
          <div>
            <h2 className="text-4xl  font-semibold text-gray-200">
              REVENUE DRIVEN FOR OUR CLIENTS
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mt-2">
              $3,182,299
            </h2>
          </div>
        </div>

        {/* Button */}
        <button className="bg-gradient-to-l from-[#f9ce34] via-[#f12178] to-[#6228d7] text-white font-semibold px-4 py-2 rounded-md shadow-md hover:opacity-90">
          GET STARTED WITH US
        </button>
      </div>
    </div>
  );
};
