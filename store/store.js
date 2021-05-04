import { configureStore } from "@reduxjs/toolkit";
import appState from "./appState";

const store = configureStore({
  reducer: {
    appState,
  },
});

export default store;
