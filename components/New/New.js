import React from "react";
import NoHighlights from "../NoHighlights";
import { useDispatch, useSelector } from "react-redux";
import { getTabHighlights } from "../../store/appStateSelectors";
import InfiniteScroll from "react-infinite-scroll-component";
import { bumpVisibleHighlightsAsync } from "../../store/appState";
import Highlight from "../Highlight/Highlight";
import { createSkeleton } from "../Hot/Hot";

const New = () => {
  const highlights = useSelector(getTabHighlights);
  const hasMoreHighlights = useSelector(
    (state) => state.appState.hasMoreHighlights
  );
  const dispatch = useDispatch();

  if (!highlights) {
    return createSkeleton(10);
  }

  return (
    <InfiniteScroll
      dataLength={highlights.length}
      next={() => dispatch(bumpVisibleHighlightsAsync())}
      hasMore={hasMoreHighlights}
      loader={createSkeleton(10)}
      endMessage={
        <NoHighlights
          title="That's it for today!"
          text="Add subreddits or come back later"
        />
      }
    >
      {highlights.map((highlight, index) => (
        <Highlight highlight={highlight} index={`highlight_${index}`} />
      ))}
    </InfiniteScroll>
  );
};

export default New;
