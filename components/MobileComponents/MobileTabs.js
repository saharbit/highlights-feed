import React from "react";
import { MOBILE_TABS } from "../../utils/tabs";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../store/appState";

function Tab({ label, Icon, children, isActive, ...props }) {
  return (
    <div className="flex w-full justify-center items-center p-3" {...props}>
      <Icon className="w-6" color={isActive ? "red" : "black"} />
    </div>
  );
}

const MobileTabs = () => {
  const dispatch = useDispatch();
  const { tab: currentTab } = useSelector((state) => state.appState);

  return (
    <div className="fixed bg-white border-t w-full bottom-0 z-10 safe-bottom md:hidden">
      <div className="flex justify-between">
        {MOBILE_TABS.map((tab) => {
          return (
            <Tab
              onClick={() => dispatch(setTab({ tab: tab.value }))}
              label={tab.label}
              Icon={tab.Icon}
              isActive={currentTab === tab.value}
              key={tab.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MobileTabs;
