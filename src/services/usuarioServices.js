import api from './api'; // Importa a configuração central do Axios

// Função para buscar todos os usuários
const getUsuarios = async () => {
  try {
    const response = await api.get('/api/usuarios'); // Substitua '/users' pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

// Função para adicionar um novo usuário
const addUsuario = async (usuarioData) => {
  try {
    const response = await api.post('/api/usuarios', usuarioData); // Substitua '/users' pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
    throw error;
  }
};

// Função para atualizar um usuário existente
const updateUsuario = async (id, usuarioData) => {
  try {
    const response = await api.put(`/api/usuarios/${id}`, usuarioData); // Substitua '/users' pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
};

// Função para remover um usuário
const removeUsuario = async (id) => {
  try {
    await api.delete(`/api/usuarios/${id}`); // Substitua '/users' pelo endpoint correto
  } catch (error) {
    console.error('Erro ao remover usuário:', error);
    throw error;
  }
};

const userService = {
  getUsuarios,
  addUsuario,
  updateUsuario,
  removeUsuario,
};

export default userService;