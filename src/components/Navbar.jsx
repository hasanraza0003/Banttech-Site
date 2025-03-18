import { useState } from "react";
import { FaPhone, FaChevronDown } from "react-icons/fa6";
import HoverText from "./HoverText";

const Navbar = () => {
  const [isServiceOpen, setServiceIsOpen] = useState(false);
  const [isItOpen, setItIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-2 px-72  ">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="assets\images\logo.webp" alt="Logo" />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center space-x-8 text-black/80 font-medium">
        <a href="#about">
          <HoverText text={"ABOUT US"} />
        </a>
        <div className="relative">
          <button
            className="flex items-center "
            onClick={() => setServiceIsOpen(!isServiceOpen)}
          >
            <HoverText text={"SERVICES"} />{" "}
            <FaChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isServiceOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">
                Service 1
              </a>
              <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">
                Service 2
              </a>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="flex items-center "
            onClick={() => setItIsOpen(!isItOpen)}
          >
            <HoverText text={"IT COURSES"} />{" "}
            <FaChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isItOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              <a href="#service1" className="block px-4 py-2 hover:bg-gray-100">
                Service 1
              </a>
              <a href="#service2" className="block px-4 py-2 hover:bg-gray-100">
                Service 2
              </a>
            </div>
          )}
        </div>
        <a href="#blogs" className="">
          <HoverText text={"BLOGS"} />
        </a>
        <a href="#career" className="relative ">
          <HoverText text={"CAREER"} />
          <span className="absolute top-0 right-0 transform translate-x-6 -translate-y-3 bg-[#014384] text-white text-xs font-bold rounded-full px-2 py-0.5">
            1
          </span>
        </a>
        <a href="#contact" className="">
          <HoverText text={"CONTACT"} />
        </a>
      </div>

      {/* Call Button */}
      <button className="flex text-md items-center border-2 border-black/80 px-6 py-1 rounded-full hover:bg-black/80 ">
        <span className="mr-2 text-black/80 font-medium hover:text-white">
          LET'S TALK
        </span>
        <FaPhone className="text-yellow-500/70" size={20} />
      </button>
    </nav>
  );
};

export default Navbar;
