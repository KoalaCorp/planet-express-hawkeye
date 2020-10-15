import { useState, useEffect } from "react"
import PlanetExpressAbe from "../services/planet-express-abe"

const useFetchSources = () => {
  const [loadingSources, setLoadingSources] = useState(true)
  const [sources, setSources] = useState([])
  const [errorsFetchSources, setErrorsFetchSources] = useState("")

  useEffect(() => {
    const fetchSources = async () => {
      try {
        setLoadingSources(true)
        const response = await PlanetExpressAbe.fetchSources()
        setSources(response.data.data)
      } catch (err) {
        setErrorsFetchSources(err.toString())
      } finally {
        setLoadingSources(false)
      }
    }

    fetchSources()
  }, [])

  return { loadingSources, sources, errorsFetchSources }
}

export default useFetchSources
