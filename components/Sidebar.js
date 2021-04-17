import React, { useState } from "react";

const Sidebar = ({ subreddits }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between px-2 py-4">
        <div className="font-bold text-xl">Highlights Feed</div>
        <img
          src="/cog.svg"
          alt="Cog"
          className="w-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
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
      )}
    </div>
  );
};

export default Sidebar;
