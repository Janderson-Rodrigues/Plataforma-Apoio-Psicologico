// src/services/usuarioService.js
import api from './api';

const UsuarioService = {
  async listar() {
    try {
      const response = await api.get('/usuarios');
      return response.data;
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
      throw error;
    }
  },

  async criar(usuario) {
    try {
      const response = await api.post('/usuarios', usuario);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw error;
    }
  },

  async login(credenciais) {
    try {
      const response = await api.post('/login', credenciais);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  }
};

export default UsuarioService;