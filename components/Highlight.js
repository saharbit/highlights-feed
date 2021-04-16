import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Highlight = ({ highlight, subreddit }) => {
  const [erroredOut, setErroredOut] = useState(false);
  const [isReady, setIsReady] = useState(false);

  if (erroredOut) {
    return null;
  }

  return (
    <div
      key={`highlight_${highlight.url}`}
      className="bg-white rounded-lg shadow-md"
    >
      <div className="flex justify-between align-center p-2">
        <div className="font-semibold">{subreddit}</div>
        <img src="/dots.svg" alt="Dots" className="w-5" />
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
        <div className="flex border">
          <div className="w-full flex p-2 border-r text-sm justify-center">
            <img src="/like.svg" alt="Like" className="w-5 mr-2" />
            <div>Like</div>
          </div>
          <div className="w-full flex p-2 border-r text-sm justify-center">
            <img src="/share.svg" alt="Share" className="w-5 mr-2" />
            <div>Share</div>
          </div>
          <div className="w-full flex p-2 text-sm justify-center">
            <img src="/comment.svg" alt="Comment" className="w-5 mr-2" />
            <div>Post</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
