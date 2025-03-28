// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // URL base da sua API
  timeout: 10000, // Timeout de 10 segundos
});

// Interceptor para adicionar token JWT automaticamente
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Interceptor para tratamento global de erros
api.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response?.status === 401) {
    // Redirecionar para login se não autorizado
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default api;