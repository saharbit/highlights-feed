import React from "react";

const New = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-12">
        <div className="font-bold text-lg text-gray-600">No new highlights</div>
        <div className="text-gray-600">
          Change subreddits or filter{" "}
          <span aria-label="celebrate" role="img">
            🎉
          </span>
        </div>
      </div>
    </div>
  );
};

export default New;
