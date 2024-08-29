import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-20px md:text-[30px] font-bold text-white">
          {gameBanner.name}
        </h2>
        <button className="bg-blue-700 text-white px-3 py-1 md:px-5 md:py-3 rounded-md text-[12px] md:text-[20px]">
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        className="w-full md:h-[360px] object-cover object-top rounded-xl"
      />
    </div>
  );
}

export default Banner;
