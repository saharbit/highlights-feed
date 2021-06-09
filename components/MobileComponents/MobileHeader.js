import React from "react";
import { useSelector } from "react-redux";
import { getCurrentTab } from "../../store/appStateSelectors";

const MobileHeader = () => {
  const { label, Icon } = useSelector(getCurrentTab);

  return (
    <div className="flex justify-between items-center px-2 h-12 border-b fixed inset-x-0 top-0 z-20 bg-white md:hidden">
      <div className="flex w-full items-center">
        <Icon className="w-6 h-6 mr-2" />
        <div className="font-bold text-xl">{label}</div>
      </div>
    </div>
  );
};

export default MobileHeader;
