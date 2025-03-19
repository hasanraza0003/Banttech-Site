import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white px-72 overflow-hidden">
      {/* Weather and Location */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-start">
          <div className="text-[#EDEDED] ">
            <p className="text-8xl md:text-9xl ">
              <span>It's 17:34 pm,</span> <br /> <span>clear sky &</span>
              <br />
              <span>30°</span>
              <br /> <span>in Bareilly</span>
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 md:mt-0">
            <div className="flex items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-800">
                  Let's make something beautiful together
                </h3>
                <p className="text-gray-600 mt-4 mb-6">
                  Do you have a creative challenge for us? Get in touch with a
                  member of the team.
                </p>
                <button className="bg-black text-white uppercase tracking-widest text-sm px-6 py-3 hover:bg-gray-800 transition-colors duration-300 flex items-center">
                  Get in touch <span className="ml-2">→</span>
                </button>
              </div>
              <div className="ml-4 md:ml-8">
                <div className="h-24 w-24 bg-orange-500 rounded-full" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8">
              <div className="flex flex-col space-y-1">
                <div>
                  <span className="text-gray-600">Tech Support:</span>{" "}
                  <a
                    href="tel:+918791162233"
                    className="text-orange-500 hover:underline"
                  >
                    +91 8791162233
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">Sales:</span>{" "}
                  <a
                    href="tel:+919548833733"
                    className="text-orange-500 hover:underline"
                  >
                    +91 95488 33733
                  </a>
                </div>
                <div className="text-gray-600">
                  Office Hours: Mon-Fri (10AM - 5PM)
                </div>
                <a
                  href="mailto:poke@banttech.com"
                  className="text-orange-500 hover:underline flex items-center"
                >
                  poke@banttech.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaFacebookF className="text-gray-600" />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaInstagram className="text-gray-600" />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <FaLinkedinIn className="text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto pt-40 mt-12 mb-20 ">
        <div className="flex flex-col  md:flex-row justify-between items-center text-[.625rem] leading-[1.5px] text-[#ababab] font-semibold">
          <div className="flex items-center">
            <span>BANTTECH.COM, OPERATED WITH</span>
            <FaHeart className="mx-1 text-red-500" />
            <span>
              FROM INDIA. VIRTUAL HIGH FIVE! © COPYRIGHT 2019 - 2025 | ALL
              RIGHTS RESERVED.
            </span>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-gray-600 transition-colors">
              TERMS & CONDITIONS
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
