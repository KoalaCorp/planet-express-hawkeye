import React from "react"
import { render } from "../../../../tests/helpers"

import Collections from "../"

const renderComponent = ({ ...props } = {}) =>
  render(<Collections {...props} />)

describe("Collections", () => {
  it("renders correctly", () => {
    const collections = renderComponent()
    expect(collections).toMatchSnapshot()
  })
})
