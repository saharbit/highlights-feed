import React, { useState } from "react";
import ReactPlayer from "react-player";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import HighlightButton from "./HighlightButton";
import HeartIcon from "../../icons/HeartIcon";
dayjs.extend(relativeTime);

const Highlight = ({ highlight, subreddit }) => {
  const [erroredOut, setErroredOut] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (erroredOut) {
    return null;
  }

  function share() {
    if (navigator.share) {
      navigator
        .share({
          title: highlight.title,
          url: highlight.url,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // fallback
    }
  }

  function save() {
    const savedHighlights =
      JSON.parse(localStorage.getItem("savedHighlights")) || {};
    const currentHighlights = savedHighlights?.[subreddit.value] || [];
    let updatedHighlights;
    if (
      currentHighlights.find(
        (currentHighlight) => currentHighlight.url === highlight.url
      )
    ) {
      updatedHighlights = {
        ...savedHighlights,
        [subreddit.value]: currentHighlights.filter(
          (currentHighlight) => currentHighlight.url !== highlight.url
        ),
      };
    } else {
      updatedHighlights = {
        ...savedHighlights,
        [subreddit.value]: [...currentHighlights, highlight],
      };
    }
    localStorage.setItem("savedHighlights", JSON.stringify(updatedHighlights));

    setIsSaved(!isSaved);
  }

  return (
    <div
      key={`highlight_${highlight.url}`}
      className="bg-white rounded-lg shadow-md mb-2"
    >
      <div className="flex justify-between p-2">
        <div className="flex items-center">
          <div className="font-semibold">{subreddit.label}</div>
          {highlight.date && (
            <div className="ml-1 text-gray-400 text-sm">
              • {dayjs(highlight.date).fromNow()}
            </div>
          )}
        </div>
        <img src="/dots.svg" alt="Dots" className="w-5 mr-1" />
      </div>
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
      <div className="flex flex-col">
        <div className="mb-2 px-2">{highlight.title}</div>
        <div className="flex border-t">
          <HighlightButton onClick={save}>
            <HeartIcon
              className="w-5 mr-2"
              stroke={isSaved ? "#EF4444" : "black"}
              fill={isSaved ? "#EF4444" : "none"}
            />
            <div className={isSaved ? "font-semibold" : ""}>
              {isSaved ? "Saved" : "Save"}
            </div>
          </HighlightButton>
          <span className="border-r" />
          <HighlightButton onClick={share}>
            <img src="/share.svg" alt="Share" className="w-5 mr-2" />
            <div className="">Share</div>
          </HighlightButton>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
