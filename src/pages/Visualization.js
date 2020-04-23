import React from "react"

import useSearchParams from "../hooks/search-params"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SearchForm from "../components/SearchForm"

const Visualization = () => {
  const topic = useSearchParams().topic
  const sources = useSearchParams().sources

  return (
    <React.Fragment>
      <Header />
      <main>
        <div>
          <SearchForm topicSearchParam={topic} sourcesSearchParam={sources} />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Visualization
