import React, {useState} from 'react';

import './useless-button.css';

export interface UselessButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const UselessButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: UselessButtonProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={{ backgroundColor }}
        {...props}
        onClick={() => {
          setShowAlert(true)
        }}
      >
        {label}
      </button>

      {showAlert && (
        <div
        >
          <div>
            <img
              src="https://media1.tenor.com/m/CoCVqmEdSdQAAAAC/family-guy-peter-griffin.gif"
              alt="no chance gif"
              style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                margin: '0 auto 1rem',
              }}
            />
            <p>You want me to do "${props.onClick?.toString()}" ? Not gonna happen.</p>
            <button
              className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
              onClick={() => setShowAlert(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
