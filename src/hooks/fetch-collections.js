import { useState, useEffect } from "react"
import PlanetExpressCharts from "../services/planet-express-charts"

const useFetchCollections = () => {
  const [loadingCollections, setLoadingCollections] = useState(true)
  const [collections, setCollections] = useState([])
  const [errorsFetchCollections, setErrorsFetchCollections] = useState("")

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoadingCollections(true)
        const response = await PlanetExpressCharts.fetchCollections()
        setCollections(response.data)
      } catch (err) {
        setErrorsFetchCollections(err.toString())
      } finally {
        setLoadingCollections(false)
      }
    }

    fetchCollections()
  }, [])

  return { loadingCollections, collections, errorsFetchCollections }
}

export default useFetchCollections
