import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormaOrganica from '../assets/formaOrganica.png';

const Cadastro = () => {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.senha) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (formData.senha.length < 6) {
      newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
    }
    
    if (!tipoUsuario) {
      newErrors.tipoUsuario = 'Selecione um tipo de usuário';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (tipoUsuario === 'profissional') {
        navigate('/CadastroProfissional');
      } else if (tipoUsuario === 'paciente') {
        navigate('/CadastroPaciente');
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
      {/* Lado Esquerdo - Formulário */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
            Se junte a nós!
          </h1>
          
          <form onSubmit={handleSubmit} className="w-full mb-6">
            <div className="mb-4">
              <label className="block font-semibold mb-2 text-gray-700">Nome:</label>
              <input 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.nome ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#5F6FFF] bg-white`} 
                type="text" 
                placeholder="Seu nome completo"
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block font-semibold mb-2 text-gray-700">Email:</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#5F6FFF] bg-white`} 
                type="email" 
                placeholder="seu@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className="mb-6">
              <label className="block font-semibold mb-2 text-gray-700">Senha:</label>
              <input 
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.senha ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#5F6FFF] bg-white`} 
                type="password" 
                placeholder="Crie uma senha"
              />
              {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha}</p>}
            </div>
            
            {tipoUsuario && (
              <p className="mb-4 text-center font-medium text-gray-600">
                Cadastrando como: {tipoUsuario === 'profissional' ? 'Profissional' : 'Paciente'}
              </p>
            )}
            {errors.tipoUsuario && <p className="text-red-500 text-sm mt-1 mb-4 text-center">{errors.tipoUsuario}</p>}
            
            <button 
              type="submit"
              className="w-full bg-[#5F6FFF] text-white py-3 rounded-lg font-bold hover:bg-[#4A5BFF] transition-colors mb-4"
            >
              Vamos lá!
            </button>

            <div className="text-center">
              <Link to="/Login" className="text-[#5F6FFF] hover:underline">
                Já tem uma conta? Faça login
              </Link>
            </div>
          </form>
          
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500">ou</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors bg-white">
              <span className="text-gray-700">Entrar com Google</span>
            </button>
            <button className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors bg-white">
              <span className="text-gray-700">Entrar com Apple</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Lado Direito - Seleção de Tipo */}
      <div 
        className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 min-h-[50vh] lg:min-h-screen relative"
        style={{ backgroundImage: `url(${FormaOrganica})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative z-10 w-full max-w-md text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Cadastre-se como...
          </h1>
          
          <div className="flex flex-col gap-4 w-full">
            <button 
              onClick={() => {
                setTipoUsuario('profissional');
                if (errors.tipoUsuario) {
                  setErrors({...errors, tipoUsuario: null});
                }
              }}
              className={`p-4 border-2 rounded-lg text-lg font-medium transition-colors ${
                tipoUsuario === 'profissional' 
                  ? 'bg-white text-[#33196F] border-white' 
                  : 'bg-transparent text-white border-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              Profissional
            </button>
            
            <button 
              onClick={() => {
                setTipoUsuario('paciente');
                if (errors.tipoUsuario) {
                  setErrors({...errors, tipoUsuario: null});
                }
              }}
              className={`p-4 border-2 rounded-lg text-lg font-medium transition-colors ${
                tipoUsuario === 'paciente' 
                  ? 'bg-white text-[#33196F] border-white' 
                  : 'bg-transparent text-white border-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              Paciente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;