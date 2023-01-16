import React, { ChangeEvent, PropsWithChildren } from "react";

type TInputProps = {
  value: string;
  id: string;
  type?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<PropsWithChildren<TInputProps>> = ({
  children,
  value,
  id,
  type = "text",
  className,
  onChange,
}) => {
  return (
    <input
      className={`mt-1 block w-32 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:w-40 ${className}`}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
