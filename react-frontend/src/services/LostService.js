/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const LOST_REST_API_URL = "http://localhost:8080/api/itemonroads";

class LostService {
  async getLosts() {
    try {
      const response = await axios.get(LOST_REST_API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching lost items:", error);
      throw error;
    }
  }

  async searchLostItems(searchTerm) {
    try {
      const response = await axios.get(
        `${LOST_REST_API_URL}/name/${searchTerm}`
      );
      return response.data;
    } catch (error) {
      console.error("Error searching lost items:", error);
      throw error;
    }
  }
  async getLostItemsByType(type) {
    try {
      const response = await axios.get(`${LOST_REST_API_URL}/type/${type}`);
      return response.data;
    } catch (error) {
      console.error("Error searching lost items by type:", error);
      throw error;
    }
  }

  async getLostItemsByPlace(placeName) {
    try {
      const response = await axios.get(
        `${LOST_REST_API_URL}/place/${placeName}`
      );
      return response.data;
    } catch (error) {
      console.error("Error searching lost items by place:", error);
      throw error;
    }
  }

  async createLost(lostItem) {
    try {
      const response = await axios.post(LOST_REST_API_URL, lostItem, {
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
export default new LostService();
