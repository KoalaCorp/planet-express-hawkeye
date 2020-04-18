import React from "react"

import useFetchCollections from "../../hooks/fetch-collections"

const Collections = () => {
  const { loading, collections } = useFetchCollections()

  return (
    <div className="Collections">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        collections.map((collection, index) => {
          return <p key={index}>{collection}</p>
        })
      )}
    </div>
  )
}

export default Collections
