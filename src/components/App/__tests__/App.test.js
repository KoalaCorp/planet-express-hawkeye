import React from "react"
import { render } from "@testing-library/react"

import App from "../"

const renderComponent = ({ ...props } = {}) => render(<App {...props} />)

describe("Application", () => {
  it("renders correctly", () => {
    const app = renderComponent()
    expect(app).toMatchSnapshot()
  })
})
