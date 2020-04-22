import React from "react"
import { render } from "../../../../tests/helpers"

import CollectionsDropdown from "../"

const renderComponent = ({ ...props } = {}) =>
  render(<CollectionsDropdown {...props} />)

describe("CollectionsDropdown", () => {
  it("renders correctly", () => {
    const dropdown = renderComponent()
    expect(dropdown).toMatchSnapshot()
  })
})
