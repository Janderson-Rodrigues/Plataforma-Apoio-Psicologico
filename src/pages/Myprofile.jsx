import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DepoimentoForm from "../componets/DepoimentoForm";
import Perfil from '../images/perfil.png';
import Agenda from "../componets/Agenda"; // Importando o componente Agenda

const PacientePerfil = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [perfil, setPerfil] = useState({ nome: "Paciente", idade: 25, foto: Perfil });

  const handleSave = (novoPerfil) => {
    setPerfil(novoPerfil);
    setIsEditing(false);
  };

  const handleAgendarConsulta = () => {
    navigate("/psicologos");
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPerfil((prevPerfil) => ({ ...prevPerfil, foto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      {/* Layout de duas colunas */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
        {/* Coluna da Esquerda - Agenda */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Minha Agenda</h2>
            <Agenda /> {/* Componente Agenda incorporado */}
          </div>
        </div>

        {/* Coluna da Direita - Perfil e Depoimentos */}
        <div className="lg:w-2/3">
          {/* Seção do Perfil */}
          <div className="bg-white p-10 rounded-2xl shadow-xl mb-8 border border-gray-100">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Meu Perfil</h2>
            
            <div className="flex items-center mb-8">
              <div className="relative">
                <img
                  src={perfil.foto}
                  alt="Foto de perfil"
                  className="w-32 h-32 rounded-full mr-6 border-4 border-blue-100"
                />
                <label
                  htmlFor="fotoPerfil"
                  className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600"
                >
                  ✏️
                  <input
                    type="file"
                    id="fotoPerfil"
                    accept="image/*"
                    onChange={handleFotoChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <p className="text-gray-800 font-bold text-2xl">{perfil.nome}</p>
                <p className="text-gray-600 text-lg">Idade: {perfil.idade} anos</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mb-8">
              Bem-vindo ao seu perfil! Aqui você pode visualizar e gerenciar suas informações pessoais e interagir com a plataforma.
            </p>
            
            <div className="flex space-x-6">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-lg"
              >
                Editar Perfil
              </button>
              <button
                onClick={handleAgendarConsulta}
                className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition duration-300 transform hover:scale-105 text-lg"
              >
                Agendar Consulta
              </button>
            </div>
          </div>

          {/* Seção de Depoimentos */}
          <div>
            <DepoimentoForm />
            
            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Meus Depoimentos</h3>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                  <p className="text-gray-700 italic text-lg">"Ótimo atendimento, recomendo! A equipe foi muito prestativa e profissional."</p>
                  <p className="text-sm text-gray-500 mt-3">- 10/10/2023</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                  <p className="text-gray-700 italic text-lg">"Profissionais muito atenciosos e competentes. Minha experiência foi incrível!"</p>
                  <p className="text-sm text-gray-500 mt-3">- 05/10/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Edição de Perfil */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Editar Perfil</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const nome = e.target.nome.value;
                const idade = parseInt(e.target.idade.value, 10);
                handleSave({ ...perfil, nome, idade });
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  name="nome"
                  defaultValue={perfil.nome}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Idade</label>
                <input
                  type="number"
                  name="idade"
                  defaultValue={perfil.idade}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PacientePerfil;