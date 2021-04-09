import { useState } from "react";
import Head from "next/head";
import redis from "./api/redis";
import axios from "axios";
import Check from "./Check";

const CACHE_TTL = 1000 * 60 * 10;

export async function getServerSideProps(context) {
  let highlights = {};
  try {
    const data = JSON.parse(await redis.get("highlights"));
    if (data && data.lastupdated + CACHE_TTL > Date.now()) {
      console.log("cache hit");
      highlights = data;
    } else {
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

export default function Home({ highlights }) {
  const [subreddits, setSubreddits] = useState([
    { label: "r/soccer", value: "soccer" },
    { label: "r/nba", value: "nba" },
    { label: "r/nfl", value: "nfl" },
  ]);

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Reddit Highlights</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-wrap">
        <div className="w-1/6 bg-gray-200">
          <div className="flex justify-center p-5 font-bold text-xl">
            Highlights Deck
          </div>
          {subreddits.map((sub) => (
            <div className="p-5 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
              <div>{sub.label}</div>
              <Check />
            </div>
          ))}
        </div>
        {subreddits.map((sub, index) => {
          const subHighlights = highlights[sub.value];

          return (
            <div className="w-full lg:w-1/2 2xl:w-1/4">
              <div className="text-xl font-bold border-gray-300 border-b p-4 border-r-4">
                {sub.label}
              </div>
              <div>
                {subHighlights?.slice(1, 10).map((highlight) => (
                  <div
                    key={index}
                    className="flex flex-row border-gray-300 border-b p-4 border-r-4"
                  >
                    <div className="mr-2">
                      <iframe
                        src={highlight.url}
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                    <div>{highlight.title}</div>
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
