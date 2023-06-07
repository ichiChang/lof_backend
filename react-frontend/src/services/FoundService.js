import axios from "axios";

const FOUND_REST_API_URL = "http://127.0.0.1:8080/api/itemtofinds";

class FoundService {
  async getFounds() {
    try {
      const response = await axios.get(FOUND_REST_API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching found items:", error);
      throw error;
    }
  }
  async searchFoundItems(searchTerm) {
    try {
      const response = await axios.get(
        `${FOUND_REST_API_URL}/name/${searchTerm}`
      );
      return response.data;
    } catch (error) {
      console.error("Error searching found items:", error);
      throw error;
    }
  }

  async createFound(foundItem) {
    try {
      const response = await axios.post(FOUND_REST_API_URL, foundItem, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating item:", error);
      throw error;
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FoundService();
