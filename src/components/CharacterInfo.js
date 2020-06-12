import React from "react";
import Grid from "@material-ui/core/Grid";
import characterMats from "../gloomhaven/data/character-mats";
import image from "../gloomhaven/images/character-mats/brute.png";
const CharacterInfo = (props) => {
  const characterArray = characterMats.filter((c) => c.name === props.name);
  const character = characterArray[0];
  // Dynamically display the image according to the props
  const imageSource = require(`../gloomhaven/images/${character.image}`);
  console.log(character);
  return (
    // <Grid container justify content="center">
    //   <Grid item xs={11} sm={8} lg={4}>
    //     {brute}
    //   </Grid>
    // </Grid>
    <div>
      <h1>{character.name}</h1>
      <img src={imageSource} />
    </div>
  );
};

export default CharacterInfo;
