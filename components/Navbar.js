import React from "react";
import SearchIcon from "../icons/SearchIcon";
import { DEFAULT_TABS } from "../consts/tabs";

const Navbar = ({ currentTab, setTab }) => {
  return (
    <div className="fixed bg-white border-t-2 h-12 w-full bottom-0 z-10 flex justify-between md:hidden">
      {DEFAULT_TABS.map((tab) => {
        const isSelected = currentTab.value === tab.value;

        return (
          <div
            className="flex w-full justify-center items-center"
            onClick={() => setTab(tab)}
            key={tab.value}
          >
            <img
              src={isSelected ? tab.activeIcon : tab.icon}
              alt="icon"
              className="w-6"
            />
          </div>
        );
      })}
      <div className="flex w-full justify-center items-center">
        <SearchIcon className="w-6" />
      </div>
    </div>
  );
};

export default Navbar;
