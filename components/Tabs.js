import React from "react";

const Tabs = ({ tabs }) => {
  return (
    <div>
      {tabs.map((tab) => (
        <div
          className="px-2 py-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer"
          key={`subLabel_${tab.value}`}
        >
          <div>{tab.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
