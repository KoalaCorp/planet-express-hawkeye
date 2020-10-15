import axios from "axios"
// eslint-disable-next-line import/no-unresolved
import Config from "Config"

class PlanetExpressAbe {
  static fetchSources() {
    return axios.get(`${Config.services.planetExpressAbe.path}/api/sources`, {
      timeout: Config.services.planetExpressAbe.timeout,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  static fetchTopics(collection, query) {
    return axios.get(
      `${Config.services.planetExpressAbe.path}/api/collections/${collection}/${query}`,
      {
        timeout: Config.services.planetExpressAbe.timeout,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
}

export default PlanetExpressAbe
