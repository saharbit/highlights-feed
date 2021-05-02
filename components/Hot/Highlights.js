import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../../services/fetcher";
import Highlight from "../Highlight/Highlight";
import HighlightSkeleton from "../Highlight/HighlightSkeleton";
import { SUBREDDITS } from "../../consts/subreddits";
import dayjs from "dayjs";
import InfiniteScroll from "react-infinite-scroll-component";

function NoHighlights() {
  return (
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
  );
}

const Highlights = ({ highlights }) => {
  if (!highlights) {
    return Array(10)
      .fill(0)
      .map((_) => <HighlightSkeleton />);
  }

  return (
    <div id="scrollable">
      <InfiniteScroll
        dataLength={highlights.length}
        next={() => console.log("next")}
        hasMore={true}
        loader={<HighlightSkeleton />}
        endMessage={<NoHighlights />}
        scrollableTarget="scrollable"
      >
        {highlights.map((highlight, index) => (
          <Highlight highlight={highlight} index={`highlight_${index}`} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Highlights;
