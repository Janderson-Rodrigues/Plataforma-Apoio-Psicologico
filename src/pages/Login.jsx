import React from "react";
import { useForm } from 'react-hook-form';
import FormaOrganica from '../assets/formaOrganica.png';

const Login = () => {

  return (
    <div className="flex w-full min-h-[90vh]">
      {/* Lado esquerdo*/}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="w-[424px] h-[600px]">
          <h2 className="text-[32px] font-medium mb-[75px]">Se junte a nós!</h2>
          <form className="w-full max-w-sm">
            <div className="w-[424px] h-[60px] mb-[18px]">
              <label className="font-semibold text-[16px]">Nome:</label>
              <input className="w-full h-[35px] border-[3px] border-[#000000] rounded-[10px]" type="text" />
            </div>
            <div className="w-[424px] h-[60px] mb-[18px]">
              <label className="font-semibold text-[16px]">Email:</label>
              <input className="w-full h-[35px] border-[3px] border-[#000000] rounded-[10px]" type="email" />
            </div>
            <div className="w-[424px] h-[60px] mb-[75px]">
              <label className="font-semibold text-[16px]">Senha:</label>
              <input className="w-full h-[35px] border-[3px] border-[#000000] rounded-[10px]" type="password" />
            </div>
            <button className="bg-[#5F6FFF] text-[#FFFFFF] py-2 rounded-[10px] font-bold text-[16px] w-[424px] h-[35px] mb-[27px] hover:bg-[#625fff] duration-300">Vamos lá!</button>
          </form>
          <div className="flex items-center justify-center w-full max-w-sm mb-[27px]">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2">ou</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="border p-2 rounded flex items-center">Sign in with Google</button>
            <button className="border p-2 rounded flex items-center">Sign in with Apple</button>
          </div>
            <p className="mt-4 text-gray-600">
              Já é cadastrado? <a href="#" className="text-blue-600">Entre aqui</a>
            </p>
        </div>
      </div>
      
      {/* Lado direito */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${FormaOrganica})` }}>
        <h2 className="text-[45px] text-[#33196F] font-semibold mb-[25%]">Entrar como..</h2>
        <div className="flex gap-[30px]">
          <button className="pt-[9px] pb-[9px] pl-[35px] pr-[35px] border-[3px] border-[#33196F] rounded-[10px] text-[#FFFFFF] text-[32px] font-medium hover:scale-110 duration-300">Profissional</button>
          <button className="pt-[9px] pb-[9px] pl-[35px] pr-[35px] border-[3px] border-[#33196F] rounded-[10px] text-[#FFFFFF] text-[32px] font-medium hover:scale-110 duration-300">Paciente</button>
        </div>
      </div>
    </div>
  );
};

export default Login;