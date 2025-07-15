import axios from "axios";

const API_URL = "http://localhost:5000";

const ApiService = {
  getPosts: async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  },

  createPost: async (postData) => {
    const response = await axios.post(`${API_URL}/posts`, postData);
    return response.data;
  },
};

export default ApiService;
