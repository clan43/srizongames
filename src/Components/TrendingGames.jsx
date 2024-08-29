import React from "react";

function TrendingGames({ trending }) {
  return (
    <div className="mt-4">
      <h2 className="hidden md:block font-bold text-[30px] my-2]">
        Tending Games
      </h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trending.map(
          (item, index) =>
            index < 4 && (
              <div
                key={index}
                className="bg-slate-600 overflow-hidden rounded-lg group hover:scale-110 mt-4 transition-all ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src={item.background_image}
                  className="h-[270px] object-cover"
                />
                <h2 className="text-[20px] p-4 font-bold">{item.name}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
