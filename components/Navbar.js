import React from "react";
import { MOBILE_TABS } from "../consts/tabs";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../store/appState";

function Tab({ label, Icon, children, isActive, ...props }) {
  return (
    <div className="flex w-full justify-center items-center p-3" {...props}>
      <Icon src={Icon} className="w-6" color={isActive ? "red" : "black"} />
    </div>
  );
}

const Navbar = () => {
  const dispatch = useDispatch();
  const { tab: currentTab } = useSelector((state) => state.appState);

  return (
    <div className="fixed bg-white border-t w-full bottom-0 z-10 md:hidden safe-bottom">
      <div className="flex justify-between">
        {MOBILE_TABS.map((tab) => {
          return (
            <Tab
              onClick={() => dispatch(setTab({ tab }))}
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
