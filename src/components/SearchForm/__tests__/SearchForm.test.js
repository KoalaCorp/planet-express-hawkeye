import React from "react"
import { render } from "@testing-library/react"

import SearchForm from "../"

const renderComponent = ({ ...props } = {}) => render(<SearchForm {...props} />)

describe("SearchForm", () => {
  it("renders correctly", () => {
    const searchForm = renderComponent()
    expect(searchForm).toMatchSnapshot()
  })
})
