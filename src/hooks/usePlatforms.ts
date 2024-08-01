import platforms from "../data/platforms";
import { Platform } from "./useGames";

interface Response {
  data: Platform[];
  isLoading: boolean;
  error: null;
}

const usePlatforms = () => ({
  data: platforms,
  isLoading: false,
  error: null,
});

export default usePlatforms;
