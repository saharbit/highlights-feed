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
    <div className="m-2">
      <div className="bg-gray-200 p-2 rounded-md">
        <div className="font-bold text-xl p-2">Subreddits</div>
        {subreddits.map((sub) => {
          return (
            <div
              className="px-2 py-4 flex items-center justify-between hover:bg-gray-100 rounded-md transition-all cursor-pointer"
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
    </div>
  );
};

export default Subreddits;
