import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../../services/fetcher";
import Highlight from "../Highlight/Highlight";
import HighlightSkeleton from "../Highlight/HighlightSkeleton";
import { SUBREDDITS } from "../../consts/subreddits";
import dayjs from "dayjs";

const Highlights = ({ subreddits, search }) => {
  const { data, error } = useSWR("/api/highlights", fetcher);
  const [highlights, setHighlights] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      let highlights = [];

      for (let [sub, list] of Object.entries(data)) {
        if (SUBREDDITS[sub]) {
          highlights.push(
            ...list.map((highlight) => ({
              ...highlight,
              sub,
            }))
          );
        }
      }

      let sortedByDate = highlights.sort(
        (a, b) => dayjs(b.date) - dayjs(a.date)
      );
      setHighlights(sortedByDate);
    }
  }, [data]);

  useEffect(() => {
    const selectedSubs = new Set();

    for (let sub of subreddits) {
      selectedSubs.add(sub.value);
    }

    setFilteredData(
      highlights
        .filter((highlight) =>
          highlight.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter((highlight) => selectedSubs.has(highlight.sub))
    );
  }, [highlights, search, subreddits]);

  if (error) {
    return null;
  }

  if (!data) {
    return Array(10)
      .fill(0)
      .map((_) => <HighlightSkeleton />);
  }

  return (
    <div>
      {filteredData.map((highlight) => (
        <Highlight highlight={highlight} />
      ))}
      <div className="flex flex-col items-center my-12">
        <div className="font-bold text-lg text-gray-600">
          That's it for today!
        </div>
        <div className="text-gray-600">
          Add subreddits or come back later{" "}
          <span aria-label="celebrate" role="img">
            🎉
          </span>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
