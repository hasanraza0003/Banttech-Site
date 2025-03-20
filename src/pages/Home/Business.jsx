import { FaCheck } from "react-icons/fa";

export const Business = () => {
  return (
    <section className="py-28 px-72 font-sans bg-white">
      {/* Heading */}
      <div className="text-start mb-12 px-20">
        <h2 className="text-[38px] font-bold text-b-1 leading-snug">
          The Way We Can Help You <br /> Move Your Business{" "}
          <span className="text-secondary font-s">Online</span>
        </h2>
        <p className="text-b-1 text-[16px] mt-2 w-1/2 ">
          We changed the way local shop managed billing and inventory. Now you
          can do customer billing at the shop counter, and manage online orders
          and inventory all together from ONE ADMIN.
        </p>
      </div>

      {/* Content Grid */}
      <div className="flex gap-8">
        {/* Move Offline To Online */}
        <div className="bg-[rgb(23,92,74,0.1)] px-14 pt-12 rounded-xl w-1/3 space-y-12">
          <h3 className="text-[38px] font-semibold text-b-1 mb-4">
            Move Offline To Online
          </h3>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            One Software that will make your business online, enable shop
            counter billing and manage your online order with the same
            inventory.
          </p>
          <img
            src="assets\images\online.webp"
            alt="Move Offline To Online"
            className="w-full h-auto mt-4"
          />
        </div>

        <div className="flex-col h-full w-2/3">
          <div className="w-2/3">
            <h2 className="text-[40px] font-semibold text-b-1 mb-8 ">
              Less Investment, Maximum Saving & Zero Hassle
            </h2>
          </div>

          <div className="flex gap-8">
            {/* Banttech ePOS */}
            <div className="bg-gray-100 px-14 pt-12 rounded-xl w-1/2">
              <h3 className="text-3xl text-b-1">Banttech ePOS</h3>
              <div className="border-b-4 w-14 my-4 mb-16 border-gray-900/90"></div>
              <h3 className="text-sm font-bold text-b-1">Features :</h3>
              <ul className="text-gray-700 mt-4 space-y-3 text-[16px]">
                {[
                  "No Installation",
                  "Unlimited Products",
                  "Multi User Logins - no additional cost",
                  "One time License",
                  "Manage Indian GST",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheck className="text-secondary w-4 h-4" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-black text-[16px] cursor-pointer text-center">
                View all Features
              </p>
              <div className="w-full flex justify-center items-center ">
                <button className="mt-3 bg-[rgba(23,92,74,.95)] text-white px-5 py-2.5 rounded-lg text-[20px] font-semibold w-fit">
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Website + Mobile Apps With ePOS */}
            <div className="bg-[rgba(23,92,74,.9)] text-white px-14 pt-12 pb-10 rounded-xl w-1/2">
              <h3 className="text-3xl">Get Website + Mobile Apps With ePOS</h3>
              <div className="border-b-4 w-20 my-4 mb-16 border-white"></div>
              <h3 className="text-sm font-bold">Plans Included :</h3>
              <ul className="mt-4 space-y-3 text-[16px]">
                {[
                  "Sell your products Online",
                  "Allow Customers to buy from a Mobile App",
                  "Synchronized Online & Offline Inventory",
                  "Integrated Whatsapp Marketing Tool",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheck className="text-secondary w-4 h-4" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white text-[16px] cursor-pointer font-medium text-center">
                View all Features
              </p>
              <div className="w-full flex justify-center items-center ">
                <button className="mt-3 bg-white text-b-1 px-5 py-2.5 rounded-lg text-[20px] font-semibold w-fit">
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
