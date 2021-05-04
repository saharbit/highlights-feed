import FireIcon from "../icons/FireIcon";
import ChartIcon from "../icons/ChartIcon";
import HeartIcon from "../icons/HeartIcon";
import React from "react";
import SearchIcon from "../icons/SearchIcon";

export const TABS = [
  {
    label: "Hot",
    value: "hot",
    Icon: FireIcon,
  },
  {
    label: "New",
    value: "new",
    Icon: ChartIcon,
  },
  {
    label: "Saved",
    value: "saved",
    Icon: HeartIcon,
  },
];

export const MOBILE_TABS = [
  ...TABS,
  {
    label: "Search",
    value: "search",
    Icon: SearchIcon,
  },
];
