import React, { useState } from "react";
import { TABS } from "../consts/tabs";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../store/appState";

function Tab({ label, Icon, children, isActive, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex cursor-pointer pb-3"
      {...props}
    >
      <div
        className={`flex items-center rounded-full pl-4 pr-7 py-3 transition-all ${
          isHovered ? "bg-red-50" : ""
        }`}
      >
        <Icon
          className={`h-8 w-8 mr-4`}
          color={isActive || isHovered ? "red" : "black"}
        />
        <div
          className={`text-xl font-semibold ${
            isActive || isHovered ? "text-red-500" : ""
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

const Tabs = () => {
  const dispatch = useDispatch();
  const { tab: currentTab } = useSelector((state) => state.appState);

  return (
    <div className="w-full md:max-w-xs">
      {TABS.map((tab) => (
        <Tab
          onClick={() => dispatch(setTab({ tab: tab.value }))}
          label={tab.label}
          Icon={tab.Icon}
          isActive={currentTab === tab.value}
          key={tab.value}
        />
      ))}
    </div>
  );
};

export default Tabs;
