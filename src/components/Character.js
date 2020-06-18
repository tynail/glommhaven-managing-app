import React from "react";
import CharacterInfo from "./CharacterInfo";

const characterMock = {
  name: "Bob",
  level: 1,
  xp: 13,
  gold: 30,
  hp: 10,
  items: [], // eventually match string with photo
  perks: [], // eventually match string with photo
  cards: [], // eventually match string with photo
  classe: "brute",
  personalQuest: "", // eventually match string with photo
};

const Character = () => {
  return (
    <div>
      <CharacterInfo characterData={characterMock} />
    </div>
  );
};

export default Character;
