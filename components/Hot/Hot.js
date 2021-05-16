import React from "react";
import Highlight from "../Highlight/Highlight";
import HighlightSkeleton from "../Highlight/HighlightSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import NoHighlights from "../NoHighlights";
import { useDispatch, useSelector } from "react-redux";
import { getTabHighlights } from "../../store/appStateSelectors";
import { bumpVisibleHighlightsAsync } from "../../store/appState";

export function createSkeleton(length) {
  return Array(length)
    .fill(0)
    .map((_, index) => <HighlightSkeleton key={`skeleton_${index}`} />);
}

const Hot = () => {
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
        <Highlight highlight={highlight} key={`highlight_${index}`} />
      ))}
    </InfiniteScroll>
  );
};

export default Hot;
