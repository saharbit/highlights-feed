import { motion } from "framer-motion";
import React from "react";

function HighlightButton({ IconComponent, className, ...props }) {
  return (
    <div className="flex justify-center items-center mr-2">
      <motion.div
        className={`p-1 px-3 text-sm cursor-pointer rounded-full transition duration-300 ease-in-out border ${
          className ? className : ""
        }`}
        whileTap={{ scale: 0.8 }}
        {...props}
      >
        <IconComponent className="w-5 h-5" color="#9CA3AF" />
      </motion.div>
    </div>
  );
}
export default HighlightButton;
