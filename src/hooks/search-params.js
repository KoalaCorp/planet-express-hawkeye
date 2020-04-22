import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const useSearchParams = () => {
  const location = useLocation()

  const [topic, setTopic] = useState("")
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const search = new URLSearchParams(location.search)

    setTopic(search.get("topic") || "")
    setCollections(search.getAll("collections"))
  }, [location.search])

  return { topic, collections }
}

export default useSearchParams
