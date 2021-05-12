import { createSelector } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { MOBILE_TABS } from "../consts/tabs";
import { sort } from "fast-sort";

const getHighlights = (state) => state.appState.highlights;
const getVisibleHighlights = (state) => state.appState.visibleHighlights;
const getTab = (state) => state.appState.tab;
const getSearch = (state) => state.appState.search;
const getSubreddit = (state) => state.appState.subreddit;

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
  [getHighlights, getVisibleHighlights, getTab, getSearch, getSubreddit],
  (highlights, visibleHighlights, tab, search, subreddit) => {
    let list = [];

    if (!highlights) {
      return list;
    }

    for (let [sub, categories] of Object.entries(highlights)) {
      if (sub !== "lastupdated" && (!subreddit || subreddit.value === sub)) {
        list.push(
          ...categories[tab].map((highlight) => ({ ...highlight, sub }))
        );
      }
    }

    if (tab === "top") {
      list = sort(list).desc((highlight) => highlight.score);
    }

    if (tab === "new") {
      list = sort(list).desc((highlight) => dayjs(highlight.date));
    }

    if (search) {
      list = list.filter((highlight) =>
        highlight.title.toLowerCase().includes(search.toLowerCase())
      );

      return list;
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
