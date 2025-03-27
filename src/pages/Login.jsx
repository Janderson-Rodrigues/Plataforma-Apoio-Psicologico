import React from 'react';
import ImagemLogin from '../assets/Consulta_online.png';
import FormaOrganica from '../assets/formaOrganica.png';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Coluna da Imagem (esquerda - visível apenas em desktop) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-8 bg-white relative overflow-hidden">
        {/* Forma orgânica de fundo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={FormaOrganica} 
            alt="Forma orgânica decorativa"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Container da imagem principal */}
        <div className="relative z-10 w-full max-w-lg">
          <div className="relative">
            {/* Imagem principal sem sombra */}
            <img 
              src={ImagemLogin} 
              alt="Ilustração de apoio psicológico"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Coluna do Formulário (direita) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-12 px-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 sm:rounded-lg sm:px-10">
            <form className="space-y-6">
             

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Senha:
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Fazer Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;