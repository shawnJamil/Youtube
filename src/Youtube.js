import axios from "axios";

const KEY = "AIzaSyBj1jBoPrkG30rzkRH3gTYWLOEdXOK3XPM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
