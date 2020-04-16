import axios from "axios"

const fetchCollections = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/collections/`, {
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default fetchCollections
