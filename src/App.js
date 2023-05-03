import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import ChildList from "./components/ChildList";


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/testtable" className="navbar-brand">
          DAOFEB
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/testtable"} className="nav-link">
              DAOFEB table
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/testtable"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/testtable/:id" component={ChildList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
