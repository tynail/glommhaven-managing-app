import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginRight: theme.spacing(4),
  },
}));

export default function Navbar() {
  let history = useHistory();
  function goBack() {
    history.goBack();
  }
  function goHome() {
    history.push("/");
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={goBack}
          >
            {/* <MenuIcon /> */}
            <ArrowBackIcon />
          </IconButton>
          <NavLink exact to="/character" className={classes.link}>
            View Character
          </NavLink>

          <NavLink exact to="/createCharacter" className={classes.link}>
            Create new character
          </NavLink>
          <Button color="inherit" className={classes.title} onClick={goHome}>
            Gloomhaven Managing App
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
