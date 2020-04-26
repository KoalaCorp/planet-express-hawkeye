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
        <SearchForm topicSearchParam={topic} sourcesSearchParam={sources} />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Visualization
