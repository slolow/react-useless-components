type UselessAsciiArtProps = {
  ariaLabel: string;
  asciiArt: string;
};

export const UselessAsciiArt = ({
  ariaLabel,
  asciiArt,
}: UselessAsciiArtProps) => {
  const centeredAsciiArt = asciiArt
    .replace(/\n/, "") // remove first empty line
    .split("\n") // split into lines
    .map((line) => line.trimEnd()) // remove only ending whitespace
    .join("\n"); // join separate lines to complete art again

  return (
    <pre
      aria-label={ariaLabel}
      className={
        "font-mono text-gray-950 dark:text-white text-base/6 whitespace-pre overflow-auto"
      }
    >
      {centeredAsciiArt}
    </pre>
  );
};
