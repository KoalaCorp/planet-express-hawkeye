import React from "react"
import { render } from "../../../config/tests/helpers"

import Header from "../"

const renderComponent = ({ ...props } = {}) => render(<Header {...props} />)

describe("Header", () => {
  it("renders correctly", () => {
    const header = renderComponent()
    expect(header).toMatchSnapshot()
  })
})
