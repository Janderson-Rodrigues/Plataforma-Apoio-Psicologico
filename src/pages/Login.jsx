import React, { useState } from "react";
import FormaOrganica from '../assets/formaOrganica.png';

const Login = () => {
  const [userType, setUserType] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Lado esquerdo - Formulário de Cadastro */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Se junte a nós!</h1>
          <form className="w-full mb-6">
            <div className="mb-4">
              <label className="block font-semibold mb-2">Nome:</label>
              <input 
                className="w-full p-2 border-2 border-black rounded-lg" 
                type="text" 
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Email:</label>
              <input 
                className="w-full p-2 border-2 border-black rounded-lg" 
                type="email" 
              />
            </div>
            <div className="mb-8">
              <label className="block font-semibold mb-2">Senha:</label>
              <input 
                className="w-full p-2 border-2 border-black rounded-lg" 
                type="password" 
              />
            </div>
            
            {userType && (
              <p className="mb-4 text-center font-medium">
                Cadastrando como: {userType === 'professional' ? 'Profissional' : 'Paciente'}
              </p>
            )}
            
            <button 
              type="button"
              className="w-full bg-[#5F6FFF] text-white py-2 rounded-lg font-bold mb-6"
            >
              Vamos lá!
            </button>
          </form>
          
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4">ou</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex-1 border p-2 rounded flex items-center justify-center gap-2">
              <span>Entrar com o Google</span>
            </button>
            <button className="flex-1 border p-2 rounded flex items-center justify-center gap-2">
              <span>Entrar com a Apple</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Lado direito - Seleção de Tipo */}
      <div 
        className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-cover bg-center min-h-[50vh] lg:min-h-screen"
        style={{ backgroundImage: `url(${FormaOrganica})` }}
      >
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-[#33196F] mb-8 text-center">
            Cadastre-se como...
          </h1>
          <div className="flex flex-col gap-4 w-full">
            <button 
              onClick={() => setUserType('professional')}
              className={`p-4 border-2 border-[#33196F] rounded-lg text-lg font-medium ${
                userType === 'professional' ? 'bg-[#33196F] text-white' : 'bg-white text-[#33196F]'
              }`}
            >
              Profissional
            </button>
            <button 
              onClick={() => setUserType('patient')}
              className={`p-4 border-2 border-[#33196F] rounded-lg text-lg font-medium ${
                userType === 'patient' ? 'bg-[#33196F] text-white' : 'bg-white text-[#33196F]'
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