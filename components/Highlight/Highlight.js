import React, { useState } from "react";
import ReactPlayer from "react-player";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import HighlightButton from "./HighlightButton";
import HeartIcon from "../../icons/HeartIcon";
import { saveHighlightToLocalStorage } from "../../services/localStorage";
import { shareHighlight } from "../../services/share";
import { SUBREDDITS } from "../../consts/subreddits";
import { kFormatter } from "../../utils/utils";
import ArrowUp from "../../icons/ArrowUp";
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
    <div className="border-b md:border-l md:border-r">
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
          <ArrowUp color="#EF4444" />
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
      <div className="flex flex-col p-2">
        <div className="font-semibold">{highlight.title}</div>
        {/*<div className="flex">*/}
        {/*  <HighlightButton onClick={save}>*/}
        {/*    <HeartIcon*/}
        {/*      className="w-5 h-5 mr-2"*/}
        {/*      stroke={isSaved ? "#EF4444" : "black"}*/}
        {/*      fill={isSaved ? "#EF4444" : "none"}*/}
        {/*    />*/}
        {/*    <div className={isSaved ? "font-semibold" : ""}></div>*/}
        {/*  </HighlightButton>*/}
        {/*  <HighlightButton onClick={share}>*/}
        {/*    <img src="/share.svg" alt="Share" className="w-5 h-5 mr-2" />*/}
        {/*  </HighlightButton>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Highlight;
