import GameCard from "./GameCard"
import { useEffect,useState } from "react"
import axios from 'axios'

interface Game {
  id: string;
  background_image: string;
  name: string;
  rating: number;
  released: string;
    genres: [];
}
const GamesDisplay = () => {
    const [games,setGames]=useState<Game[]>()
     useEffect(() => {
       const fetchGames = async () => {
         const res = await axios.get(
           `https://api.rawg.io/api/games?key=1b7ea94b27e34b76b0fa87d1a210ac60`
           );
           setGames(res.data.results)
       };
         fetchGames();
     }, []);
  return (
    <div className="my-3 px-2">
      <div>
        <h1 className="text-5xl font-bold mb-4">All games</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {games &&
          games.map((game) => (
            <GameCard
              key={game.id}
              imgUrl={game.background_image}
              id={game.id}
              title={game.name}
              rating={game.rating}
              released={game.released}
              genres={game.genres}
            />
          ))}
      </div>
    </div>
  );
}

export default GamesDisplay