import React from "react";
import { TABS } from "../consts/tabs";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../store/appState";

function Tab({ label, Icon, children, isActive, ...props }) {
  return (
    <div
      className="px-2 py-4 flex items-center hover:bg-gray-100 cursor-pointer transition-all first:rounded-t-xl last:rounded-b-xl"
      {...props}
    >
      <Icon className="h-7 w-7 mr-2" />
      <div className={`font-lg ${isActive ? "font-bold" : ""}`}>{label}</div>
    </div>
  );
}

const Tabs = () => {
  const dispatch = useDispatch();
  const { tab: currentTab } = useSelector((state) => state.appState);

  return (
    <div className="bg-gray-200 rounded-xl">
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
