import React, { useEffect, useState } from "react";

const Saved = ({ subreddits }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedHighlights = JSON.parse(localStorage.getItem("savedHighlights"));
    setData(savedHighlights);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center my-12">
        <div className="font-bold text-lg text-gray-600">
          No saved highlights
        </div>
        <div className="text-gray-600">
          Change subreddits or save a video{" "}
          <span aria-label="celebrate" role="img">
            🎉
          </span>
        </div>
      </div>
    </div>
  );
};

export default Saved;
