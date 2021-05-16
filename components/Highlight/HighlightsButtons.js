import React from "react";
import HighlightButton from "./HighlightButton";
import HeartIcon from "../../icons/HeartIcon";
import CommentIcon from "../../icons/CommentIcon";
import ShareIcon from "../../icons/ShareIcon";
import { shareHighlight } from "../../services/share";
import { saveHighlightToLocalStorage } from "../../services/localStorage";

const HighlightsButtons = ({ highlight, setIsSaved, isSaved, onSave }) => {
  function share() {
    shareHighlight(highlight);
  }

  function save() {
    if (onSave) {
      onSave();
    } else {
      setIsSaved(!isSaved);
    }

    saveHighlightToLocalStorage(highlight);
  }

  return (
    <div className="flex pb-2 px-2">
      <HighlightButton
        onClick={save}
        IconComponent={HeartIcon}
        className={`md:hover:bg-red-50 ${isSaved ? "border-red-400" : ""}`}
        activeColor="#F87171"
        isActive={isSaved}
      />
      <HighlightButton
        onClick={() => window.open(highlight.postUrl)}
        IconComponent={CommentIcon}
        className="md:hover:bg-blue-50"
      />
      <HighlightButton
        onClick={share}
        IconComponent={ShareIcon}
        className="md:hover:bg-green-50"
      />
    </div>
  );
};

export default HighlightsButtons;
