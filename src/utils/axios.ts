// src/utils/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createPythonApiInstance = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_PYTHON_API_URL || 'http://localhost:5000', 
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default api;
