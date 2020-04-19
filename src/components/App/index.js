import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "../../pages/Home"
import AboutProject from "../../pages/AboutProject"
import AboutUs from "../../pages/AboutUs"
import NoMatch from "../../pages/NoMatch"

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutProject} />
        <Route exact path="/team" component={AboutUs} />
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  )
}

export default App
