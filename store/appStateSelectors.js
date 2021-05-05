import { createSelector } from "@reduxjs/toolkit";

const getHighlights = (state) => state.appState.highlights;
const getVisibleHighlights = (state) => state.appState.visibleHighlights;
const getTab = (state) => state.appState.tab;

export const getHighlightsCount = createSelector(
  [getHighlights, getTab],
  (highlights, tab) => {
    let list = [];
    if (!highlights) {
      return list;
    }
    for (let [sub, categories] of Object.entries(highlights)) {
      if (sub !== "lastupdated") {
        list.push(
          ...categories[tab.value].map((highlight) => ({ ...highlight, sub }))
        );
      }
    }
    return list.length;
  }
);

export const getTabHighlights = createSelector(
  [getHighlights, getVisibleHighlights, getTab],
  (highlights, visibleHighlights, tab) => {
    let list = [];
    if (!highlights) {
      return list;
    }
    for (let [sub, categories] of Object.entries(highlights)) {
      if (sub !== "lastupdated") {
        list.push(
          ...categories[tab.value].map((highlight) => ({ ...highlight, sub }))
        );
      }
    }
    if (list.length > visibleHighlights) {
      return list.slice(0, visibleHighlights);
    }
    return list;
  }
);
