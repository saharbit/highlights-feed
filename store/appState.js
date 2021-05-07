import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getHighlightsCount } from "./appStateSelectors";
import { SUBREDDITS_INITIAL_STATE } from "../consts/subreddits";
import { TABS } from "../consts/tabs";

const initialState = {
  highlights: {},
  isFetchingHighlights: true,
  visibleHighlights: 10,
  hasMoreHighlights: true,
  search: "",
  subreddits: SUBREDDITS_INITIAL_STATE,
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
    },
    selectSub(state, action) {
      const { selectedSub } = action.payload;

      state.subreddits = state.subreddits.map((sub) =>
        sub.value === selectedSub.value
          ? { ...sub, isSelected: !sub.isSelected }
          : sub
      );
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
    const response = await axios.get("/api/highlights");
    dispatch(fetchHighlightsSuccess({ highlights: response.data }));
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
