
import api from './api';

const usuarioService = {
  async listar() {
    try {
      const response = await api.get('/usuarios');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async buscarPorId(id) {
    try {
      const response = await api.get(`/usuarios/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async criar(usuario) {
    try {
      const response = await api.post('/usuarios', usuario);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async atualizar(id, dados) {
    try {
      const response = await api.put(`/usuarios/${id}`, dados);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  async remover(id) {
    try {
      const response = await api.delete(`/usuarios/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  },

  handleError(error) {
    if (error.response) {
      // Erros mapeados do backend
      const messages = {
        400: 'Dados inválidos',
        401: 'Não autorizado',
        404: 'Usuário não encontrado',
        500: 'Erro no servidor'
      };
      
      const message = error.response.data?.message || 
                     messages[error.response.status] || 
                     'Erro desconhecido';
      
      return new Error(message);
    }
    return new Error('Erro de conexão com o servidor');
  }
};

export default usuarioService;