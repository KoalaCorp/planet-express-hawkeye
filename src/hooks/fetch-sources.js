import { useState, useEffect } from "react"
import PlanetExpressCharts from "../services/planet-express-charts"

const useFetchSources = () => {
  const [loadingSources, setLoadingSources] = useState(true)
  const [sources, setSources] = useState([])
  const [errorsFetchSources, setErrorsFetchSources] = useState("")

  useEffect(() => {
    const fetchSources = async () => {
      try {
        setLoadingSources(true)
        const response = await PlanetExpressCharts.fetchSources()
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
