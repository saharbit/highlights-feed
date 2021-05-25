import React from "react";
import { SUBREDDITS } from "../../utils/subreddits";
import dayjs from "dayjs";
import ArrowUp from "../../icons/ArrowUp";
import { kFormatter } from "../../utils/utils";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const HighlightHeader = ({ highlight }) => {
  return (
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
        <ArrowUp color="#ff8b60" />
        <span className="text-gray-500">{kFormatter(highlight.score)}</span>
      </div>
    </div>
  );
};

export default HighlightHeader;
