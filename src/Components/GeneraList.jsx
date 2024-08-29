import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

function GeneraList() {
  const [generaList, setGeneraList] = useState([]);
  const [activeIndex, setactiveindex] = useState(0);
  useEffect(() => {
    getGeneraList();
  }, []);


  const getGeneraList = async () => {
    try {
      const resp = await GlobalApi.getGeneraList();
      setGeneraList(resp.data.results);
    } catch (error) {
      console.error("Failed to fetch genera list:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className={`text-[30px] font-bold`}>Genre</h2>
      {generaList.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              return setactiveindex(index);
            }}
            className={`flex gap-2 items-center hover:bg-slate-200 py-2 px-3 rounded-md w-[20vw] hover:text-black cursor-pointer group ${
              activeIndex == index
                ? "bg-gray-300 dark:bg-gray-600 text-black"
                : null
            }`}
          >
            <img
              src={item.image_background}
              className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
                activeIndex == index ? "font-bold" : null
              }`}
            />
            <h3
              className={`font-[500] hover:font-bold transition-all ease-out duration-300 ${
                activeIndex == index
                  ? "font-bold dark:bg-gray-600 text-black"
                  : null
              }`}
            >
              {item.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default GeneraList;
