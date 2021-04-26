import React, { useEffect, useState } from "react";
import HighlightSkeleton from "./Highlight/HighlightSkeleton";
import Highlight from "./Highlight/Highlight";

const Saved = ({ subreddits }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedHighlights =
      JSON.parse(localStorage.getItem("savedHighlights")) || {};
    setData(savedHighlights);
  }, []);

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
              <Highlight highlight={highlight} subreddit={sub} />
            ))}
          </div>
        );
      })}
      <div className="flex flex-col items-center my-12">
        <div className="font-bold text-lg text-gray-600">No saved videos</div>
        <div className="text-gray-600">
          Change subreddits or save a video{" "}
          <span aria-label="celebrate" role="img">
            🎉
          </span>
        </div>
      </div>
    </div>
  );
};

export default Saved;
