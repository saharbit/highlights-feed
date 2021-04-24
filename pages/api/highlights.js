import redis from "../../services/redis";
import axios from "axios";

const CACHE_TTL = 1000 * 60 * 60;

export default function handler(req, res) {
  let highlights = {};

  redis.get("highlights").then((data) => {
    highlights = JSON.parse(data);

    if (highlights.lastupdated + CACHE_TTL > Date.now()) {
      console.log("cache hit");
      res.status(200).json(highlights);
    } else {
      console.log("cache miss");
      axios.get(process.env.DATA_URL).then((response) => {
        highlights = JSON.stringify({
          ...response.data,
          lastupdated: Date.now(),
        });
        redis.set("highlights", highlights);
        res.status(200).json(highlights);
      });
    }
  });
}
