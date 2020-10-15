import React from "react"
import { render } from "../../../config/tests/helpers"

import Footer from "../"

const renderComponent = ({ ...props } = {}) => render(<Footer {...props} />)

describe("Footer", () => {
  it("renders correctly", () => {
    const footer = renderComponent()
    expect(footer).toMatchSnapshot()
  })
})
