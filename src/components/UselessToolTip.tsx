import React, { PropsWithChildren, useState } from "react";

export const UselessTooltip = ({ children }: PropsWithChildren) => {
  const [showTooltip, setShowToolTip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      {showTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50">
          {/* Tooltip box */}
          <div className="bg-gray-950 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-lg">
            <img
              className="rounded-full"
              src="https://media.tenor.com/7bxA3_vclnMAAAAM/tedead.gif"
              alt="I don't know gif"
            />
          </div>

          {/* Arrow pointing DOWN (because tooltip is above children) */}
          <div className="w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-950 dark:border-t-gray-700 mx-auto" />
        </div>
      )}
      {children}
    </div>
  );
};
