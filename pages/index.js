import React, { useEffect } from "react";
import Subreddits from "../components/Subreddits";
import Tabs from "../components/Tabs";
import Hot from "../components/Hot/Hot";
import SearchInput from "../components/Search/SearchInput";
import Saved from "../components/Saved/Saved";
import New from "../components/New/New";
import { fetchHighlights } from "../store/appState";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import SearchTab from "../components/Search/SearchTab";
import MobileSubreddits from "../components/MobileComponents/MobileSubreddits";

export default function Home() {
  const dispatch = useDispatch();
  const { tab } = useSelector((state) => state.appState);

  useEffect(() => {
    dispatch(fetchHighlights());
  }, []);

  return (
    <Layout title="Highlights">
      <div className="hidden md:block relative flex-grow w-1/4 xl:w-1/3">
        <div className="md:flex p-4 justify-end">
          <Tabs />
        </div>
      </div>

      <div className="flex flex-col w-full pb-5 md:border-l md:border-r md:w-1/2 md:max-w-2xl">
        <MobileSubreddits />
        {tab === "top" && <Hot />}
        {tab === "new" && <New />}
        {tab === "saved" && <Saved />}
        {tab === "search" && <SearchTab />}
      </div>

      <div className="hidden md:block relative flex-grow w-1/4 xl:w-1/3">
        <div className="md:flex flex-col p-4 justify-start max-w-md">
          <SearchInput className="mb-4" />
          <Subreddits />
        </div>
      </div>
    </Layout>
  );
}
