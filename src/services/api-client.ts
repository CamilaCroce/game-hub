import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6e58bf63633547b69e86e21df0d953ad",
  },
});
