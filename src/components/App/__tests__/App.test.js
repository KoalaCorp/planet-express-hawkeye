import React from "react"
import { render } from "../../../../__tests__/helpers"

import App from "../"

const renderComponent = ({ ...props } = {}) => render(<App {...props} />)

describe("Application", () => {
  it("renders correctly", () => {
    const app = renderComponent()
    expect(app).toMatchSnapshot()
  })
})
