import React, { useState } from "react";
import ReactPlayer from "react-player";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import HighlightButton from "./HighlightButton";
import HeartIcon from "../../icons/HeartIcon";
import { saveHighlightToLocalStorage } from "../../services/localStorage";
import { shareHighlight } from "../../services/share";
import { SUBREDDITS } from "../../consts/subreddits";
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
    <div className="mb-4">
      <div className="player-wrapper mb-2">
        <ReactPlayer
          url={highlight.url}
          width="100%"
          height="100%"
          className="react-player"
          onError={() => setErroredOut(true)}
          onReady={() => setIsReady(true)}
        />
      </div>
      <div className="flex flex-col px-2">
        <div className="font-semibold mb-1">{highlight.title}</div>
        <div className="flex items-center">
          <div className="mr-2">{SUBREDDITS[highlight.sub].icon}</div>
          <div className="text-gray-600 mr-1">
            {SUBREDDITS[highlight.sub].label}
          </div>
          <div className="text-gray-400 text-sm">
            • {dayjs(highlight.date).fromNow()}
          </div>
        </div>

        {/*<HighlightButton onClick={save}>*/}
        {/*  <HeartIcon*/}
        {/*    className="w-5 h-5 mr-2"*/}
        {/*    stroke={isSaved ? "#EF4444" : "black"}*/}
        {/*    fill={isSaved ? "#EF4444" : "none"}*/}
        {/*  />*/}
        {/*  <div className={isSaved ? "font-semibold" : ""}>*/}
        {/*    {isSaved ? "Saved" : "Save"}*/}
        {/*  </div>*/}
        {/*</HighlightButton>*/}
        {/*<HighlightButton onClick={share}>*/}
        {/*  <img src="/share.svg" alt="Share" className="w-5 h-5 mr-2" />*/}
        {/*  <div className="">Share</div>*/}
        {/*</HighlightButton>*/}
      </div>
    </div>
  );
};

export default Highlight;
