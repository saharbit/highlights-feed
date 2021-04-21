import React, { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

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
        <div className="flex border-t">
          <motion.div
            className="w-full flex p-2 border-r text-sm justify-center cursor-pointer hover:bg-gray-100 transition-all"
            onClick={() => setIsLiked(!isLiked)}
            whileTap={{ scale: 0.7 }}
          >
            <img
              src={isLiked ? "/like-solid.svg" : "/like.svg"}
              alt="Like"
              className={`w-5 mr-2`}
            />
            <div className={isLiked ? "font-bold" : ""}>Like</div>
          </motion.div>
          <motion.div
            className="w-full flex p-2 border-r text-sm justify-center cursor-pointer hover:bg-gray-100 transition-all"
            onClick={share}
            whileTap={{ scale: 0.7 }}
          >
            <img src="/share.svg" alt="Share" className="w-5 mr-2" />
            <div>Share</div>
          </motion.div>
          <motion.div
            className="w-full flex p-2 text-sm justify-center cursor-pointer hover:bg-gray-100 transition-all"
            whileTap={{ scale: 0.7 }}
          >
            <img src="/comment.svg" alt="Comment" className="w-5 mr-2" />
            <div>Post</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
