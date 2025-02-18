import React from "react";
import DepoimentoForm from "../componets/DepoimentoForm";
import Perfil from '../images/perfil.png'

const PacientePerfil = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      {/* Seção do Perfil */}
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-4xl mb-10 border border-gray-100">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Meu Perfil</h2>
        
        {/* Informações do Paciente */}
        <div className="flex items-center mb-8">
          <img
            src={Perfil}
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full mr-6 border-4 border-blue-100"
          />
          <div>
            <p className="text-gray-800 font-bold text-2xl">Paciente</p>
            <p className="text-gray-600 text-lg">Idade: XX anos</p>
          </div>
        </div>
        
        {/* Descrição */}
        <p className="text-gray-700 text-lg mb-8">
          Bem-vindo ao seu perfil! Aqui você pode visualizar e gerenciar suas informações pessoais e interagir com a plataforma.
        </p>
        
        {/* Botões de Ação */}
        <div className="flex space-x-6">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-lg">
            Editar Perfil
          </button>
          <button className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition duration-300 transform hover:scale-105 text-lg">
            Agendar Consulta
          </button>
        </div>
      </div>

      {/* Seção de Depoimentos */}
      <div className="w-full max-w-4xl">
        <DepoimentoForm />
        
        {/* Lista de Depoimentos */}
        <div className="mt-10">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Meus Depoimentos</h3>
          <div className="space-y-6">
            {/* Depoimento 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <p className="text-gray-700 italic text-lg">"Ótimo atendimento, recomendo! A equipe foi muito prestativa e profissional."</p>
              <p className="text-sm text-gray-500 mt-3">- 10/10/2023</p>
            </div>
            
            {/* Depoimento 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <p className="text-gray-700 italic text-lg">"Profissionais muito atenciosos e competentes. Minha experiência foi incrível!"</p>
              <p className="text-sm text-gray-500 mt-3">- 05/10/2023</p>
            </div>
            
            {/* Adicione mais depoimentos aqui */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacientePerfil;