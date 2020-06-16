import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Character from "./components/Character";
import { useRoute } from "hookrouter";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Character />
    </div>
  );
}

export default App;
