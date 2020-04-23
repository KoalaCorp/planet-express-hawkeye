import axios from "axios"
// eslint-disable-next-line import/no-unresolved
import Config from "Config"

class PlanetExpressCharts {
  static fetchSources() {
    return axios.get(
      `${Config.services.planetExpressCharts.path}/api/sources`,
      {
        timeout: Config.services.planetExpressCharts.timeout,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }

  static fetchTopics(collection, query) {
    return axios.get(
      `${Config.services.planetExpressCharts.path}/api/collections/${collection}/${query}`,
      {
        timeout: Config.services.planetExpressCharts.timeout,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
}

export default PlanetExpressCharts
