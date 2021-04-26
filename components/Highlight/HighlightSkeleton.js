import React from "react";

const HighlightSkeleton = () => {
  return (
    <div className="flex animate-pulse">
      <div className="flex-1 space-y-2 mb-4">
        <div className="h-4 bg-gray-300 rounded w-5/12" />
        <div className="h-4 bg-gray-300 rounded w-full h-64" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-full" />
      </div>
    </div>
  );
};

export default HighlightSkeleton;
