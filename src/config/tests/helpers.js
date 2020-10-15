import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import theme from "../../assets/styles/theme"
import { ThemeProvider } from "styled-components"

const renderFull = (component) =>
  render(
    <Router>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </Router>
  )

export { renderFull as render }
