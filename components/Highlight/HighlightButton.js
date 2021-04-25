import { motion } from "framer-motion";
import React from "react";

function HighlightButton({ children, ...props }) {
  return (
    <motion.div
      className="w-full flex p-2 text-sm justify-center cursor-pointer md:hover:bg-gray-100 transition-all"
      whileTap={{ scale: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
export default HighlightButton;
