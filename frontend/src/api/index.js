// frontend/src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const login = async username => {
  try {
    const response = await api.post('/launchpay', { username });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
