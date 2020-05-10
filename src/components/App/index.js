import React from "react"
import { Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import theme from "../../assets/styles/theme"

import GenericStyles from "../../assets/styles/generic"
import BaseStyles from "../../assets/styles/base"
import TrumpsStyles from "../../assets/styles/trumps"

import Home from "../../pages/Home"
import AboutProject from "../../pages/AboutProject"
import AboutUs from "../../pages/AboutUs"
import Visualization from "../../pages/Visualization"
import NoMatch from "../../pages/NoMatch"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GenericStyles />
      <BaseStyles />
      <TrumpsStyles />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutProject} />
        <Route exact path="/team" component={AboutUs} />
        <Route exact path="/visualization" component={Visualization} />
        <Route component={NoMatch} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
