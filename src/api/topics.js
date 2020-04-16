import axios from "axios"

const fetchTopics = async (collection, query) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/collections/${collection}/${query}`,
      {
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default fetchTopics
