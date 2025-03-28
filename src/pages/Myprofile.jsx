import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DepoimentoForm from "../componets/DepoimentoForm";
import Perfil from '../images/perfil.png';
import Agenda from "../componets/Agenda";

// Dados mockados do paciente (simplificados)
const mockPaciente = {
  infoBasicas: {
    nome: "Carlos Eduardo Silva",
    idade: 32,
    genero: "Masculino",
    email: "carlos.silva@email.com",
    telefone: "(11) 98765-4321",
    foto: Perfil,
    dataNascimento: "15/03/1991"
  },
  saude: {
    alergias: "Nenhuma",
    medicamentos: "Nenhum",
    condicoes: "Ansiedade moderada"
  },
  historico: {
    primeiroAtendimento: "10/01/2022",
    totalConsultas: 24,
    profissionalAtual: "Dra. Ana Silva",
    ultimaConsulta: "15/11/2023",
    proximaConsulta: "22/11/2023"
  },
  depoimentos: [
    {
      id: 1,
      texto: "Ótimo atendimento, recomendo! A equipe foi muito prestativa e profissional.",
      data: "10/10/2023",
      avaliacao: 5
    },
    {
      id: 2,
      texto: "Profissionais muito atenciosos e competentes. Minha experiência foi incrível!",
      data: "05/10/2023",
      avaliacao: 4
    }
  ],
  consultasAgendadas: [
    {
      id: 1,
      data: "22/11/2023",
      horario: "14:00",
      profissional: "Dra. Ana Silva",
      tipo: "Online",
      link: "https://meet.google.com/abc-xyz-123"
    },
    {
      id: 2,
      data: "29/11/2023",
      horario: "10:30",
      profissional: "Dra. Ana Silva",
      tipo: "Presencial",
      endereco: "Clínica Bem Estar, Sala 203"
    }
  ]
};

const PacientePerfil = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [perfil, setPerfil] = useState(mockPaciente.infoBasicas);
  const [depoimentos, setDepoimentos] = useState(mockPaciente.depoimentos);

  const handleSave = (novoPerfil) => {
    setPerfil({...perfil, ...novoPerfil});
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

  const handleAddDepoimento = (novoDepoimento) => {
    setDepoimentos([{
      id: Date.now(),
      texto: novoDepoimento.texto,
      data: new Date().toLocaleDateString('pt-BR'),
      avaliacao: novoDepoimento.avaliacao
    }, ...depoimentos]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
        {/* Coluna da Esquerda - Agenda */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Minha Agenda</h2>
            <Agenda consultas={mockPaciente.consultasAgendadas} />
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
                <p className="text-gray-600 text-lg">{perfil.idade} anos • {mockPaciente.infoBasicas.genero}</p>
                <p className="text-gray-500 text-sm mt-1">{mockPaciente.historico.profissionalAtual}</p>
              </div>
            </div>
            
            {/* Seção de Informações */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Informações Pessoais</h3>
                <p><span className="text-gray-600">Email:</span> {perfil.email}</p>
                <p><span className="text-gray-600">Telefone:</span> {perfil.telefone}</p>
                <p><span className="text-gray-600">Nascimento:</span> {mockPaciente.infoBasicas.dataNascimento}</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Saúde</h3>
                <p><span className="text-gray-600">Alergias:</span> {mockPaciente.saude.alergias}</p>
                <p><span className="text-gray-600">Medicamentos:</span> {mockPaciente.saude.medicamentos}</p>
                <p><span className="text-gray-600">Condições:</span> {mockPaciente.saude.condicoes}</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg md:col-span-2">
                <h3 className="font-semibold text-purple-800 mb-2">Histórico de Consultas</h3>
                <p><span className="text-gray-600">Primeiro atendimento:</span> {mockPaciente.historico.primeiroAtendimento}</p>
                <p><span className="text-gray-600">Total de consultas:</span> {mockPaciente.historico.totalConsultas}</p>
                <p><span className="text-gray-600">Última consulta:</span> {mockPaciente.historico.ultimaConsulta}</p>
                <p><span className="text-gray-600">Próxima consulta:</span> {mockPaciente.historico.proximaConsulta}</p>
              </div>
            </div>
            
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
            <DepoimentoForm onAddDepoimento={handleAddDepoimento} />
            
            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Meus Depoimentos</h3>
              <div className="space-y-6">
                {depoimentos.map(depoimento => (
                  <div key={depoimento.id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <p className="text-gray-700 italic text-lg">"{depoimento.texto}"</p>
                        <div className="flex items-center mt-3">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < depoimento.avaliacao ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{depoimento.data}</span>
                    </div>
                  </div>
                ))}
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
                const email = e.target.email.value;
                const telefone = e.target.telefone.value;
                handleSave({ ...perfil, nome, idade, email, telefone });
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  defaultValue={perfil.nome}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Idade</label>
                <input
                  type="number"
                  name="idade"
                  defaultValue={perfil.idade}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={perfil.email}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  defaultValue={perfil.telefone}
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