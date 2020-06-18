import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "../hooks/useInputState";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rroot: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
    display: "block",
  },
}));

const CreateCharacterForm = () => {
  const classes = useStyles();
  const [name, setName] = useInputState("");
  const [level, setLevel] = useInputState("");
  const [gold, setGold] = useInputState("");
  const [personalQuest, setPersonalQuest] = useInputState("");
  return (
    <form className={classes.root} autoComplete="off">
      <div>
        <TextField
          id="name"
          className={classes.textField}
          margin="normal"
          required
          variant="outlined"
          label="Name"
          value={name}
          onChange={setName}
          fullWidth
        />
        <TextField
          id="level"
          className={classes.textField}
          margin="normal"
          required
          variant="outlined"
          label="level"
          value={level}
          onChange={setLevel}
          fullWidth
        />
        <TextField
          id="gold"
          className={classes.textField}
          margin="normal"
          required
          variant="outlined"
          label="Gold"
          value={gold}
          onChange={setGold}
          fullWidth
        />
        <TextField
          id="personalQuest"
          className={classes.textField}
          margin="normal"
          required
          variant="outlined"
          label="Personal Quest"
          value={personalQuest}
          onChange={setPersonalQuest}
          fullWidth
        />
      </div>
    </form>
  );
};

export default CreateCharacterForm;
