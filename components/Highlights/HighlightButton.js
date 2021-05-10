import { motion } from "framer-motion";
import React from "react";

function HighlightButton({
  IconComponent,
  className,
  isActive,
  activeColor,
  ...props
}) {
  return (
    <div className="flex mr-2">
      <motion.div
        className={`p-1 px-3 text-sm cursor-pointer rounded-full border ${
          className ? className : ""
        }`}
        {...props}
      >
        <IconComponent
          className="w-5 h-5"
          color={isActive ? activeColor : "#9CA3AF"}
          fill={isActive ? activeColor : "none"}
        />
      </motion.div>
    </div>
  );
}
export default HighlightButton;
