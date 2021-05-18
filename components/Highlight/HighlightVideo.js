import React, { useState } from "react";
import ReactPlayer from "react-player";

const HighlightVideo = ({ highlight }) => {
  const [erroredOut, setErroredOut] = useState(false);

  if (erroredOut) {
    return (
      <div className="text-center pb-4 pt-5 bg-red-50">
        Failed to preview video, try the{" "}
        <a
          className="underline text-blue-500"
          href={highlight.videoUrl}
          target="_blank"
        >
          original
        </a>{" "}
        link
      </div>
    );
  }

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={highlight.videoUrl}
        width="100%"
        height="100%"
        className="react-player"
        onError={() => setErroredOut(true)}
      />
    </div>
  );
};

export default HighlightVideo;
