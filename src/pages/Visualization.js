import React from "react"

import useSearchParams from "../hooks/search-params"

import Layout from "../layouts/Default"
import SearchForm from "../components/SearchForm"

const Visualization = () => {
  const topic = useSearchParams().topic
  const sources = useSearchParams().sources

  return (
    <Layout>
      <SearchForm topic={topic} sources={sources} />
    </Layout>
  )
}

export default Visualization
