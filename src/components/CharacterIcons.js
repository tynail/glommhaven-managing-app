import React from "react";
import bruteIcon from "../gloomhaven/images/gloom/brute.png";
import scoundrelIcon from "../gloomhaven/images/gloom/scoundrel.png";
import cragheartIcon from "../gloomhaven/images/gloom/cragheart.png";
import spellweaverIcon from "../gloomhaven/images/gloom/spellweaver.png";
import mindthiefIcon from "../gloomhaven/images/gloom/mindthief.png";
import tinkererIcon from "../gloomhaven/images/gloom/tinkerer.png";
const CharacterIcons = () => {
  const iconArray = [
    bruteIcon,
    spellweaverIcon,
    scoundrelIcon,
    mindthiefIcon,
    cragheartIcon,
    tinkererIcon,
  ];
  return iconArray.map((icon, i) => <img src={icon} alt={`${icon} icon`} />);
};

export default CharacterIcons;
