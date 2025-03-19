import React from "react";

const HoverText = ({text}) => {
  return (
    <span className="text-black hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] hover:bg-clip-text hover:text-transparent transition-all">
      {text}
    </span>
  );
};

export default HoverText;
