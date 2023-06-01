import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b8617617d3844e7e93e1c2afc79e6c3e"
  }
});
