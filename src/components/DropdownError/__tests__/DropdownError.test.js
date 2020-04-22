import React from "react"
import { render } from "../../../../tests/helpers"

import DropdownError from "../"

const renderComponent = ({ ...props } = {}) =>
  render(<DropdownError {...props} />)

describe("DropdownError", () => {
  it("renders correctly", () => {
    const error = renderComponent()
    expect(error).toMatchSnapshot()
  })
})
