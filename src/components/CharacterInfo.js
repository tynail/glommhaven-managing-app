import React from "react";
import Grid from "@material-ui/core/Grid";
import characterMats from "../gloomhaven/data/character-mats";
import Typography from "@material-ui/core/Typography";

const CharacterInfo = (props) => {
  const {
    name,
    level,
    classe,
    xp,
    hp,
    gold,
    items,
    perks,
    cards,
  } = props.characterData;
  const characterMatsArray = characterMats.filter((c) => c.name === classe);
  const character = characterMatsArray[0];
  // Dynamically display the image according to the props
  const imageSource = require(`../gloomhaven/images/${character.image}`);
  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={8} lg={4}>
        <h1>Name: {name}</h1>
        <img src={imageSource} />
        <Typography variant="h3">Level: {level}</Typography>
        <Typography variant="h3">XP: {xp}</Typography>
        <Typography variant="h3">HP: {hp}</Typography>
        <Typography variant="h3">Gold:{gold}</Typography>
      </Grid>
    </Grid>
  );
};

export default CharacterInfo;
