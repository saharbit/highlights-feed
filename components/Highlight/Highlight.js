import React, { useState } from "react";
import HighlightTitle from "./HighlightTitle";
import HighlightsButtons from "./HighlightsButtons";
import HighlightHeader from "./HighlightHeader";
import HighlightVideo from "./HighlightVideo";

const Highlight = ({ highlight, saved, onSave }) => {
  const [isSaved, setIsSaved] = useState(saved || false);

  return (
    <div className={`border-b`}>
      <HighlightHeader highlight={highlight} />
      <HighlightVideo highlight={highlight} />
      <div className="flex flex-col">
        <HighlightTitle title={highlight.title} />
        <HighlightsButtons
          highlight={highlight}
          setIsSaved={setIsSaved}
          isSaved={isSaved}
          onSave={onSave}
        />
      </div>
    </div>
  );
};

export default Highlight;
