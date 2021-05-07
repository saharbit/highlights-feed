import { createSelector } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { MOBILE_TABS } from "../consts/tabs";
import { sort } from "fast-sort";

const getHighlights = (state) => state.appState.highlights;
const getVisibleHighlights = (state) => state.appState.visibleHighlights;
const getTab = (state) => state.appState.tab;

export const getHighlightsCount = createSelector(
  [getHighlights, getTab],
  (highlights, tab) => {
    let list = [];
    if (!highlights) {
      return list.length;
    }
    for (let [sub, categories] of Object.entries(highlights)) {
      if (sub !== "lastupdated") {
        list.push(...categories[tab]);
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
          ...categories[tab].map((highlight) => ({ ...highlight, sub }))
        );
      }
    }

    if (tab === "top") {
      list = sort(list).desc((highlight) => highlight.score);
    }

    if (tab === "new") {
      list = list.sort((a, b) => dayjs(b.date) - dayjs(a.date));
    }

    if (list.length > visibleHighlights) {
      return list.slice(0, visibleHighlights);
    }

    return list;
  }
);

export const getCurrentTab = createSelector([getTab], (currentTab) => {
  return MOBILE_TABS.find((tab) => tab.value === currentTab);
});
