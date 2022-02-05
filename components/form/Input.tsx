import React from "react";
import classNames from "classnames";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...inputProps }) => {
  return (
    <div className={classNames("flex flex-col", className)}>
      <label
        className={classNames(
          "capitalize font-semibold text-gray-600 dark:text-gray-400",
          {
            "after:content-['*'] after:ml-0.5 after:text-red-500 dark:after:text-lime-400":
              inputProps.required,
          }
        )}
      >
        {label}
      </label>
      <input {...inputProps} className="py-1 px-2 focus:outline-lime-300" />
    </div>
  );
};

export default Input;
