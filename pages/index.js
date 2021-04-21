import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Subreddits from "../components/Subreddits";
import Tabs from "../components/Tabs";
import Highlights from "../components/Highlights";

let DEFAULT_SUBREDDITS = [
  { label: "r/soccer", value: "soccer" },
  { label: "r/nba", value: "nba" },
  { label: "r/nfl", value: "nfl" },
  { label: "r/formula1", value: "formula1" },
];

let DEFAULT_TABS = [
  { label: "Hot", value: "hot" },
  { label: "Top", value: "top" },
  { label: "New", value: "new" },
];

export default function Home() {
  const [subreddits, setSubreddits] = useState(
    DEFAULT_SUBREDDITS.map((sub) => ({ ...sub, isSelected: true }))
  );
  const [tab, setTab] = useState(DEFAULT_TABS[0]);

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

      <div className="flex max-w-screen-xl mx-auto">
        <div className="hidden w-0 md:w-1/4 md:block">
          <Tabs tabs={DEFAULT_TABS} currentTab={tab} setTab={setTab} />
        </div>
        <div className="w-full md:px-2 md:border-r-2 md:border-l-2 md:w-2/4 min-h-screen">
          <Header />
          <Highlights subreddits={subreddits} />
        </div>
        <div className="hidden w-0 md:w-1/4 md:block">
          <Subreddits subreddits={subreddits} setSubreddits={setSubreddits} />
        </div>
      </div>
    </div>
  );
}
