import React from "react";
import CheckIcon from "../icons/CheckIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectSub } from "../store/appState";

const Subreddits = () => {
  const dispatch = useDispatch();
  const { subreddits } = useSelector((state) => state.appState);

  return (
    <div className="pt-2 rounded-xl md:pt-0 md:bg-gray-100">
      <div className="hidden md:flex justify-between items-center px-4 pt-3 pb-4">
        <div className="font-bold text-xl">By subreddit</div>
      </div>
      {subreddits.map((sub) => {
        return (
          <div
            className="py-4 px-3 flex items-center justify-between md:hover:bg-gray-200 transition-all cursor-pointer last:rounded-b-xl"
            key={`subLabel_${sub.value}`}
            onClick={() => dispatch(selectSub({ selectedSub: sub }))}
          >
            <div className="flex">
              <div className="mr-2">{sub.icon}</div>
              <div className={sub.isSelected ? "" : ""}>{sub.label}</div>
            </div>
            {/*{sub.isSelected && <CheckIcon />}*/}
          </div>
        );
      })}
    </div>
  );
};

export default Subreddits;
