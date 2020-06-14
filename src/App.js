import React from "react";
import "./App.css";
import Home from "./pages/home";
import News from "./pages/news";
import Preventions from "./pages/preventions";
import logo from "./Images/logo.jpg";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-md navbar-white shadow-sm bg-white">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div className="navbar-nav ml-auto">
            <li>
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" className="nav-item nav-link">
                News
              </Link>
            </li>
            <li>
              <Link to="/preventions" className="nav-item nav-link">
                Preventions
              </Link>
            </li>
          </div>
        </nav>

        <Switch>
          <Route path="/preventions">
            <Preventions />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
