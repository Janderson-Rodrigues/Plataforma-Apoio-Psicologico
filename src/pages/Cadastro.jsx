import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormaOrganica from '../assets/formaOrganica.png';

const Login = () => {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (tipoUsuario === 'profissional') {
      navigate('/CadastroProfissional');
    } else if (tipoUsuario === 'paciente') {
      navigate('/CadastroPaciente');
    } else {
      alert("Por favor, selecione um tipo de usuário");
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
          
          <form className="w-full mb-6">
            <div className="mb-4">
              <label className="block font-semibold mb-2 text-gray-700">Nome:</label>
              <input 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5F6FFF] bg-white" 
                type="text" 
                placeholder="Seu nome completo"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block font-semibold mb-2 text-gray-700">Email:</label>
              <input 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5F6FFF] bg-white" 
                type="email" 
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block font-semibold mb-2 text-gray-700">Senha:</label>
              <input 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5F6FFF] bg-white" 
                type="password" 
                placeholder="Crie uma senha"
                required
              />
            </div>
            
            <button 
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#5F6FFF] text-white py-3 rounded-lg font-bold hover:bg-[#4A5BFF] transition-colors"
            >
              Vamos lá!
            </button>
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
              onClick={() => setTipoUsuario('profissional')}
              className={`p-4 border-2 rounded-lg text-lg font-medium transition-colors ${
                tipoUsuario === 'profissional' 
                  ? 'bg-white text-[#33196F] border-white' 
                  : 'bg-transparent text-white border-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              Profissional
            </button>
            
            <button 
              onClick={() => setTipoUsuario('paciente')}
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

export default Login;