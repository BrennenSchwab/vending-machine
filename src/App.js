import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Donut from "./Donut";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda" >
          <Soda />
        </Route>
        <Route exact path="/chips" >
          <Chips />
        </Route>
        <Route exact path="/donut">
          <Donut />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
