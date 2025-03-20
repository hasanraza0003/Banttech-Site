import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Absolute professionalism and commitment in undertaken project is the key words for me to say about Team Banttech. Beginning to end for our projects, they put all efforts to make sure 100% satisfaction and expected results for us. We really appreciate team's sincerity showed even after the execution of the projects. Thank you and keep your good work. No doubt that we will work with them again.",
    image: "assets/images/Nimmi.jfif",
    name: "NIMMI JOSE",
    designation: "MD, MOTHER Med",
  },
  {
    text: "All time proactive to discuss business challenges, problem-solving attitude and his great enthusiasm shows he loves what he does! Prashant has done a ROCKSTAR job from getting my website developed from the ground up to making it a money converting machine. He has a professional 'can do' attitude for everything that comes in the middle of his work. His insights in digital marketing have led us to 30,000 monthly visitors with hundred thousand plus page views. The best part is I am now ahead of all my competitors whom I was not even near to 😊.",
    image: "assets/images/Boston.jfif",
    name: "TOM CHEFFRO",
    designation: "Boston Fight Center LLC",
  },
  {
    text: "Prashant is Professional, diligent, experienced and an awesome communicator. He has in-depth knowledge of eCommerce. I enjoyed listening to his consultation. It’s always great to learn from a pro. Full of useful knowledge. We are showing a growth rate of 30% in 4 weeks itself. Though we have some tough times together now, Prashant is helping me to develop a new portal with better UI. Fingers crossed.",
    image: "assets/images/Authur.jfif",
    name: "ARTHUR LYNN",
    designation: "Great Journeys Inc.",
  },
  {
    text: "Prashant and team has no issues with quality, his work was excellent and from this perspective I would have no qualms in recommending him. He is really a wonderful person and truly professional to work with. Being a truly digital marketer he provided a solid marketing plan and showed subject knowledge with superb expertise. His plan of action has given us a good insight in customer acquisition strategies and costs. He is very good at researching and looking out for keywords, optimizing campaigns. He will try to understand your business and will find the best possible solutions to increase ROI.",
    image: "assets/images/David.jfif",
    name: "DAVID ASAMOAH",
    designation: "Writing Generals Inc.",
  },
  {
    text: "Prashant is a Gem of a person. Has been instrumental in turning mud into gold in various tech and digital assignments. I highly recommended him for his able intellectual capabilities and competence.",
    image: "assets/images/Yateesh.jfif",
    name: "YATEESH KUKRETI",
    designation: "Niche Business Solutions",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    fetch("https://assets5.lottiefiles.com/packages/lf20_MeTWrj.json")
      .then((response) => response.json())
      .then((data) => setAnimation(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    const newIndex = Math.round(
      sliderRef.current.scrollLeft / sliderRef.current.offsetWidth
    );
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full pt-24 pb-32 bg-w-2 flex flex-col justify-center items-center ">
      <div className="px-72 w-full flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[39px] font-bold text-b-1 text-center md:text-left">
            What Some of my{" "}
            <span className="text-secondary font-s">Clients Say</span>
          </h2>
          <div
            ref={sliderRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing flex "
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full h-fit transition-transform duration-300 pt-20 pl-4 rounded-lg flex flex-col items-start justify-center text-start "
              >
                <p className="w-full text-b-1 font-serif text-[18px] tracking-wide leading-8 pr-4 ">
                  "{testimonial.text}"
                </p>
                <div className="mt-10 flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover"
                  />
                  <div className="ml-3  ">
                    <p className="text-b-2 text-lg font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Dots */}
          <div className="w-full flex mt-6 space-x-2 justify-start items-center pl-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-400/80"
                    : "bg-yellow-200/80"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 relative">
          {animation && (
            <Lottie
              loop
              autoplay
              animationData={animation}
              className="w-full p-8"
            />
          )}
        </div>
      </div>
    </div>
  );
};
