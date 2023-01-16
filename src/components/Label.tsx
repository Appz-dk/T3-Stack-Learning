import React, { PropsWithChildren } from "react";

type TLabelProps = {
  htmlFor?: string;
  className?: string;
};

const Label: React.FC<PropsWithChildren<TLabelProps>> = ({
  children,
  htmlFor,
  className,
}) => {
  return (
    <label
      className={`mb-2 text-center font-medium text-gray-900 dark:text-white ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
