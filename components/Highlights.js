import React from "react";
import useSWR from "swr";
import fetcher from "../services/fetcher";
import Highlight from "./Highlight";

const Highlights = ({ subreddits }) => {
  const { data: highlights, error } = useSWR("/api/highlights", fetcher);

  return subreddits.map((sub, index) => {
    const subHighlights = highlights?.[sub.value]?.slice(0, 3);

    return (
      <div key={`sub_${index}`}>
        {subHighlights?.map((highlight) => (
          <Highlight highlight={highlight} subreddit={sub.label} />
        ))}
      </div>
    );
  });
};

export default Highlights;
