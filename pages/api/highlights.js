import redis from "../../services/redis";

export default async function handler(req, res) {
  let highlights = JSON.parse(await redis.get("highlights"));
  res.status(200).json(highlights);
}
