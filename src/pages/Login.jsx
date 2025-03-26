import React from "react";
import { useForm } from 'react-hook-form';
import FormaOrganica from '../assets/formaOrganica.png';

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen md:min-h-[90vh]">
      {/* Lado esquerdo - Formulário */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 md:p-10">
        <div className="w-full max-w-[424px]">
          <h2 className="text-2xl md:text-[32px] font-medium mb-8 md:mb-[75px] text-center lg:text-left">Se junte a nós!</h2>
          <form className="w-full">
            <div className="w-full mb-4 md:mb-[18px]">
              <label className="font-semibold text-sm md:text-[16px]">Nome:</label>
              <input 
                className="w-full h-8 md:h-[35px] border-2 md:border-[3px] border-[#000000] rounded-lg md:rounded-[10px]" 
                type="text" 
              />
            </div>
            <div className="w-full mb-4 md:mb-[18px]">
              <label className="font-semibold text-sm md:text-[16px]">Email:</label>
              <input 
                className="w-full h-8 md:h-[35px] border-2 md:border-[3px] border-[#000000] rounded-lg md:rounded-[10px]" 
                type="email" 
              />
            </div>
            <div className="w-full mb-8 md:mb-[75px]">
              <label className="font-semibold text-sm md:text-[16px]">Senha:</label>
              <input 
                className="w-full h-8 md:h-[35px] border-2 md:border-[3px] border-[#000000] rounded-lg md:rounded-[10px]" 
                type="password" 
              />
            </div>
            <button className="bg-[#5F6FFF] text-white py-1 md:py-2 rounded-lg md:rounded-[10px] font-bold text-sm md:text-[16px] w-full h-8 md:h-[35px] mb-4 md:mb-[27px]">
              Vamos lá!
            </button>
          </form>
          <div className="flex items-center justify-center w-full mb-4 md:mb-[27px]">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2">ou</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button className="border p-2 rounded flex items-center justify-center text-sm">
              Sign in with Google
            </button>
            <button className="border p-2 rounded flex items-center justify-center text-sm">
              Sign in with Apple
            </button>
          </div>
          <p className="mt-4 text-gray-600 text-center text-sm md:text-base">
            Já é cadastrado? <a href="#" className="text-blue-600">Entre aqui</a>
          </p>
        </div>
      </div>
      
      {/* Lado direito - Imagem e botões */}
      <div 
        className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 md:p-10 bg-cover bg-center min-h-[300px] md:min-h-[50vh] lg:min-h-[90vh]" 
        style={{ backgroundImage: `url(${FormaOrganica})` }}
      >
        <h2 className="text-2xl md:text-4xl text-[#33196F] font-semibold mb-8 md:mb-[25%] text-center">
          Entrar como..
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-[30px] w-full max-w-md justify-center">
          <button className="px-4 py-2 md:pt-[9px] md:pb-[9px] md:pl-[35px] md:pr-[35px] border-2 md:border-[3px] border-[#33196F] rounded-lg md:rounded-[10px] text-white text-lg md:text-2xl font-medium">
            Profissional
          </button>
          <button className="px-4 py-2 md:pt-[9px] md:pb-[9px] md:pl-[35px] md:pr-[35px] border-2 md:border-[3px] border-[#33196F] rounded-lg md:rounded-[10px] text-white text-lg md:text-2xl font-medium">
            Paciente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;