import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './index.scss'
import Label from "views/Label";
import Charge from "views/Charge";
import Statistical from "views/Statistical";
import NoMatch from "views/NoMatch";


export default function App() {
  return <Router>
    <div>
      <Switch>
        <Route path="/label">
          <Label/>
        </Route>
        <Route path="/charge">
          <Charge/>
        </Route>
        <Route path="/statistical">
          <Statistical/>
        </Route>
        <Redirect exact to="/charge" />
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </div>
  </Router>;
}






