import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SearchForm from "../components/SearchForm"

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <SearchForm />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Home
