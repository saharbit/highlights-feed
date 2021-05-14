import React, { useEffect } from "react";
import Subreddits from "../components/Subreddits";
import Tabs from "../components/Tabs";
import Hot from "../components/Hot/Hot";
import SearchInput from "../components/Search/SearchInput";
import Saved from "../components/Saved/Saved";
import New from "../components/New/New";
import { fetchHighlights, setSearch } from "../store/appState";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import SearchTab from "../components/Search/SearchTab";
import MobileSubreddits from "../components/MobileComponents/MobileSubreddits";

export default function Home() {
  const dispatch = useDispatch();
  const { search, tab } = useSelector((state) => state.appState);

  useEffect(() => {
    dispatch(fetchHighlights());
  }, []);

  return (
    <Layout title="Highlights">
      <div className="hidden md:block relative flex-grow w-1/4 xl:w-1/3">
        <div className="hidden md:flex flex-col fixed width-inherit items-end p-3">
          <Tabs />
        </div>
      </div>

      <div className="flex flex-col w-full pb-5 md:border-l md:border-r md:w-1/2 xl:w-1/3">
        <MobileSubreddits />
        {tab === "top" && <Hot />}
        {tab === "new" && <New />}
        {tab === "saved" && <Saved />}
        {tab === "search" && <SearchTab />}
      </div>

      <div className="hidden md:block relative flex-grow w-1/4 xl:w-1/3">
        <div className="flex flex-col fixed width-inherit md:max-w-xs p-3">
          <SearchInput
            search={search}
            setSearch={(search) => dispatch(setSearch({ search }))}
            className="mb-4"
          />
          <Subreddits />
        </div>
      </div>
    </Layout>
  );
}
