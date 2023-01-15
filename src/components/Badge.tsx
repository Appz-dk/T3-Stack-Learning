import React from "react";

// Dynamicly create typescript enum Type from array
const VARIANTS = ["danger", "success", "warning", "primary"] as const;
export type Variant = (typeof VARIANTS)[number];

const Badge: React.FC<{ text: string; variant: Variant }> = ({
  text,
  variant,
}) => {
  const badgeStyles = {
    danger: "text-red-800 bg-red-100",
    success: "text-green-800 bg-green-100",
    warning: "text-yellow-800 bg-yellow-100",
    primary: "text-blue-800 bg-blue-100",
  };

  return (
    <span
      className={
        "ml-2 rounded px-2.5 py-0.5 text-xs font-bold " +
        `${badgeStyles[variant] || badgeStyles.primary}`
      }
    >
      {text}
    </span>
  );
};

export default Badge;
