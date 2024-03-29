import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getHighlightsCount } from "./appStateSelectors";
import { TABS } from "../utils/tabs";
import { MOCK_HIGHLIGHTS } from "../pages/api/mock";

const initialState = {
  highlights: {},
  isFetchingHighlights: true,
  visibleHighlights: 10,
  hasMoreHighlights: true,
  search: "",
  subreddit: null,
  tab: TABS[0].value,
};

const appState = createSlice({
  name: "appState",
  initialState,
  reducers: {
    fetchHighlightsStarted(state) {
      state.isFetchingHighlights = true;
    },
    fetchHighlightsSuccess(state, action) {
      const { highlights } = action.payload;
      state.isFetchingHighlights = false;
      state.highlights = highlights;
    },
    fetchHighlightsFailure(state) {
      state.isFetchingHighlights = false;
    },
    bumpVisibleHighlights(state, action) {
      const { highlightsCount } = action.payload;

      state.visibleHighlights = state.visibleHighlights + 10;
      if (highlightsCount < state.visibleHighlights) {
        state.hasMoreHighlights = false;
      }
    },
    setSearch(state, action) {
      const { search } = action.payload;
      state.search = search;
      if (search) {
        state.hasMoreHighlights = false;
      } else {
        state.hasMoreHighlights = true;
        state.visibleHighlights = 10;
      }
    },
    selectSub(state, action) {
      const { sub } = action.payload;

      if (state.subreddit?.value === sub.value) {
        state.subreddit = null;
      } else {
        state.subreddit = sub;
      }
    },
    setTab(state, action) {
      const { tab } = action.payload;
      state.tab = tab;
      state.visibleHighlights = 10;
      state.hasMoreHighlights = true;
      window.scrollTo(0, 0);
    },
  },
});

const { actions, reducer } = appState;
export const {
  fetchHighlightsStarted,
  fetchHighlightsSuccess,
  fetchHighlightsFailure,
  bumpVisibleHighlights,
  setSearch,
  selectSub,
  setTab,
} = actions;
export default reducer;

export const fetchHighlights = () => async (dispatch) => {
  dispatch(fetchHighlightsStarted());
  try {
    dispatch(fetchHighlightsSuccess({ highlights: MOCK_HIGHLIGHTS }));
  } catch (err) {
    dispatch(fetchHighlightsFailure(err.toString()));
  }
};

export const bumpVisibleHighlightsAsync = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const highlightsCount = getHighlightsCount(state);
    setTimeout(() => dispatch(bumpVisibleHighlights({ highlightsCount })), 500);
  } catch (err) {}
};
