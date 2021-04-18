import React from "react";

const Subreddits = ({ subreddits }) => {
  return (
    <div>
      {subreddits.map((sub) => (
        <div
          className="px-2 py-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer"
          key={`subLabel_${sub.value}`}
        >
          <div>{sub.label}</div>
          <img src="/check.svg" alt="Check Icon" />
        </div>
      ))}
    </div>
  );
};

export default Subreddits;
