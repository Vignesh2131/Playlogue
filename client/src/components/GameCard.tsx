
import { Link } from "react-router-dom";
import { Star, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
interface GameCardProps{
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    released: string;
    genres: [];
}
const GameCard = ({ imgUrl, title, rating, released, genres, id }: GameCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);
  const [isInList, setIsInList] = useState(false);
    return (
      <div>
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group">
          <div className="absolute inset-0 bg-gray-900">
            <img
              src={imgUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent cursor-pointer">
              <Link to={`/game/${id}`}>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h2 className="text-white text-xl font-bold truncate">
                    {title}
                  </h2>
                  <div className="flex items-center mt-1">
                    <Star className="text-yellow-500 mr-1 h-4 w-4" />
                    <span className="text-yellow-500 font-bold">{rating}</span>
                  </div>
                  <div className="flex items-center mt-2 text-gray-300 text-sm">
                    <span className="mr-2">{released.slice(0, 4)}</span>
                    <span className="mr-2">•</span>
                    <span className="mr-2">{genres[0].name}</span>
                    <span className="mr-2">•</span>
                    <span>{"PC"}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute top-2 right-2 flex space-x-2 z-10">
            <Button
              size="icon"
              variant="secondary"
              className="bg-black/50 hover:bg-red-500/80 transition-colors"
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <Heart
                className={`h-4 w-4 ${
                  isFavorite ? "fill-current text-red-500" : "text-white"
                }`}
              />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="bg-black/50 hover:bg-blue-500/80 transition-colors"
              onClick={() => setIsInList(!isInList)}
              aria-label={isInList ? "Remove from list" : "Add to list"}
            >
              <Plus
                className={`h-4 w-4 ${
                  isInList ? "text-blue-500" : "text-white"
                }`}
              />
            </Button>
          </div>
        </div>
      </div>
    );
}

export default GameCard