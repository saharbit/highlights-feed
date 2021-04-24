import React from "react";

const Header = ({ title }) => {
  return (
    <div className="flex justify-between px-2 py-3">
      <div className="font-bold text-xl">{title}</div>
    </div>
  );
};

export default Header;
