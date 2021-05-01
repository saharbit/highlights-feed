import redis from "../../services/redis";

export default async (req, res) => {
  let highlights = await redis.get("highlights");
  res.status(200).json(highlights);
};
