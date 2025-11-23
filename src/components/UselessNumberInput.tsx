import { ChangeEvent, useId, useState } from "react";

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

const calcIncrement = (n: number) => n + 1;
const calcDecrement = (n: number) => n - 1;

const buttonClassNames =
  "w-8 h-8 flex text-2xl rounded-md justify-center hover:bg-gray-300 dark:hover:bg-gray-500 disabled:text-gray-300 disabled:dark:text-gray-800 disabled:hover:dark:bg-gray-700 disabled:hover:bg-white";

export const UselessNumberInput = ({
  label,
  min,
  max,
}: UselessNumberInputProps) => {
  const id = useId();
  const [value, setValue] = useState<string>("");
  let labelText;

  const increment = () => {
    const newValue = calcIncrement(Number(value));
    squareRoot = calcSquareRoot(newValue);
    setValue(newValue.toString());
  };
  const decrement = () => {
    const newValue = calcDecrement(Number(value));
    squareRoot = calcSquareRoot(newValue);
    setValue(newValue.toString());
  };

  if (value !== "" && squareRoot !== null) {
    labelText = `🧠The square root of ${value} is ${squareRoot}`;
  } else if (value !== "") {
    labelText = `🦧${value} has no real square root`;
  } else {
    labelText = label;
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (max && calcIncrement(Number(input)) > max) {
      return;
    }
    if (min && calcDecrement(Number(input)) < min) {
      return;
    }
    squareRoot = calcSquareRoot(Number(input));
    return setValue(input);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-full justify-between items-center text-gray-900 dark:text-gray-200 dark:bg-gray-700 border-2 border-gray-900 dark:border-gray-200 rounded-md px-4 py-2">
        <button
          type="button"
          disabled={min ? calcDecrement(Number(value)) < min : false}
          onClick={decrement}
          className={buttonClassNames}
        >
          -
        </button>
        <input
          type="number"
          id={id}
          name="number-input"
          min={min}
          max={max}
          className={
            "flex dark:border-gray-200 rounded-md focus-visible:outline-2 focus-visible:outline-gray-950 dark:focus-visible:outline-gray-200 px-4 py-2 mx-4"
          }
          value={value}
          onChange={handleOnChange}
        />
        <button
          type="button"
          disabled={max ? calcIncrement(Number(value)) > max : false}
          onClick={increment}
          className={buttonClassNames}
        >
          +
        </button>
      </div>
      <label htmlFor={id} className={"text-sm text-gray-500 wrap-break-normal"}>
        {labelText}
      </label>
    </div>
  );
};
