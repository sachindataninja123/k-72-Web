import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-3">
      <div className="border-3 hover:border-[#d3fd50] hover:text-[#d3fd50]  items-center px-10 rounded-full uppercase  border-white  ">
        <Link className="text-[6.5vw] pt-10" to="/projects">
          work
        </Link>
      </div>

      <div className="border-3 hover:border-[#d3fd50] hover:text-[#d3fd50]  items-center px-10 rounded-full uppercase  border-white  ">
        <Link className="text-[6.5vw] pt-10" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
