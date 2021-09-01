import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "deck-ui/Login.js";
import Signup from "deck-ui/Signup";

import Amplify, { Auth, API, Storage } from "aws-amplify";
import awsConfig from "./aws-exports";
import AboutUs from "deck-ui/AboutUs";
Amplify.configure(awsConfig);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}