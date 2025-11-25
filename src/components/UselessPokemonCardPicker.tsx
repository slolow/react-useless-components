import cardBack from "../assets/pokemon_card_backside.png";
import charizad from "../assets/charizard.jpg";
import mewtwo from "../assets/mewtwo.jpg";
import pidgey from "../assets/pidgey.jpg";
import { useState } from "react";
import { Button } from "./intern/Button";

const pokemons = [charizad, mewtwo, pidgey];

/*TODO: Add confetti animation after draw like this: https://medium.com/@aleksej.gudkov/how-to-create-a-confetti-css-animation-a-step-by-step-guide-4ef79bf5ce2e*/

export const UselessPokemonCardPicker = () => {
  const [card, setCard] = useState(cardBack);

  const handlePick = () => {
    if (card === cardBack) {
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      setCard(pokemons[randomIndex]);
    }
  };

  const handleRetry = () => {
    setCard(cardBack);
  };

  return (
    <div className={"flex flex-col gap-2"}>
      <button onClick={handlePick}>
        <img
          src={card}
          alt="a pokemon card"
          className={"w-64 h-88 rounded-xl"}
        />
      </button>
      {card !== cardBack && <Button label={"retry"} onClick={handleRetry} />}
    </div>
  );
};
