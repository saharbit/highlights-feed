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
  hockey: {
    icon: "🏒",
    label: "r/hockey",
  },
};

export const SUBREDDITS_LIST = Object.entries(SUBREDDITS).map(
  ([value, sub]) => ({
    ...sub,
    value,
  })
);
