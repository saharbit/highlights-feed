import { useState } from "react";
import Head from "next/head";
import redis from "../services/redis";
import Highlight from "../components/Highlight";
import Sidebar from "../components/Sidebar";

export async function getServerSideProps(context) {
  let highlights = {};

  try {
    highlights = JSON.parse(await redis.get("highlights"));
  } catch (error) {}

  return {
    props: {
      highlights,
    },
  };
}

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
        <title>Highlights Feed</title>
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
