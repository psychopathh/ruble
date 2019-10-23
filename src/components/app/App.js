import React, { Fragment } from "react";
import "./App.sass";
import Authorization from "../authorization";
import Normalize from "react-normalize";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "../loading";

function App() {
  return (
    <Fragment>
      <Normalize />
      <div className="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/loading" component={Loading} />
            <Route path="/" component={Authorization} />
          </Switch>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
