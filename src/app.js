import React from "react";
import { render } from "react-dom";
import Details from "./Details";
import ClassComponent from "./ClassComponent";
import ThemeContext from "./ThemeContext";
import { useState, useEffect, useContext } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SearchParams from "./SearchParams";
var id = "2";

const App = () => {
  const theme = useState("pink");

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vocabulary">Vocabulary</Link>
            </li>
            <li>
              <Link to={`/clscomponent/${id}`}>Class component exemple</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={SearchParams} />
            <Route exact path="/vocabulary" component={Details} />
            <Route exact path="/clsComponent/:id" component={ClassComponent} />
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
