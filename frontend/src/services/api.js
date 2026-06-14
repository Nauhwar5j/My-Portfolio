import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProjects = async (tech = '') => {
  const url = tech ? `/projects?tech=${encodeURIComponent(tech)}` : '/projects';
  const response = await api.get(url);
  return response.data;
};

export const getCertifications = async () => {
  const response = await api.get('/certifications');
  return response.data;
};

export const submitContactForm = async (contactData) => {
  const response = await api.post('/contact', contactData);
  return response.data;
};

export default api;
