import React, { useState } from "react";
import ReactPlayer from "react-player";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import HighlightButton from "./HighlightButton";
dayjs.extend(relativeTime);

const Highlight = ({ highlight, subreddit }) => {
  const [erroredOut, setErroredOut] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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

  return (
    <div
      key={`highlight_${highlight.url}`}
      className="bg-white rounded-lg shadow-md mb-2"
    >
      <div className="flex justify-between p-2">
        <div className="flex items-center">
          <div className="font-semibold">{subreddit}</div>
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
          <HighlightButton onClick={() => setIsLiked(!isLiked)}>
            <img src={"/like.svg"} alt="Like" className={`w-5 mr-2`} />
            <div className={isLiked ? "font-bold" : ""}>Like</div>
          </HighlightButton>
          <HighlightButton onClick={share}>
            <img src="/share.svg" alt="Share" className="w-5 mr-2" />
            <div>Share</div>
          </HighlightButton>
          <HighlightButton>
            <img src="/comment.svg" alt="Comment" className="w-5 mr-2" />
            <div>Post</div>
          </HighlightButton>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
