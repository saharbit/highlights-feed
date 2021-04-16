import { useState } from "react";
import Head from "next/head";
import redis from "../services/redis";
import axios from "axios";
import Highlight from "../components/Highlight";
import Sidebar from "../components/Sidebar";

let DEFAULT_SUBREDDITS = [
  { label: "r/soccer", value: "soccer" },
  { label: "r/nba", value: "nba" },
  // { label: "r/nfl", value: "nfl" },
];

export default function Home({ highlights }) {
  const [subreddits, setSubreddits] = useState(DEFAULT_SUBREDDITS);

  return (
    <div className="bg-gray-100 p-2">
      <Head>
        <title>Reddit Highlights</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-md">
        {/*<Sidebar subreddits={subreddits} />*/}
        {subreddits.map((sub, index) => {
          const subHighlights = highlights[sub.value].slice(0, 3);

          return (
            <div className="w-full" key={`sub_${index}`}>
              {/*<div className="text-xl font-bold p-4">{sub.label}</div>*/}
              <div>
                {subHighlights?.map((highlight) => (
                  <div className="mb-4">
                    <Highlight highlight={highlight} subreddit={sub.label} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CACHE_TTL = 1000 * 60 * 10;

export async function getServerSideProps(context) {
  let highlights = {};

  try {
    const data = JSON.parse(await redis.get("highlights"));
    if (data && data.lastupdated + CACHE_TTL > Date.now()) {
      console.log("cache hit");
      highlights = data;
    } else {
      console.log("cache miss");
      const response = await axios.get(
        "https://tja3tkic47.execute-api.eu-central-1.amazonaws.com/serverlessrepo-nba-highlights-helloworld-EAUJQ72BGT8C"
      );
      highlights = response.data;
      redis.set(
        "highlights",
        JSON.stringify({ ...highlights, lastupdated: Date.now() })
      );
    }
  } catch (error) {}

  return {
    props: {
      highlights,
    },
  };
}
