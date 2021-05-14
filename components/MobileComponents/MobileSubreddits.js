import React from "react";
import { SUBREDDITS_LIST } from "../../consts/subreddits";
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
            className={`mr-2 bg-gray-100 ${
              isSelected
                ? "border border-gray-400 bg-gray-200"
                : "border border-gray-200"
            } p-1 px-2 rounded-full`}
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
