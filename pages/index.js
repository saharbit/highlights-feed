import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Subreddits from "../components/Subreddits";
import Tabs from "../components/Tabs";
import Highlights from "../components/Highlights";
import { DEFAULT_SUBREDDITS } from "../consts/subreddits";
import { DEFAULT_TABS } from "../consts/tabs";
import SearchInput from "../components/SearchInput";
import HighlightsFeedLogo from "../components/HighlightsFeedLogo";

export default function Home() {
  const [subreddits, setSubreddits] = useState(
    DEFAULT_SUBREDDITS.map((sub) => ({ ...sub, isSelected: true }))
  );
  const [tab, setTab] = useState(DEFAULT_TABS[0]);
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-100 px-2 min-h-screen">
      <Head>
        <title>Highlights Feed</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex max-w-screen-xl mx-auto">
        <div className="hidden w-0 md:w-3/12 md:block">
          <HighlightsFeedLogo />
          <Tabs tabs={DEFAULT_TABS} currentTab={tab} setTab={setTab} />
        </div>
        <div className="w-full md:px-2 md:border-r-2 md:border-l-2 md:w-6/12 min-h-screen pb-6">
          <Header title={tab.label} />
          <Highlights
            subreddits={subreddits.filter((sub) => sub.isSelected)}
            search={search}
          />
        </div>
        <div className="hidden w-0 md:w-3/12 md:block p-2">
          <SearchInput search={search} setSearch={setSearch} className="mb-4" />
          <Subreddits subreddits={subreddits} setSubreddits={setSubreddits} />
        </div>
      </div>
    </div>
  );
}
