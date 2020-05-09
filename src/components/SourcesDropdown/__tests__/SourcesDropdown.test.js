import React from "react"
import { render } from "../../../config/tests/helpers"

import SourcesDropdown from "../"

const renderComponent = ({ ...props } = {}) =>
  render(<SourcesDropdown {...props} />)

describe("SourcesDropdown", () => {
  it("renders correctly", () => {
    const dropdown = renderComponent()
    expect(dropdown).toMatchSnapshot()
  })
})
