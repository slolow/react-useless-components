type UselessAsciiArtProps = {
  ariaLabel: string;
  asciiArt: string;
  animation?: "flicker" | "blink";
};

export const UselessAsciiArt = ({
  ariaLabel,
  asciiArt,
  animation,
}: UselessAsciiArtProps) => {
  const centeredAsciiArt = asciiArt
    .replace(/\n/, "") // remove first empty line
    .split("\n") // split into lines
    .map((line) => line.trimEnd()) // remove only ending whitespace
    .join("\n"); // join separate lines to complete art again

  return (
    <pre
      aria-label={ariaLabel}
      className={`${animation} font-mono text-gray-950 dark:text-white text-base/6 whitespace-pre overflow-auto`}
    >
      {centeredAsciiArt}
    </pre>
  );
};
