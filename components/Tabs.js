import React from "react";

const Tabs = ({ tabs, currentTab, setTab }) => {
  return (
    <div>
      {tabs.map((tab) => {
        const isSelected = currentTab.value === tab.value;
        return (
          <div
            className="px-2 py-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer transition-all"
            key={`subLabel_${tab.value}`}
            onClick={() => setTab(tab)}
          >
            <div className={isSelected ? "font-bold" : ""}>{tab.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
