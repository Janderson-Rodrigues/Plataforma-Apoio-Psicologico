import axios from 'axios';

// Configuração base do Axios
const api = axios.create({
  baseURL: 'http://localhost:5000/api/', // Altere para sua URL base
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}` // Para autenticação
  }
});

// Interceptor para tratamento global de erros
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Erros 4xx/5xx
      console.error('Erro na resposta:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
    } else if (error.request) {
      // Sem resposta do servidor
      console.error('Sem resposta do servidor:', error.request);
    } else {
      // Erros na configuração
      console.error('Erro na requisição:', error.message);
    }
    
    return Promise.reject(error);
  }
);

const ProfessionalService = {
  /**
   * Cria um novo profissional
   * @param {Object} professionalData - Dados do profissional
   * @returns {Promise} Promise com a resposta
   */
  async create(professionalData) {
    try {
      const response = await api.post('/profissionais', professionalData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar profissional:', error);
      throw new Error(error.response?.data?.message || 'Erro ao cadastrar profissional');
    }
  },

  /**
   * Busca todos os profissionais
   * @param {Object} filters - Filtros de busca (opcional)
   * @returns {Promise} Promise com a lista de profissionais
   */
  async getAll(filters = {}) {
    try {
      const response = await api.get('/profissionais', { params: filters });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar profissionais:', error);
      throw new Error(error.response?.data?.message || 'Erro ao buscar profissionais');
    }
  },

  /**
   * Busca um profissional por ID
   * @param {String|Number} id - ID do profissional
   * @returns {Promise} Promise com os dados do profissional
   */
  async getById(id) {
    try {
      const response = await api.get(`/profissionais/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar profissional:', error);
      throw new Error(error.response?.data?.message || 'Profissional não encontrado');
    }
  },

  /**
   * Atualiza um profissional
   * @param {String|Number} id - ID do profissional
   * @param {Object} updateData - Dados para atualização
   * @returns {Promise} Promise com a resposta
   */
  async update(id, updateData) {
    try {
      const response = await api.put(`/profissionais/${id}`, updateData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar profissional:', error);
      throw new Error(error.response?.data?.message || 'Erro ao atualizar profissional');
    }
  },

  /**
   * Remove um profissional
   * @param {String|Number} id - ID do profissional
   * @returns {Promise} Promise com a resposta
   */
  async delete(id) {
    try {
      const response = await api.delete(`/profissionais/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao remover profissional:', error);
      throw new Error(error.response?.data?.message || 'Erro ao remover profissional');
    }
  },
  
  /**
   * Busca profissionais por especialidade
   * @param {String} specialty - Especialidade para filtrar
   * @returns {Promise} Promise com a lista filtrada
   */
  async getBySpecialty(specialty) {
    try {
      const response = await api.get('/profissionais', {
        params: { especialidade: specialty }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao filtrar por especialidade:', error);
      throw new Error(error.response?.data?.message || 'Erro ao filtrar profissionais');
    }
  }
};

export default ProfessionalService;