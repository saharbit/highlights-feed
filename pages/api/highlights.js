import redis from "../../services/redis";

const CACHE_TTL = 1000 * 60 * 60;

export default async (req, res) => {
  let highlights = await redis.get("highlights");
  if (highlights.lastupdated + CACHE_TTL > Date.now()) {
    // fetch highlights
  }
  res.status(200).json(highlights);
};
