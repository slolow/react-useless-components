import React, { useState } from "react";

export interface UselessButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "sm" | "md" | "lg";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const UselessButton = ({
  primary = false,
  size = "md",
  backgroundColor,
  label,
  ...props
}: UselessButtonProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const className = primary
    ? `inline-flex justify-center rounded-full text-${size}/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-gray-950 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:hover:bg-gray-200 dark:focus-visible:outline-white dark:focus-visible:outline-white px-4 py-2`
    : `inline-flex justify-center rounded-full text-${size}/6 font-semibold ring-1 text-gray-950 ring-gray-950/10 hover:ring-gray-950/20 dark:text-white dark:ring-white/10 dark:hover:ring-white/20 px-4 py-2`;

  return (
    <div className="flex flex-col gap-2 p-8">
      <div className="space-y-2 text-center">
        <button
          type="button"
          className={className}
          style={{ backgroundColor }}
          {...props}
          onClick={() => {
            setShowAlert(true);
          }}
        >
          {label}
        </button>
      </div>

      {showAlert && (
        <div className="space-y-2 text-center">
          <p className="font-mono font-medium text-gray-500">
            You want me to do "${props.onClick?.toString()}" ?
          </p>
          <img
            className="mx-auto block h-36 rounded-full"
            src="https://media1.tenor.com/m/CoCVqmEdSdQAAAAC/family-guy-peter-griffin.gif"
            alt="no chance gif"
          />
          <button className={className} onClick={() => setShowAlert(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};
