import React from "react";

export interface ButtonProps {
  /** Is this the primary button? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "sm" | "base" | "lg";
  /** Button text */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({
  primary = true,
  backgroundColor,
  size = "base",
  label,
  onClick,
  ...props
}: ButtonProps) => {
  const className = primary
    ? `inline-flex justify-center rounded-full text-${size} font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-gray-950 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:hover:bg-gray-200 dark:focus-visible:outline-white px-4 py-2`
    : `inline-flex justify-center rounded-full text-${size} font-semibold ring-1 text-gray-950 ring-gray-950/10 hover:ring-gray-950/20 dark:text-white dark:ring-white/10 dark:hover:ring-white/20 px-4 py-2`;

  return (
    <button
      type="button"
      className={className}
      style={{ backgroundColor }}
      {...props}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
