import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormaOrganica from '../assets/formaOrganica.png';
import usuarioService from '../services/usuarioServices';

// Componente de Notificação customizado com Tailwind
const Notification = ({ message, type, onClose }) => {
  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';
  const borderColor = type === 'error' ? 'border-red-600' : 'border-green-600';

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg border-l-4 ${borderColor} flex items-center justify-between min-w-[300px] z-50 animate-fade-in`}>
      <span>{message}</span>
      <button 
        onClick={onClose}
        className="ml-4 text-xl font-bold hover:text-gray-200"
      >
        &times;
      </button>
    </div>
  );
};

const Cadastro = () => {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  // Fechar notificação automaticamente após 5 segundos
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const usuarioData = {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
        tipo: tipoUsuario === 'profissional' ? 'PROFISSIONAL' : 'PACIENTE'
      };
      
      const response = await usuarioService.criar(usuarioData);
      
      setNotification({
        message: 'Cadastro realizado com sucesso! Redirecionando...',
        type: 'success'
      });
      
      setTimeout(() => {
        if (tipoUsuario === 'profissional') {
          navigate('/CadastroProfissional', { state: { userId: response.id_usuario } });
        } else {
          navigate('/CadastroPaciente', { state: { userId: response.id_usuario } });
        }
      }, 2000);
      
    } catch (error) {
      console.error('Erro no cadastro:', error);
      setNotification({
        message: error.message || 'Erro ao realizar cadastro',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
      {/* Notificação */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      
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
                className={`w-full p-3 border ${errors.nome ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F6FFF] focus:border-transparent bg-white transition-colors`} 
                type="text" 
                placeholder="Seu nome completo"
                disabled={loading}
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block font-semibold mb-2 text-gray-700">Email:</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F6FFF] focus:border-transparent bg-white transition-colors`} 
                type="email" 
                placeholder="seu@email.com"
                disabled={loading}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className="mb-6">
              <label className="block font-semibold mb-2 text-gray-700">Senha:</label>
              <input 
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.senha ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F6FFF] focus:border-transparent bg-white transition-colors`} 
                type="password" 
                placeholder="Crie uma senha"
                disabled={loading}
              />
              {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha}</p>}
            </div>
            
            {tipoUsuario && (
              <p className="mb-4 text-center font-medium text-gray-600">
                Cadastrando como: <span className="font-bold">{tipoUsuario === 'profissional' ? 'Profissional' : 'Paciente'}</span>
              </p>
            )}
            {errors.tipoUsuario && <p className="text-red-500 text-sm mt-1 mb-4 text-center">{errors.tipoUsuario}</p>}
            
            <button 
              type="submit"
              className={`w-full bg-[#5F6FFF] text-white py-3 rounded-lg font-bold hover:bg-[#4A5BFF] transition-colors mb-4 flex items-center justify-center ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processando...
                </>
              ) : (
                'Vamos lá!'
              )}
            </button>

            <div className="text-center">
              <Link 
                to="/Login" 
                className="text-[#5F6FFF] hover:underline transition-colors"
              >
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
            <button 
              className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors bg-white disabled:opacity-50"
              disabled={loading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.664-4.153-2.675-6.735-2.675-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.61-0.053-1.209-0.145-1.791h-9.855z"/>
              </svg>
              <span className="text-gray-700">Entrar com Google</span>
            </button>
            <button 
              className="flex-1 border border-gray-300 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors bg-white disabled:opacity-50"
              disabled={loading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53-1.71-2.48-3-7.01-1.26-10.08 1.72-3.01 4.56-3.99 6.96-4.03 1.36-.04 2.64.49 3.63 1.25 1.03.81 1.73 2.02 2.73 1.97.99-.05 1.62-.61 3.03-.56.51.02 2.04.19 3 1.4-2.8 1.65-2.19 5.99.85 7.19-.53 1.42-1.23 2.83-2.2 3.89zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-gray-700">Entrar com Apple</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Lado Direito - Seleção de Tipo */}
      <div 
        className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 min-h-[50vh] lg:min-h-screen relative bg-[#5F6FFF]"
        style={{ backgroundImage: `url(${FormaOrganica})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#5F6FFF] opacity-90"></div>
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
                  ? 'bg-white text-[#5F6FFF] border-white' 
                  : 'bg-transparent text-white border-white hover:bg-white hover:bg-opacity-20'
              } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
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
                  ? 'bg-white text-[#5F6FFF] border-white' 
                  : 'bg-transparent text-white border-white hover:bg-white hover:bg-opacity-20'
              } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
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