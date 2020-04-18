import { useState, useEffect } from "react"
import PlanetExpressCharts from "../services/planet-express-charts"

const useFetchCollections = () => {
  const [loading, setLoading] = useState(true)
  const [collections, setCollections] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true)
        const response = await PlanetExpressCharts.fetchCollections()
        setCollections(response.data)
      } catch (err) {
        setErrors(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCollections()
  }, [])

  return { loading, collections, errors }
}

export default useFetchCollections
