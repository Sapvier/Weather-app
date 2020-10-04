import React from "react"
import "materialize-css"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import DetailedPage from "./pages/DetailedPage"
import HomePage from "./pages/HomePage"

function App() {
      return (
          <BrowserRouter>
            <div className="container">
              <Switch>
                <Route component={HomePage} path="/" exact/>
                <Route component={DetailedPage} path="/detailed" exact/>
              </Switch>
            </div>
          </BrowserRouter>
      );
}

export default App;
