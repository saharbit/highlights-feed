import React, { useEffect, useState } from "react";
import NoHighlights from "../Highlights/NoHighlights";
import InfiniteScroll from "react-infinite-scroll-component";
import Highlight from "../Highlights/Highlight";
import { createSkeleton } from "../Hot/Hot";

const Saved = () => {
  const [highlights, setHighlights] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedHighlights =
      JSON.parse(localStorage.getItem("savedHighlights")) || [];
    setHighlights(savedHighlights);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return createSkeleton(10);
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={highlights.length}
        next={() => true}
        hasMore={isLoading}
        loader={createSkeleton(10)}
        endMessage={
          <NoHighlights
            title="No more saved highlights"
            text="Change subreddits or save a video"
          />
        }
      >
        {highlights.map((highlight, index) => (
          <Highlight highlight={highlight} key={`highlight_${index}`} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Saved;
