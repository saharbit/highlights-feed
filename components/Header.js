import React, { useState } from "react";
import Modal from "react-modal";
import Subreddits from "./Subreddits";
import SubredditsModal from "./SubredditsModal";
import BoxesIcon from "../icons/BoxesIcon";

const Header = ({ tab: { label, Icon }, subreddits, setSubreddits }) => {
  const [isSubredditsModalOpen, setIsSubredditsModalOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-2 py-3">
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
