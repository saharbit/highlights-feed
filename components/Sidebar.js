import React from "react";

const Sidebar = ({ subreddits }) => {
  return (
    <div className="w-1/6 bg-gray-200">
      <div className="flex justify-center p-5 font-bold text-xl">
        Highlights Deck
      </div>
      {subreddits.map((sub) => (
        <div
          className="p-5 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
          key={`subLabel_${sub.value}`}
        >
          <div>{sub.label}</div>
          <img src="/check.svg" alt="Check Icon" />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
