import React, { useEffect, useState } from "react";
import GeneraList from "../Components/GeneraList";
import GlobalApi from "../services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const testApi = async () => {
      try {
        const resp = await GlobalApi.getAllgames();
        setGames(resp.data.results);
      } catch (error) {
        console.error("Error during test:", error);
      }
    };

    testApi();
  }, []);
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block">
        <GeneraList />
      </div>
      <div className="col-span-4 md:col-span-3">
        <div>
          {games?.length > 0 && <Banner gameBanner={games[0]} />}
          {games?.length > 0 && <TrendingGames trending={games} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
