import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  //url ejemplo /games?genres=1&platforms=2,3,4,5,6,7&ordering=asc
  const platformIds = gameQuery.platform?.platforms.map((p) => p.id).join(",");
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: platformIds,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );
};

export default useGames;
