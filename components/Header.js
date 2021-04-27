import React, { useState } from "react";
import Modal from "react-modal";
import Subreddits from "./Subreddits";
import SubredditsModal from "./SubredditsModal";

const Header = ({ tab: { label, Icon }, subreddits, setSubreddits }) => {
  const [isSubredditsModalOpen, setIsSubredditsModalOpen] = useState(false);
  return (
    <div className="flex justify-between px-2 py-3">
      <div className="flex items-center">
        <Icon className="w-6 h-6 mr-2" />
        <div className="font-bold text-xl">{label}</div>
      </div>
      <div
        onClick={() => setIsSubredditsModalOpen(true)}
        className="w-6 md:hidden cursor-pointer"
      >
        <img src="/adjustments.svg" alt="Adjust" />
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
