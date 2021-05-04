import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getHotHighlightsCount } from "./appStateSelectors";
import { SUBREDDITS_INITIAL_STATE } from "../consts/subreddits";
import { TABS } from "../consts/tabs";

const initialState = {
  highlights: {},
  isFetchingHighlights: true,
  visibleHighlights: 10,
  hasMoreHighlights: true,
  search: "",
  subreddits: SUBREDDITS_INITIAL_STATE,
  tab: TABS[0],
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
      state.isFetchingHighlights = true;
      state.highlights = highlights;
    },
    fetchHighlightsFailure(state) {
      state.isFetchingHighlights = true;
    },
    bumpVisibleHighlights(state, action) {
      const { hotHighlightsCount } = action.payload;

      state.visibleHighlights = state.visibleHighlights + 10;
      if (hotHighlightsCount < state.visibleHighlights) {
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
    const hotHighlightsCount = getHotHighlightsCount(state);
    setTimeout(
      () => dispatch(bumpVisibleHighlights({ hotHighlightsCount })),
      500
    );
  } catch (err) {}
};
