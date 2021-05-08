import React, { useState } from "react";
import ReactPlayer from "react-player";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { saveHighlightToLocalStorage } from "../../services/localStorage";
import { shareHighlight } from "../../services/share";
import { SUBREDDITS } from "../../consts/subreddits";
import { kFormatter } from "../../utils/utils";
import ArrowUp from "../../icons/ArrowUp";
import HighlightButton from "./HighlightButton";
import HeartIcon from "../../icons/HeartIcon";
import ShareIcon from "../../icons/ShareIcon";
import CommentIcon from "../../icons/CommentIcon";
dayjs.extend(relativeTime);

const Highlight = ({ highlight }) => {
  const [erroredOut, setErroredOut] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (erroredOut) {
    return null;
  }

  function share() {
    shareHighlight(highlight);
  }

  function save() {
    setIsSaved(!isSaved);
    saveHighlightToLocalStorage(highlight);
  }

  return (
    <div className="border-b">
      <div className="flex justify-between p-2 mr-1">
        <div className="flex items-center">
          <div className="mr-2">{SUBREDDITS[highlight.sub].icon}</div>
          <div className="text-gray-600 mr-1">
            {SUBREDDITS[highlight.sub].label}
          </div>
          <div className="text-gray-400 text-sm">
            • {dayjs(highlight.date).fromNow()}
          </div>
        </div>
        <div className="flex items-center">
          <ArrowUp color="#ff8b60" />
          <span className="text-gray-500">{kFormatter(highlight.score)}</span>
        </div>
      </div>
      <div className="player-wrapper">
        <ReactPlayer
          url={highlight.url}
          width="100%"
          height="100%"
          className="react-player"
          onError={() => setErroredOut(true)}
          onReady={() => setIsReady(true)}
        />
      </div>
      <div className="flex flex-col">
        <div className="font-semibold p-2">{highlight.title}</div>
        <div className="flex pb-2 px-2">
          <HighlightButton
            onClick={save}
            IconComponent={HeartIcon}
            className="md:hover:bg-red-100"
          />
          <HighlightButton
            onClick={share}
            IconComponent={ShareIcon}
            className="md:hover:bg-green-100"
          />
          <HighlightButton
            onClick={() => console.log("go to post")}
            IconComponent={CommentIcon}
            className="md:hover:bg-blue-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
