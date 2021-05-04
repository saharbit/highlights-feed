export const SUBREDDITS = {
  soccer: {
    icon: "⚽",
    label: "r/soccer",
  },
  nba: {
    icon: "🏀",
    label: "r/nba",
  },
  nfl: {
    icon: "🏈",
    label: "r/nfl",
  },
  formula1: {
    icon: "🏎",
    label: "r/formula1",
  },
  baseball: {
    icon: "⚾",
    label: "r/baseball",
  },
  mma: {
    icon: "🥊",
    label: "r/mma",
  },
};

export const SUBREDDITS_INITIAL_STATE = Object.entries(SUBREDDITS).map(
  ([value, sub]) => ({
    ...sub,
    value,
    isSelected: true,
  })
);
