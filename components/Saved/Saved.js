import React, { useEffect, useState } from "react";
import NoHighlights from "../NoHighlights";

const Saved = ({ subreddits }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedHighlights = JSON.parse(localStorage.getItem("savedHighlights"));
    setData(savedHighlights);
  }, []);

  return (
    <div>
      <NoHighlights
        title="No saved highlights"
        text="Change subreddits or save a video"
      />
    </div>
  );
};

export default Saved;
