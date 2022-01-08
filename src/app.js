import React from "react";
import { render } from "react-dom";
import Details from "./Details";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vocabulary">Vocabulary</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={SearchParams} />
          <Route exact path="/vocabulary" component={Details} />
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
