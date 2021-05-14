import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSub } from "../store/appState";
import { SUBREDDITS_LIST } from "../consts/subreddits";

const Subreddits = () => {
  const dispatch = useDispatch();
  const { subreddit } = useSelector((state) => state.appState);

  return (
    <div className="pt-2 rounded-xl md:pt-0 md:bg-gray-100">
      <div className="hidden md:flex justify-between items-center px-4 pt-3 pb-4">
        <div className="font-bold text-xl">By subreddit</div>
      </div>
      {SUBREDDITS_LIST.map((sub) => {
        const isSelected = subreddit?.value === sub.value;

        return (
          <div
            className={`py-4 pl-3 pr-5 flex items-center justify-between transition-all cursor-pointer last:rounded-b-xl ${
              isSelected ? "bg-gray-300" : "md:hover:bg-gray-200"
            }`}
            key={`subLabel_${sub.value}`}
            onClick={() => dispatch(selectSub({ sub }))}
          >
            <div className="flex">
              <div className="mr-2">{sub.icon}</div>
              <div className="">{sub.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Subreddits;
