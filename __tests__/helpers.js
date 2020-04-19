import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"

const renderWithRouter = (component) => render(<Router>{component}</Router>)

export { renderWithRouter as render }
