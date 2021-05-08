import { useEffect } from "react";
import Subreddits from "../components/Subreddits";
import Tabs from "../components/Tabs";
import Hot from "../components/Hot/Hot";
import SearchInput from "../components/SearchInput";
import HighlightsFeedLogo from "../components/HighlightsFeedLogo";
import Saved from "../components/Saved/Saved";
import New from "../components/New/New";
import { fetchHighlights, setSearch } from "../store/appState";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import SearchTab from "../components/SearchTab";

export default function Home() {
  const dispatch = useDispatch();
  const { search, tab } = useSelector((state) => state.appState);

  useEffect(() => {
    dispatch(fetchHighlights());
  }, []);

  return (
    <Layout title="highlights.live">
      <div className="hidden w-0 md:w-3/12 md:block p-2">
        <HighlightsFeedLogo />
        <Tabs />
      </div>

      <div className="w-full md:w-6/12 pb-6 md:border-l md:border-r">
        {tab === "top" && <Hot />}
        {tab === "new" && <New />}
        {tab === "saved" && <Saved />}
        {tab === "search" && <SearchTab />}
      </div>

      <div className="hidden w-0 md:w-3/12 md:block p-2">
        <SearchInput
          search={search}
          setSearch={(search) => dispatch(setSearch({ search }))}
          className="mb-4"
        />
        <Subreddits />
      </div>
    </Layout>
  );
}
