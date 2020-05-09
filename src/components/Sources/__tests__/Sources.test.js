import React from "react"
import { render } from "../../../config/tests/helpers"

import Sources from ".."

const renderComponent = ({ ...props } = {}) => render(<Sources {...props} />)

describe("Sources", () => {
  it("renders correctly", () => {
    const sources = renderComponent()
    expect(sources).toMatchSnapshot()
  })
})
