import React from "react";
import { render } from "react-dom";
import Pet from "./pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
