import { motion } from "framer-motion";
import React from "react";

function HighlightButton({ children, ...props }) {
  return (
    <motion.div
      className="flex flex-1 p-2 text-sm justify-center items-center cursor-pointer md:hover:bg-gray-100 md:transition-all"
      whileTap={{ scale: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
export default HighlightButton;
