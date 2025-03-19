
import { useState } from "react";

export  const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-80 h-72 cursor-pointer m-8"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-800 transform ${
          isFlipped ? "-rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-w-2  rounded-xl  flex flex-col items-start justify-center p-2"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span >{frontContent.icon}</span>
          <h2 className="text-xl font-bold mt-2">{frontContent.title}</h2>
          <p className="text-gray-600 mt-2 text-sm">{frontContent.text}</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gray-800 text-white rounded-xl  flex flex-col items-start justify-center p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span >{frontContent.icon}</span>
          <h2 className="text-xl font-bold">{backContent.title}</h2>
          <p className="mt-2 text-sm">{backContent.text}</p>
        </div>
      </div>
    </div>
  );
};