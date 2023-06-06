import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

class UserService {
  getUsers() {
    const url = `${BASE_URL}/users`;
    return axios.get(url);
  }

  getUserById(id) {
    const url = `${BASE_URL}/users/${id}`;
    return axios.get(url);
  }

  createUser(user) {
    const url = `${BASE_URL}/users`;
    return axios.post(url, user);
  }

  updateUser(id, user) {
    const url = `${BASE_URL}/users/${id}`;
    return axios.put(url, user);
  }

  deleteUser(id) {
    const url = `${BASE_URL}/users/${id}`;
    return axios.delete(url);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
