import React from "react";

const NoHighlights = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="font-bold text-lg text-gray-600">{title}</div>
      <div className="text-gray-600">{text}</div>
    </div>
  );
};

export default NoHighlights;
