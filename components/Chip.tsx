import React from "react";
import classnames from "classnames";

interface ChipProps {
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, className }) => {
  return (
    <button
      className={classnames(
        className,
        "bg-red-800 hover:bg-red-700 transition-colors px-2 flex items-center justify-center rounded-lg text-white"
      )}
    >
      {children}
    </button>
  );
};

export default Chip;
