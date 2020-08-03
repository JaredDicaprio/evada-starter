import React from "react";
import {Route, Switch} from "react-router-dom";
import InBuiltApps from "./inBuiltApps/index";
import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={asyncComponent(() => import('./dashboard'))}/>
      <Route path={`${match.url}tasks`} component={asyncComponent(() => import('./tasks'))}/>
      <Route path={`${match.url}priorities`} component={asyncComponent(() => import('./priorities'))}/>
      <Route path={`${match.url}people`} component={asyncComponent(() => import('./people'))}/>
      <Route path={`${match.url}drive`} component={asyncComponent(() => import('./drive'))}/>
      <Route path={`${match.url}in-built-apps`} component={InBuiltApps}/>
    </Switch>
  </div>
);

export default App;
