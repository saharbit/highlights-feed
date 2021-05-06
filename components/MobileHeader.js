import React, { useState } from "react";
import Modal from "react-modal";
import Subreddits from "./Subreddits";
import SubredditsModal from "./SubredditsModal";
import BoxesIcon from "../icons/BoxesIcon";
import { useSelector } from "react-redux";

const MobileHeader = ({ subreddits, setSubreddits }) => {
  const [isSubredditsModalOpen, setIsSubredditsModalOpen] = useState(false);
  const {
    tab: { label, Icon },
  } = useSelector((state) => state.appState);

  return (
    <div className="flex justify-between items-center px-2 h-12 border-b fixed inset-x-0 top-0 z-10 bg-white md:hidden">
      <div className="flex items-center">
        <Icon className="w-6 h-6 mr-2" />
        <div className="font-bold text-xl">{label}</div>
      </div>
      <div
        onClick={() => setIsSubredditsModalOpen(true)}
        className="cursor-pointer"
      >
        <BoxesIcon />
      </div>
      <SubredditsModal
        isOpen={isSubredditsModalOpen}
        onRequestClose={() => setIsSubredditsModalOpen(false)}
        subreddits={subreddits}
        setSubreddits={setSubreddits}
      />
    </div>
  );
};

export default MobileHeader;