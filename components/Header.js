import React, { useState } from "react";
import Modal from "react-modal";
import Subreddits from "./Subreddits";
import SubredditsModal from "./SubredditsModal";
import BoxesIcon from "../icons/BoxesIcon";
import { useSelector } from "react-redux";

const Header = ({ subreddits, setSubreddits }) => {
  const [isSubredditsModalOpen, setIsSubredditsModalOpen] = useState(false);
  const {
    tab: { label, Icon },
  } = useSelector((state) => state.appState);

  return (
    <div className="flex justify-between items-center px-2 py-3 border-b shadow-sm md:border-none md:shadow-none">
      <div className="flex items-center">
        <Icon className="w-6 h-6 mr-2" />
        <div className="font-bold text-xl">{label}</div>
      </div>
      <div
        onClick={() => setIsSubredditsModalOpen(true)}
        className="md:hidden cursor-pointer"
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

export default Header;
