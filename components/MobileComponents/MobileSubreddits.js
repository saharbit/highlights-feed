import React from "react";
import { SUBREDDITS_LIST } from "../../utils/subreddits";
import { useDispatch, useSelector } from "react-redux";
import { selectSub } from "../../store/appState";

const MobileSubreddits = () => {
  const dispatch = useDispatch();
  const { subreddit } = useSelector((state) => state.appState);

  return (
    <div className="flex w-full justify-between items-center p-2 border-b md:hidden overflow-x-scroll">
      {SUBREDDITS_LIST.map((sub) => {
        const isSelected = subreddit?.value === sub.value;

        return (
          <div
            key={sub.value}
            onClick={() => dispatch(selectSub({ sub }))}
            className={`mr-2 p-1 pl-2 pr-3 rounded-full ${
              isSelected
                ? "bg-gray-200 border border-gray-300"
                : "bg-gray-100 border border-gray-100"
            } `}
          >
            <div className="flex">
              <div className="mr-1">{sub.icon}</div>
              <div>{sub.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileSubreddits;
