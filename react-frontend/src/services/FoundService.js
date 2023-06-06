import axios from "axios";

const FOUND_REST_API_URL = "http://127.0.0.1:8080/api/itemtofinds";

class FoundService {
  getFounds() {
    return axios.get(FOUND_REST_API_URL);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FoundService();
