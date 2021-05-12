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
    <Layout title="highlights.live">
      <div className="relative flex-grow">
        <div className="hidden w-0 md:flex md:flex-col md:w-full px-3 pt-2 fixed">
          <Tabs />
        </div>
      </div>

      <div className="flex flex-col mx-auto w-full md:w-1/2 pb-5 md:border-l md:border-r">
        <MobileSubreddits />
        {tab === "top" && <Hot />}
        {tab === "new" && <New />}
        {tab === "saved" && <Saved />}
        {tab === "search" && <SearchTab />}
      </div>

      <div className="relative flex-grow">
        <div className="hidden w-0 md:flex md:flex-col md:w-1/6 px-4 pt-2 fixed">
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
