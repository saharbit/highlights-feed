import React from "react";
import { MOBILE_TABS } from "../consts/tabs";

function Tab({ label, Icon, children, isActive, ...props }) {
  return (
    <div className="flex w-full justify-center items-center" {...props}>
      <Icon src={Icon} className="w-6" color={isActive ? "red" : "black"} />
    </div>
  );
}

const Navbar = ({ currentTab, setTab }) => {
  return (
    <div className="fixed bg-white border-t w-full bottom-0 z-10 md:hidden safe-bottom">
      <div className="flex justify-between p-3">
        {MOBILE_TABS.map((tab) => {
          return (
            <Tab
              onClick={() => setTab(tab)}
              label={tab.label}
              Icon={tab.Icon}
              isActive={currentTab.value === tab.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
