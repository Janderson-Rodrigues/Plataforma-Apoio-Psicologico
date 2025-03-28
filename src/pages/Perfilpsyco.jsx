import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PsicologoPerfil from "../images/psicologo-perfil.png";
import Agenda from "../componets/Agenda";

// Componente para o menu horizontal simplificado
const MenuHorizontal = ({ onPacientesClick, onAvaliacoesClick }) => {
  return (
    <div className="flex justify-around p-4">
      <button 
        onClick={onPacientesClick}
        className="text-blue-600 font-medium hover:text-blue-800 text-lg"
      >
        Meus Pacientes
      </button>
      <button 
        onClick={onAvaliacoesClick}
        className="text-blue-600 font-medium hover:text-blue-800 text-lg"
      >
        Minhas Avaliações
      </button>
    </div>
  );
};

// Componente para a lista de pacientes
const ListaPacientes = ({ pacientes, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Meus Pacientes</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4">
          {pacientes.map((paciente) => (
            <div key={paciente.id} className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{paciente.nome}</h3>
                  <p className="text-gray-600">{paciente.ultimaSessao}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Próxima sessão: {paciente.proximaSessao}</p>
                  <p className={`text-sm ${paciente.status === 'ativo' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {paciente.status === 'ativo' ? 'Ativo' : 'Inativo'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
  const [showPacientes, setShowPacientes] = useState(false);
  const [showAvaliacoes, setShowAvaliacoes] = useState(false);
  
  // Dados mockados do psicólogo
  const [perfil, setPerfil] = useState({
    nome: "Dra. Ana Carolina Mendes",
    especializacao: "Psicologia Clínica e Terapia Cognitivo-Comportamental",
    descricao: "Formada pela Universidade de São Paulo com 12 anos de experiência clínica.",
    foto: PsicologoPerfil,
    formacao: "PhD em Psicologia Clínica - USP (2015)",
    experiencia: [
      "Professora Universitária - 2016-2020",
      "Supervisora Clínica - 2018-presente"
    ],
    abordagens: [
      "Terapia Cognitivo-Comportamental",
      "Mindfulness",
      "Terapia do Esquema"
    ],
    contato: {
      telefone: "(11) 98765-4321",
      email: "ana.mendes@psicologia.com",
      endereco: "Av. Paulista, 1000 - São Paulo/SP"
    },
    valorConsulta: "R$ 250,00",
    atendimentoOnline: true
  });

  // Dados mockados dos pacientes
  const [pacientes] = useState([
    {
      id: 1,
      nome: "Carlos Eduardo Silva",
      ultimaSessao: "Última sessão: 15/05/2023",
      proximaSessao: "20/05/2023",
      status: "ativo"
    },
    {
      id: 2,
      nome: "Mariana Oliveira",
      ultimaSessao: "Última sessão: 10/05/2023",
      proximaSessao: "25/05/2023",
      status: "ativo"
    },
    {
      id: 3,
      nome: "Ricardo Almeida",
      ultimaSessao: "Última sessão: 05/04/2023",
      proximaSessao: "-",
      status: "inativo"
    },
    {
      id: 4,
      nome: "Fernanda Costa",
      ultimaSessao: "Última sessão: 12/05/2023",
      proximaSessao: "19/05/2023",
      status: "ativo"
    }
  ]);

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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="flex w-full max-w-6xl gap-10">
        {/* Perfil (Esquerda) */}
        <div className="bg-white p-10 rounded-2xl shadow-xl w-1/2 border border-gray-100">
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
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Descrição</h3>
            <p className="text-gray-700">{perfil.descricao}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Formação</h3>
            <p className="text-gray-700">{perfil.formacao}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Experiência</h3>
            <ul className="list-disc list-inside text-gray-700">
              {perfil.experiencia.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Abordagens</h3>
            <ul className="list-disc list-inside text-gray-700">
              {perfil.abordagens.map((abordagem, index) => (
                <li key={index}>{abordagem}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Contato</h3>
            <p className="text-gray-700">Telefone: {perfil.contato.telefone}</p>
            <p className="text-gray-700">Email: {perfil.contato.email}</p>
            <p className="text-gray-700">Endereço: {perfil.contato.endereco}</p>
            <p className="text-gray-700">Valor da consulta: {perfil.valorConsulta}</p>
            <p className="text-gray-700">Atendimento online: {perfil.atendimentoOnline ? "Disponível" : "Não disponível"}</p>
          </div>
          
          <div className="flex space-x-6">
            <button 
              onClick={() => setIsEditing(true)} 
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 text-lg"
            >
              Editar Perfil
            </button>
            <button 
              onClick={() => navigate("/agenda")} 
              className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 text-lg"
            >
              Ver Agenda
            </button>
          </div>
        </div>

        {/* Agenda (Direita) */}
        <div className="flex flex-col w-1/2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Agenda</h3>
            <Agenda />
          </div>
          
          {/* Menu Horizontal Simplificado */}
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
            <MenuHorizontal 
              onPacientesClick={() => setShowPacientes(true)}
              onAvaliacoesClick={() => setShowAvaliacoes(true)}
            />
          </div>
        </div>
      </div>

      {isEditing && <EditarPerfilModal perfil={perfil} handleSave={handleSave} setIsEditing={setIsEditing} />}
      
      {showPacientes && (
        <ListaPacientes 
          pacientes={pacientes}
          onClose={() => setShowPacientes(false)}
        />
      )}
      
      {showAvaliacoes && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Minhas Avaliações</h2>
              <button 
                onClick={() => setShowAvaliacoes(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-700">Avaliações dos pacientes aparecerão aqui.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PsicologoPerfilPage;