export const DEFAULT_SUBREDDITS = [
  {
    label: (
      <div>
        <span className="mr-3">⚽️</span>r/soccer
      </div>
    ),
    value: "soccer",
  },
  {
    label: (
      <div>
        <span className="mr-3">🏀️</span>r/nba
      </div>
    ),
    value: "nba",
  },
  {
    label: (
      <div>
        <span className="mr-3">🏈</span>r/nfl
      </div>
    ),
  },
  {
    label: (
      <div>
        <span className="mr-3">🏎</span>r/formula1
      </div>
    ),
    value: "formula1",
  },
  {
    label: (
      <div>
        <span className="mr-3">⚾️</span>r/baseball
      </div>
    ),
    value: "baseball",
  },
  {
    label: (
      <div>
        <span className="mr-3">🥊️</span>r/mma
      </div>
    ),
    value: "mma",
  },
];

export const DEFAULT_SUBREDDITS_STATE = DEFAULT_SUBREDDITS.map((sub) => ({
  ...sub,
  isSelected: true,
}));
