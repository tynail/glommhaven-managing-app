import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateCharacterForm from "./components/CreateCharacterForm";
import Character from "./components/Character";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/character" component={Character}></Route>
      <Route
        exact
        path="/createCharacter"
        render={() => <CreateCharacterForm />}
      ></Route>
    </Switch>
  );
};
export default Routes;
