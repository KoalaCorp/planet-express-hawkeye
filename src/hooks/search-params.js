import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const useSearchParams = () => {
  const location = useLocation()

  const [topic, setTopic] = useState("")
  const [sources, setSources] = useState([])

  useEffect(() => {
    const search = new URLSearchParams(location.search)

    setTopic(search.get("topic"))
    setSources(search.getAll("sources"))
  }, [location.search])

  return { topic, sources }
}

export default useSearchParams
