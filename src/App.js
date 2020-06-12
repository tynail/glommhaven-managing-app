import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CharacterInfo from "./components/CharacterInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CharacterInfo name="brute" />
    </div>
  );
}

export default App;
