import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/anamneses'; // Ajuste para sua URL de API

const anamneseService = {
  // Listar todas as anamneses
  async getAll() {
    try {
      const response = await axios.get(`${API_BASE_URL}/`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar anamneses:', error);
      throw error;
    }
  },

  // Buscar anamnese por ID
  async getById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar anamnese com ID ${id}:`, error);
      throw error;
    }
  },

  // Criar nova anamnese
  async create(anamneseData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/`, anamneseData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar anamnese:', error);
      throw error;
    }
  },

  // Atualizar anamnese existente
  async update(id, anamneseData) {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, anamneseData);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar anamnese com ID ${id}:`, error);
      throw error;
    }
  },

  // Deletar anamnese
  async delete(id) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao deletar anamnese com ID ${id}:`, error);
      throw error;
    }
  },

  // Buscar anamneses por paciente
  async getByPaciente(id_paciente) {
    try {
      const response = await axios.get(`${API_BASE_URL}/paciente/${id_paciente}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar anamneses do paciente ${id_paciente}:`, error);
      throw error;
    }
  }
};

export default anamneseService;