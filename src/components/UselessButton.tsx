import React, { useState } from "react";
import { Button } from "./intern/Button";

export interface UselessButtonProps {
  /** Is this the primary button? Default true */
  primary?: boolean;
  /** Optional change the background color*/
  backgroundColor?: string;
  /** How large should the button be? Default md */
  size?: "sm" | "base" | "lg";
  /** Button text */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const UselessButton = ({
  primary,
  size,
  backgroundColor,
  label,
  onClick,
  ...props
}: UselessButtonProps) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="space-y-2 text-center">
        <Button
          label={label}
          primary={primary}
          size={size}
          backgroundColor={backgroundColor}
          {...props}
          onClick={() => {
            setShowAlert(true);
          }}
        />
      </div>

      {onClick && showAlert && (
        <div className="space-y-2 text-center">
          <p className="font-mono font-medium text-gray-500">
            You want me to do "${onClick?.toString()}" ?
          </p>
          <img
            className="mx-auto block h-36 rounded-full"
            src="https://media1.tenor.com/m/CoCVqmEdSdQAAAAC/family-guy-peter-griffin.gif"
            alt="no chance gif"
          />
          <Button
            primary={primary}
            size={size}
            label={"Close"}
            onClick={() => setShowAlert(false)}
          />
        </div>
      )}
    </div>
  );
};
