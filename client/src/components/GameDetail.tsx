import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Mainlayout from "@/layout/Mainlayout";
import axios from "axios";
import { Star } from "lucide-react";

const GameDetail = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  useEffect(() => {
     const fetchGames = async () => {
       const res = await axios.get(
         `https://api.rawg.io/api/games/${gameId}?key=1b7ea94b27e34b76b0fa87d1a210ac60`
       );
      setGame(res.data);                                                                                                              
     };
     fetchGames();
  },[gameId])
console.log(game)
  return (
    <Mainlayout>
      {/* Top container */}
      <div className="px-3 my-3">
        <div className="grid grid-cols-12 gap-x-2">
          <div className="col-span-7 w-full relative">
            <div className="h-[400px]">
              <img src={game.background_image} alt="" />
            </div>
            <div className="absolute inset-4 top-5 text-teal-200 h-[400px]">
              <h2 className="text-3xl font-bold">{game.name}</h2>
              <p className="text-xl font-semibold">Genres : {"Action"}</p>
              <p className="text-lg font-medium">
                Metacritic rating : {game.metacritic}
              </p>
            </div>
          </div>
          <div className="col-span-5 flex flex-col w-full gap-y-4">
            <div className="h-[300px] w-full border">
              <video src=""></video>
            </div>
            <div className="flex items-center justify-around gap-x-4">
              <button className="border px-4 py-2 w-full cursor-pointer">
                Add to List
              </button>
              <button className="border px-4 py-2 w-full cursor-pointer">
                Write review
              </button>
            </div>
            <div>Average playtime : {game.playtime} hours</div>
          </div>
        </div>
        {/* //Game desc */}
        <div className="mt-3">
          <span className="text-base font-light">
            {game.description_raw.slice(0, 650) + "..."}
          </span>
        </div>
        {/* third phase */}
        <div className="grid grid-cols-12 mt-3">
          <div className="col-span-8 flex flex-col">
            <div>
              <h2 className="text-xl font-semibold">Platforms</h2>
              <p>
                <span>PC</span>/<span>Playstation</span>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold ">Available at</h2>
              <p>
                <span>Steam</span>/<span>Riot games</span>
              </p>
            </div>
          </div>
          <div className="col-span-4">
            <h1 className="font-2xl font-thin">Critic ratings</h1>
            <p>Developed by ....</p>
          </div>
        </div>
        {/* reviews */}
        <div className="mt-3 flex flex-col justify-center items-center px-4">
          <h1 className="text-2xl font-light">Game reviews</h1>
          <div>No reviews currently available</div>
        </div>
        <div className="mt-3">
          <h1 className="text-2xl font-light">Similar games</h1>
          carousel
        </div>
      </div>
    </Mainlayout>
  );
}

export default GameDetail