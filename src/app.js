import React from "react";
import { render } from "react-dom";
import Details from "./Details";
import ClassComponent from "./ClassComponent";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SearchParams from "./SearchParams";
var id = "2";

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
  );
};

render(<App />, document.getElementById("root"));
