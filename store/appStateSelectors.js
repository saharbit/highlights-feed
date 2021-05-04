import { createSelector } from "@reduxjs/toolkit";

const getHighlights = (state) => state.appState.highlights;
const getVisibleHighlights = (state) => state.appState.visibleHighlights;

export const getHotHighlightsCount = createSelector(
  [getHighlights, getVisibleHighlights],
  (highlights) => {
    let list = [];
    if (!highlights) {
      return list;
    }
    for (let [sub, categories] of Object.entries(highlights)) {
      if (sub !== "lastupdated") {
        list.push(
          ...categories["top"].map((highlight) => ({ ...highlight, sub }))
        );
      }
    }
    return list.length;
  }
);

export const getHotHighlights = createSelector(
  [getHighlights, getVisibleHighlights],
  (highlights, visibleHighlights) => {
    let list = [];
    if (!highlights) {
      return list;
    }
    for (let [sub, categories] of Object.entries(highlights)) {
      if (sub !== "lastupdated") {
        list.push(
          ...categories["top"].map((highlight) => ({ ...highlight, sub }))
        );
      }
    }
    if (list.length > visibleHighlights) {
      return list.slice(0, visibleHighlights);
    }
    return list;
  }
);
