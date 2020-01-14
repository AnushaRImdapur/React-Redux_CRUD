import React from "react";
import DisplayUser from "./component/DisplayUser";
import Comment from "./component/Comment";
import Login from "./component/Login";
import Home from "./component/Home";

import Pagination from "./component/Pagination"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/home">displayUser</Link>
            </li> */}
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/displayUser">
            <DisplayUser />
          </Route>
          <Route path="/comment/:id" component = {Comment}>
          </Route>
          <Route path="/pagination">
            <Pagination />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}



