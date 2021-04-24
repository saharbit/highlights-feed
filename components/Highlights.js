import React from "react";
import useSWR from "swr";
import fetcher from "../services/fetcher";
import Highlight from "./Highlight";
import HighlightSkeleton from "./HighlightSkeleton";

const Highlights = ({ subreddits, search }) => {
  const { data, error } = useSWR("/api/highlights", fetcher);

  if (!data) {
    return Array(10)
      .fill(0)
      .map((_) => <HighlightSkeleton />);
  }

  return (
    <div>
      {subreddits.map((sub, index) => {
        const subHighlights = data[sub.value] || [];

        return (
          <div key={`sub_${index}`}>
            {subHighlights.map((highlight) => (
              <Highlight highlight={highlight} subreddit={sub.label} />
            ))}
          </div>
        );
      })}
      <div className="flex flex-col items-center my-12">
        <div className="font-bold text-lg text-gray-600">
          That's it for today!
        </div>
        <div className="text-gray-600">
          Add subreddits or come back tomorrow{" "}
          <span aria-label="celebrate" role="img">
            🎉
          </span>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
