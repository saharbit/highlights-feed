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
  // { label: "r/formula1", value: "formula1" },
];

export default function Home({ highlights }) {
  const [subreddits, setSubreddits] = useState(DEFAULT_SUBREDDITS);

  return (
    <div className="bg-gray-100 px-2 min-h-screen">
      <Head>
        <title>Reddit Highlights</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="mx-auto max-w-screen-md">
        <Sidebar subreddits={subreddits} />
        {subreddits.map((sub, index) => {
          const subHighlights = highlights[sub.value].slice(0, 3);

          return (
            <div className="w-full" key={`sub_${index}`}>
              {subHighlights?.map((highlight) => (
                <div className="mb-4">
                  <Highlight highlight={highlight} subreddit={sub.label} />
                </div>
              ))}
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
    if (data) {
      highlights = data;
    } else {
      highlights = await fetchHighlights();
    }
  } catch (error) {}

  return {
    props: {
      highlights,
    },
  };
}

async function fetchHighlights() {
  const response = await axios.get(
    "https://tja3tkic47.execute-api.eu-central-1.amazonaws.com/serverlessrepo-nba-highlights-helloworld-EAUJQ72BGT8C"
  );
  let highlights = response.data;
  redis.set(
    "highlights",
    JSON.stringify({ ...highlights, lastupdated: Date.now() })
  );
  return highlights;
}
