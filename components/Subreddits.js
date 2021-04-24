import React from "react";

const Subreddits = ({ subreddits, setSubreddits }) => {
  function selectSub(sub) {
    setSubreddits(
      subreddits.map((x) =>
        x.value === sub.value ? { ...x, isSelected: !x.isSelected } : x
      )
    );
  }

  return (
    <div className="bg-gray-200 rounded-xl">
      <div className="font-bold text-xl px-4 py-3">Subreddits</div>
      {subreddits.map((sub) => {
        return (
          <div
            className="py-4 px-3 flex items-center justify-between hover:bg-gray-50 transition-all cursor-pointer"
            key={`subLabel_${sub.value}`}
            onClick={() => selectSub(sub)}
          >
            <div className={sub.isSelected ? "font-semibold" : ""}>
              {sub.label}
            </div>
            {sub.isSelected && (
              <img src={"/check.svg"} alt="Check Icon" className="w-5" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Subreddits;
