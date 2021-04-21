import React, { useState } from "react";

const Subreddits = ({ subreddits, setSubreddits }) => {
  const [hovered, setHovered] = useState(null);

  function selectSub(sub) {
    setSubreddits(
      subreddits.map((x) =>
        x.value === sub.value ? { ...x, isSelected: !x.isSelected } : x
      )
    );
  }

  return (
    <div>
      {subreddits.map((sub) => {
        const isHovered = hovered === sub.value;
        return (
          <div
            className="px-2 py-4 flex items-center justify-between hover:bg-gray-200 transition-all cursor-pointer"
            key={`subLabel_${sub.value}`}
            onMouseEnter={() => setHovered(sub.value)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => selectSub(sub)}
          >
            <div className={sub.isSelected ? "font-bold" : ""}>{sub.label}</div>
            {sub.isSelected && (
              <img
                src={isHovered ? "/x.svg" : "/check.svg"}
                alt="Check Icon"
                className="w-5"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Subreddits;
