import React from "react";

const Subreddits = ({ subreddits, setSubreddits, onClose }) => {
  function selectSub(sub) {
    setSubreddits(
      subreddits.map((x) =>
        x.value === sub.value ? { ...x, isSelected: !x.isSelected } : x
      )
    );
  }

  return (
    <div className="bg-gray-100 rounded-xl">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="font-bold text-xl">Subreddits</div>
        {onClose && (
          <img src="/close.svg" alt="Close" className="w-4" onClick={onClose} />
        )}
      </div>
      {subreddits.map((sub) => {
        return (
          <div
            className="py-4 px-3 flex items-center justify-between hover:bg-gray-200 transition-all cursor-pointer rounded-lg"
            key={`subLabel_${sub.value}`}
            onClick={() => selectSub(sub)}
          >
            <div className={sub.isSelected ? "font-semibold" : ""}>
              {sub.label}
            </div>
            {sub.isSelected && (
              <img src={"/check.svg"} alt="Check Icon" className="w-5" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Subreddits;
