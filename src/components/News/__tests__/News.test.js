import React from "react"
import { render } from "@testing-library/react"

import News from "../"

const renderComponent = ({ ...props } = {}) => render(<News {...props} />)

describe("News", () => {
  it("renders correctly", () => {
    const news = renderComponent()
    expect(news).toMatchSnapshot()
  })
})
