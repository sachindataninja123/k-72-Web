import React from "react";
import Video from "./Video";

const HomeHero = () => {
  return (
    <div className="font-[font1] text-center lg:mt-0 mt-[40vh]">
      <div className="lg:text-[9.5vw] text-[12vw] justify-center items-center flex  uppercase lg:leading-[8vw] leading-[12vw] ">
        L'étincelle{" "}
      </div>
      <div className="lg:text-[9.5vw] text-[12vw]  justify-center items-center flex uppercase lg:leading-[8vw] leading-[12vw] ">
        qui
        <div className="h-[8vw] w-[17vw]  -mt-3 overflow-hidden rounded-full shrink-0">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw]  justify-center items-center flex  uppercase lg:leading-[8vw] leading-[12vw] ">
        la créativité
      </div>
    </div>
  );
};

export default HomeHero;
