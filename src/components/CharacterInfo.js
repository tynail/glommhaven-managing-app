import React from "react";
import Grid from "@material-ui/core/Grid";
import characterMats from "../gloomhaven/data/character-mats";
const CharacterInfo = (props) => {
  const character = characterMats.filter((c) => c.name === props.name);

  console.log(character);
  return (
    // <Grid container justify content="center">
    //   <Grid item xs={11} sm={8} lg={4}>
    //     {brute}
    //   </Grid>
    // </Grid>
    <div>
      <h1>{character[0].name}</h1>
      <img src={character[0].image} />
    </div>
  );
};

export default CharacterInfo;
