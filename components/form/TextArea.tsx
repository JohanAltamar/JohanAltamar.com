import React from "react";
import classNames from "classnames";

interface InputProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  className?: string;
}

const TextArea: React.FC<InputProps> = ({
  label,
  className,
  ...textAreaProps
}) => {
  return (
    <div className={classNames("flex flex-col mb-2", className)}>
      <label
        className={classNames(
          "capitalize font-semibold text-gray-600 dark:text-gray-400",
          {
            "after:content-['*'] after:ml-0.5 after:text-red-500 dark:after:text-lime-400":
              textAreaProps.required,
          }
        )}
      >
        {label}
      </label>
      <textarea
        rows={2}
        {...textAreaProps}
        className="py-1 px-2 resize-none focus:outline-lime-300"
      />
    </div>
  );
};

export default TextArea;
