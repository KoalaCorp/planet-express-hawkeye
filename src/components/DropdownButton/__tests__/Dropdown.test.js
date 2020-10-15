import React from "react"
import { render } from "../../../config/tests/helpers"

import DropdownButton from "../"

const renderComponent = ({ ...props } = {}) =>
  render(<DropdownButton {...props} />)

describe("DropdownButton", () => {
  it("renders correctly", () => {
    const button = renderComponent()
    expect(button).toMatchSnapshot()
  })
})
