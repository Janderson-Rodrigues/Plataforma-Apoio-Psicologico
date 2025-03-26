import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PsicologoPerfil from "../images/psicologo-perfil.png";
import MenuHorizontal from "../componets/Config_Psicologo";
import Agenda from "../componets/Agenda";

const EditarPerfilModal = ({ perfil, handleSave, setIsEditing }) => {
  const [novoPerfil, setNovoPerfil] = useState(perfil);

  const handleChange = (e) => {
    setNovoPerfil({ ...novoPerfil, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Editar Perfil</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave(novoPerfil);
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              name="nome"
              value={novoPerfil.nome}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Especialização</label>
            <input
              type="text"
              name="especializacao"
              value={novoPerfil.especializacao}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Descrição</label>
            <textarea
              name="descricao"
              value={novoPerfil.descricao}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
  );
};

const PsicologoPerfilPage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [perfil, setPerfil] = useState({
    nome: "Dr. João Silva",
    especializacao: "Psicologia Clínica",
    descricao: "Especialista em terapia cognitivo-comportamental com 10 anos de experiência.",
    foto: PsicologoPerfil,
    horarios: [""],
  });

  const handleSave = (novoPerfil) => {
    setPerfil(novoPerfil);
    setIsEditing(false);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-4xl mb-10 border border-gray-100">
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
            <p className="text-gray-600 text-lg">{perfil.especializacao}</p>
          </div>
        </div>
        <p className="text-gray-700 text-lg mb-8">{perfil.descricao}</p>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Horários Disponíveis</h3>
          <ul className="list-disc list-inside text-gray-700">
            {perfil.horarios.map((horario, index) => (
              <li key={index} className="text-lg">{horario}</li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-6">
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 text-lg">Editar Perfil</button>
          <button onClick={() => navigate("/agenda")} className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 text-lg">Ver Agenda</button>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <MenuHorizontal />
      </div>
      <div className="w-full max-w-4xl mt-10">
        <Agenda />
      </div>
      {isEditing && <EditarPerfilModal perfil={perfil} handleSave={handleSave} setIsEditing={setIsEditing} />}
    </div>
  );
};

export default PsicologoPerfilPage;
