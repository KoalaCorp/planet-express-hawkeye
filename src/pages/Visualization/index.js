import React from "react"

import useSearchParams from "../../hooks/search-params"

import Styled from "./styled"
import Graphic from "../../components/Graphic"
import Toolbar from "../../components/Toolbar"
import SearchForm from "../../components/SearchForm"

const Visualization = () => {
  const topic = useSearchParams().topic
  const sources = useSearchParams().sources

  const handleToolbarTogglerClick = (e) => {
    e.preventDefault()

    document.querySelector(".toolbar").classList.toggle("toolbar--newsEllapsed")
  }

  return (
    <Styled.Layout hiddenHeader hiddenFooter>
      <Graphic />
      <Toolbar className="toolbar">
        <SearchForm topic={topic} sources={sources} />

        <aside className="toolbar__news">
          <button
            className="toolbar__toggler"
            onClick={handleToolbarTogglerClick}
          >
            no topics displayed
          </button>

          <div className="toolbar__topics"></div>
          <div className="toolbar__news__filters">Filters</div>
        </aside>
      </Toolbar>
    </Styled.Layout>
  )
}

export default Visualization
