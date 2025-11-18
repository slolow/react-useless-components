import { useId, useState } from "react";

type UselessNumberInputProps = {
  label: string;
  min?: number;
  max?: number;
};

const calcSquareRoot = (n: number) => {
  if (n < 0) return null; // negative numbers have no real square root
  return Math.round(Math.sqrt(n) * 1000) / 1000;
};

let squareRoot: number | null;

export const UselessNumberInput = ({
  label,
  min,
  max,
}: UselessNumberInputProps) => {
  const id = useId();
  const [value, setValue] = useState<number | null>(null);
  let labelText;

  if (value && squareRoot) {
    labelText = `🧠The square root of ${value} is ${squareRoot}`;
  } else if (value) {
    labelText = `🦧${value} has no real square root`;
  } else {
    labelText = label;
  }

  return (
    <div className="flex flex-col gap-1">
      <input
        type="number"
        id={id}
        name="number-input"
        min={min}
        max={max}
        className={
          "text-gray-900 dark:text-gray-200 dark:bg-gray-700 border-2 border-gray-900 dark:border-gray-200 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 dark:focus-visible:outline-gray-200 px-4 py-2"
        }
        onChange={(e) => {
          const numberInput = Number(e.target.value);
          squareRoot = calcSquareRoot(numberInput);
          return setValue(numberInput);
        }}
      />
      <label htmlFor={id} className={"text-sm text-gray-500 wrap-break-normal"}>
        {labelText}
      </label>
    </div>
  );
};
